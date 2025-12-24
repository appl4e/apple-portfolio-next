import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as yup from "yup";

const contactSchema = yup.object({
	name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
	email: yup.string().email("Invalid email address").required("Email is required"),
	subject: yup.string().required("Subject is required"),
	message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
});

export async function POST(req: Request) {
	try {
		const body = await req.json();

		// 1. Validate the data
		try {
			await contactSchema.validate(body);
		} catch (validationError: any) {
			return NextResponse.json({ error: validationError.errors[0] }, { status: 400 });
		}

		const { name, email, subject, message } = body;

		// 2. Save to Database (MongoDB via Prisma)
		const savedContact = await db.contact.create({
			data: {
				name,
				email,
				subject,
				message,
			},
		});

		// 3. Send Email Notification
		// SMTP Config from .env.local (provided by user)
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		const mailOptions = {
			from: `"Portfolio Contact Form" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
			to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
			subject: `New Contact Message: ${subject}`,
			text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
			html: `
				<div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
					<h2 style="color: #3b82f6;">New Contact Message Received</h2>
					<p><strong>Name:</strong> ${name}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Subject:</strong> ${subject}</p>
					<hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
					<p><strong>Message:</strong></p>
					<p style="white-space: pre-wrap;">${message}</p>
				</div>
			`,
		};

		console.log("Sending Mail");
		await transporter.sendMail(mailOptions);
		console.log("Mail sent");

		return NextResponse.json({ message: "Message sent successfully", id: savedContact.id }, { status: 200 });
	} catch (error: any) {
		console.error("Contact API Error:", error);
		return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
	}
}

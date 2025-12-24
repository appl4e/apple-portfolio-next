"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const contactSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

type ContactFormData = yup.InferType<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Something went wrong. Please try again."
        );
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      reset();
    } catch (error: any) {
      setStatus({
        type: "error",
        message: error.message || "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-serif">
              Let's Connect
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind or just want to say hi? I'm always open to
              discussing new opportunities and challenges.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border border-border/50">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <a
                  href={`mailto:${DATA.contact.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {DATA.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border border-border/50">
              <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <a
                  href={`tel:${DATA.contact.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {DATA.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border border-border/50">
              <div className="p-2 bg-accent rounded-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-muted-foreground">{DATA.contact.address}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm border-none shadow-2xl shadow-primary/20">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">
                Send a Message
              </CardTitle>
              <CardDescription>
                I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium mb-2 inline-block"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      {...register("name")}
                      className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${
                        errors.name ? "border-destructive" : "border-input"
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium mb-2 inline-block"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${
                        errors.email ? "border-destructive" : "border-input"
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium mb-2 inline-block"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    {...register("subject")}
                    className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${
                      errors.subject ? "border-destructive" : "border-input"
                    }`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="text-xs text-destructive">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium mb-2 inline-block"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    className={`flex min-h-[120px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                      errors.message ? "border-destructive" : "border-input"
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {status && (
                  <div
                    className={`p-4 rounded-lg flex items-center gap-3 ${
                      status.type === "success"
                        ? "bg-green-500/10 text-green-500 border border-green-500/20"
                        : "bg-destructive/10 text-destructive border border-destructive/20"
                    }`}
                  >
                    {status.type === "success" && (
                      <CheckCircle2 className="h-5 w-5 shrink-0" />
                    )}
                    <p className="text-sm">{status.message}</p>
                  </div>
                )}

                <Button
                  disabled={isSubmitting}
                  className="w-full gap-2 group relative overflow-hidden h-11"
                >
                  <span
                    className={`flex items-center gap-2 transition-transform ${
                      isSubmitting ? "-translate-y-10" : ""
                    }`}
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

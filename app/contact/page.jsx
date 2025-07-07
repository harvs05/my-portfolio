"use client";

import { useState } from "react";
import { toast } from "sonner"; // ✅ new
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaSpinner} from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+63)932 7449 463",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "harveyv291@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Cebu City Philippines",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setForm({ ...form, service: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  setLoading(false);

  if (res.ok) {
    toast.success("✅ Message sent successfully! I’ll get back to you soon.");
    setForm({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  } else {
    toast.error("❌ Something went wrong. Please try again later.");
  }
};

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.6, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Got a project in mind or just want to connect? Let’s talk and
                build something awesome together.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  placeholder="Firstname"
                />
                <Input
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  placeholder="Lastname"
                />
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />
                <Input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                />
              </div>
              {/* select */}
              <Select value={form.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Website Developer">
                      Website Developer
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Digital Ads Design">
                      Digital Ads Design
                    </SelectItem>
                    <SelectItem value="Social Media Design">
                      Social Media Design
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here."
              />
              
              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <FaSpinner className="animate-spin w-4 h-4" />
                    Sending...
                  </span>
                ) : (
                  "Send message"
                )}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center gap-6"
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

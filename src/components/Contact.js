import React, { useState } from "react";
import toast from "react-hot-toast"; // Import toast

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    const nameTrimmed = formData.name.trim();
    if (!nameTrimmed) {
      newErrors.name = "Name is required";
    } else if (!/[a-zA-Z]/.test(nameTrimmed)) {
      newErrors.name = "Name must contain at least one letter";
    } else if (nameTrimmed.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailTrimmed = formData.email.trim();
    if (!emailTrimmed) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(emailTrimmed)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    const messageTrimmed = formData.message.trim();
    if (!messageTrimmed) {
      newErrors.message = "Message is required";
    } else if (messageTrimmed.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Optional: toast for validation errors too
      toast.error("Please fix the errors in the form");
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://getform.io/f/cc6107c6-3b09-4959-a469-0cd3112c3f37",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
          }).toString(),
        }
      );

      if (response.ok) {
        toast.success(
          "Thank you! Your message has been sent successfully. I'll get back to you soon."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Oops! Something went wrong. Please try again later.");
      }
    } catch (err) {
      toast.error(
        "Failed to send message. Check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold inline-block">Contact</h2>
          <div className="w-16 h-[2px] bg-cyan-500/60 mt-3" />
          <p className="mt-4 text-gray-400 max-w-xl">
            Open to opportunities, collaborations, and frontend development work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-gray-300">
            <h3 className="text-2xl font-semibold text-white">
              Let’s build something meaningful
            </h3>
            <p>
              If you’re looking for a frontend software developer who enjoys
              building modern web applications, user-focused interfaces, and
              scalable frontend systems, feel free to reach out.
            </p>
            <ul className="space-y-3">
              <li>• Frontend web applications & interfaces</li>
              <li>• Product platforms, company projects, and personal work</li>
              <li>
                • Full-time roles, freelance, or collaboration opportunities
              </li>
            </ul>
            <div className="pt-4">
              <p className="text-gray-400">Or reach me directly:</p>
              <p className="mt-2">
                <a
                  href="mailto:thevivekrraut@gmail.com"
                  className="text-cyan-400 hover:underline"
                >
                  thevivekrraut@gmail.com
                </a>
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-5"
            noValidate
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full p-3 bg-transparent border-2 rounded-md focus:outline-none transition-colors ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-600 focus:border-cyan-500"
                } text-white`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full p-3 bg-transparent border-2 rounded-md focus:outline-none transition-colors ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-600 focus:border-cyan-500"
                } text-white`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className={`w-full p-3 bg-transparent border-2 rounded-md focus:outline-none transition-colors resize-none ${
                  errors.message
                    ? "border-red-500"
                    : "border-gray-600 focus:border-cyan-500"
                } text-white`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-fit self-end bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-md hover:scale-105 transition disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

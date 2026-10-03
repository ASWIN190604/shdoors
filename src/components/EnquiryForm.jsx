import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, User, Phone as PhoneIcon, Package, MessageSquare } from "lucide-react";
import { WHATSAPP_NUMBER, BUSINESS_NAME } from "../data/products";

/**
 * EnquiryForm — builds a WhatsApp message from form fields and opens WhatsApp.
 */
export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    requirement: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.requirement.trim()) newErrors.requirement = "Product / Requirement is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const text =
      `Hello ${BUSINESS_NAME},\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Requirement: ${form.requirement}` +
      (form.message ? `\nMessage: ${form.message}` : "") +
      `\n\nPlease contact me.\n\nThank you.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: "" }));
  };

  const inputStyle = (field) => ({
    background: "#fff",
    border: `1px solid ${errors[field] ? "#dc2626" : "#E0D8CE"}`,
    color: "#171717",
    borderRadius: "2px",
    padding: "0.75rem 1rem",
    fontSize: "0.9375rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: '"Inter", sans-serif',
  });

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      noValidate
      aria-label="Product enquiry form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Name */}
        <div>
          <label htmlFor="enq-name" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#6B6457" }}>
            <User size={10} className="inline mr-1.5" />
            Name *
          </label>
          <input
            id="enq-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange("name")}
            placeholder="Your name"
            autoComplete="name"
            style={inputStyle("name")}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "enq-name-err" : undefined}
          />
          {errors.name && (
            <p id="enq-name-err" className="text-xs mt-1" style={{ color: "#dc2626" }}>{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="enq-phone" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#6B6457" }}>
            <PhoneIcon size={10} className="inline mr-1.5" />
            Phone Number *
          </label>
          <input
            id="enq-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange("phone")}
            placeholder="Your phone number"
            autoComplete="tel"
            style={inputStyle("phone")}
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "enq-phone-err" : undefined}
          />
          {errors.phone && (
            <p id="enq-phone-err" className="text-xs mt-1" style={{ color: "#dc2626" }}>{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Requirement */}
      <div className="mb-4">
        <label htmlFor="enq-req" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#6B6457" }}>
          <Package size={10} className="inline mr-1.5" />
          Product / Requirement *
        </label>
        <input
          id="enq-req"
          type="text"
          name="requirement"
          value={form.requirement}
          onChange={handleChange("requirement")}
          placeholder="e.g. Teak Wood Door, Flush Door, Bulk Order..."
          style={inputStyle("requirement")}
          aria-required="true"
          aria-invalid={!!errors.requirement}
          aria-describedby={errors.requirement ? "enq-req-err" : undefined}
        />
        {errors.requirement && (
          <p id="enq-req-err" className="text-xs mt-1" style={{ color: "#dc2626" }}>{errors.requirement}</p>
        )}
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="enq-msg" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#6B6457" }}>
          <MessageSquare size={10} className="inline mr-1.5" />
          Message (optional)
        </label>
        <textarea
          id="enq-msg"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange("message")}
          placeholder="Tell us more about your requirement..."
          style={{ ...inputStyle("message"), resize: "vertical", minHeight: "100px" }}
        />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-2 py-4 text-xs font-semibold tracking-widest uppercase text-white transition-all"
        style={{ background: "#25D366", borderRadius: "2px" }}
        aria-label="Send enquiry on WhatsApp"
      >
        <Send size={13} />
        {submitted ? "Opening WhatsApp…" : "Send Enquiry on WhatsApp"}
      </motion.button>

      <p className="text-xs text-center mt-3" style={{ color: "#9B9286" }}>
        This will open WhatsApp with your enquiry pre-filled.
      </p>
    </motion.form>
  );
}

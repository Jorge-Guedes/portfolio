import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguageData } from "../hooks/useLanguageData";

export const Contact = () => {
  const { data: contactData, loading } = useLanguageData("contact");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  if (loading || !contactData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("form-name", "contact");
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("message", formState.message);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center p-4 lg:p-8"
    >
      <motion.div
        className="w-full max-w-2xl p-6 lg:p-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "0px", once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-8">
          {contactData.title}
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <form
            name="contact"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-600/40 p-6 lg:p-8 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label
                htmlFor="name"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                {contactData.fields.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                placeholder={contactData.placeholders.name}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label
                htmlFor="email"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                {contactData.fields.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                placeholder={contactData.placeholders.email}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label
                htmlFor="message"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                {contactData.fields.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder={contactData.placeholders.message}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="pt-4"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 cursor-pointer"
              >
                {isSubmitting ? contactData.submitting : contactData.submit}
              </button>
            </motion.div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-green-500/20 border border-green-500/40 rounded-lg text-green-400 text-center"
              >
                {contactData.successMessage}
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-red-500/20 border border-red-500/40 rounded-lg text-red-400 text-center"
              >
                {contactData.errorMessage ||
                  "Error al enviar el mensaje. Por favor, intenta nuevamente."}
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

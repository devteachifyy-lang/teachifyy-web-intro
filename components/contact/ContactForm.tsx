'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Button from '@/components/ui/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate API call
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="input-field"
          placeholder="What is this about?"
        />
        {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="input-field resize-none"
          placeholder="Tell us more about your inquiry..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        className="w-full"
      >
        {!isSubmitting && <Send className="w-5 h-5" />}
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      {/* Success Message */}
      {submitMessage && (
        <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-primary text-center">
          {submitMessage}
        </div>
      )}
    </form>
  );
};

export default ContactForm;

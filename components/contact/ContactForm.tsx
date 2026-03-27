"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { useSubmitContactMutation } from "@/app/api/contact";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    city: "",
    profession: "",
    qualifications: "",
    message: "test"
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState("");

  const { mutate: submitContact, isPending } = useSubmitContactMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "Email Address is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.age.trim()) newErrors.age = "Age is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.profession.trim()) newErrors.profession = "Profession is required";
    if (!formData.qualifications.trim()) newErrors.qualifications = "Qualifications are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");

    if (validate()) {
      submitContact(formData, {
        onSuccess: () => {
          // Persist email so resource download popup is skipped for this user
          if (typeof window !== "undefined") {
            localStorage.setItem("lead_email", formData.email);
          }
          setSuccessMessage("Thank you! Your information has been submitted successfully.");
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            age: "",
            city: "",
            profession: "",
            qualifications: "",
            message: "Test"
          });
        },
        onError: () => {
          setErrors({ submit: "Failed to submit. Please try again later." });
        },
      });
    }
  };

  const inputClasses = "w-full border border-gray-200 rounded-[10px] px-4 py-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#FF4667]/20 focus:border-[#FF4667] transition-all bg-white text-gray-800 placeholder:text-gray-400";
  const labelClasses = "block text-[14px] font-semibold text-gray-700 mb-2.5";

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A202C] mb-8 text-center tracking-tight">
        Tell us about <span className="text-[#FF4667]">You.</span>
      </h2>

      <div className="w-full flex-grow bg-white rounded-[2rem] shadow-[0_15px_60px_rgba(0,0,0,0.08)] p-8 md:p-10 border border-gray-50/50">
        {successMessage && (
          <div className="mb-6 p-4 bg-green-50/80 border border-green-200 text-green-700 rounded-xl text-center font-medium">
            {successMessage}
          </div>
        )}

        {errors.submit && (
          <div className="mb-6 p-4 bg-red-50/80 border border-red-200 text-red-700 rounded-xl text-center font-medium">
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className={labelClasses}>Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={inputClasses}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.fullName}</p>}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className={labelClasses}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className={labelClasses}>Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>}
            </div>

            {/* Age */}
            <div>
              <label htmlFor="age" className={labelClasses}>Age</label>
              <div className="relative">
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              {errors.age && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.age}</p>}
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className={labelClasses}>City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={inputClasses}
              />
              {errors.city && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.city}</p>}
            </div>

            {/* Profession */}
            <div>
              <label htmlFor="profession" className={labelClasses}>Profession</label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className={inputClasses}
              />
              {errors.profession && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.profession}</p>}
            </div>
          </div>

          {/* Qualifications */}
          <div>
            <label htmlFor="qualifications" className={labelClasses}>Question</label>
            <input
              type="text"
              id="qualifications"
              name="qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              className={inputClasses}
            />
            {errors.qualifications && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.qualifications}</p>}
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              isLoading={isPending}
              className="w-full bg-[#FF4667] hover:bg-[#E03A56] text-white rounded-[12px] py-4 text-[16px] font-semibold border-none shadow-[0_4px_14px_rgba(255,70,103,0.3)] hover:shadow-[0_6px_20px_rgba(255,70,103,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

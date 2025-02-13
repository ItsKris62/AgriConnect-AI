"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { loginWithProvider } from "../services/authService";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

interface OverlayFormProps {
  title: string;
  buttonText: string;
  onSubmit: (data: { email: string; password: string }) => void;
  toggleForm?: () => void;
  errorMessage?: string;
  showReset?: boolean;
}

const OverlayForm: React.FC<OverlayFormProps> = ({ title, buttonText, onSubmit, toggleForm, errorMessage, showReset }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>

        {errorMessage && <p className="text-red-500 text-sm text-center mb-2">{errorMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
          <Input label="Password" type="password" name="password" value={formData.password} onChange={handleChange} required />
          <Button text={buttonText} fullWidth />
        </form>

        {showReset && (
          <p className="text-center text-sm mt-2">
            <a href="/auth/reset" className="text-primary cursor-pointer">
              Forgot password?
            </a>
          </p>
        )}

        <div className="flex justify-center gap-4 mt-4">
          <button onClick={() => loginWithProvider("google")} className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg">
            <FcGoogle size={20} />
            Login with Google
          </button>
          <button onClick={() => loginWithProvider("facebook")} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
            <FaFacebook size={20} />
            Login with Facebook
          </button>
        </div>

        {toggleForm && (
          <p className="text-center text-sm mt-4">
            {title === "Login" ? "Don't have an account?" : "Already have an account?"}
            <span onClick={toggleForm} className="text-primary cursor-pointer ml-1">
              {title === "Login" ? "Register" : "Login"}
            </span>
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default OverlayForm;

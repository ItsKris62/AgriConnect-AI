// OverlayForm.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Input from "./Input";
import Button from "./Button";

const OverlayForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your API call or authentication logic here
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96 space-y-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <AnimatePresence mode="wait">
          {/* Email Input */}
          <motion.div layout>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </motion.div>

          {/* Password Input */}
          <motion.div layout>
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </motion.div>

          {/* Confirm Password (only for Signup) */}
          {!isLogin && (
            <motion.div layout>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
            </motion.div>
          )}

          {/* Submit Button */}
          <Button type="submit" fullWidth>
            {isLogin ? "Login" : "Sign Up"}
          </Button>

          {/* Toggle Between Login and Signup */}
          <motion.div layout className="flex justify-center">
            <p className="text-sm">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}
              <button
                onClick={handleToggle}
                className="text-primary ml-2 font-medium cursor-pointer"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.form>
    </motion.div>
  );
};

export default OverlayForm;
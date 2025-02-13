// src/components/OverlayForm.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Input from "./Input";
import Button from "./Button";
import { signInUser, signUpUser, resetPassword } from "../services/supabaseService";

interface OverlayFormProps {
  onClose: () => void;
}

const OverlayForm: React.FC<OverlayFormProps> = ({ onClose }) => {
  const [mode, setMode] = useState<"login" | "register" | "reset">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Handle login
  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await signInUser(email, password);
      onClose(); // Close the overlay after successful login
    } catch (err: any) {
      setError(err.message || "Invalid credentials.");
    }
  };

  // Handle registration
  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await signUpUser(email, password, { data: { name } });
      setMode("login"); // Switch to login mode after successful registration
    } catch (err: any) {
      setError(err.message || "Registration failed.");
    }
  };

  // Handle password reset
  const handleResetPassword = async () => {
    if (!email) {
      setError("Please enter your email to reset the password.");
      return;
    }

    try {
      await resetPassword(email);
      alert("Password reset link sent to your email!");
      setMode("login"); // Switch to login mode after sending the reset link
    } catch (err: any) {
      setError(err.message || "Failed to send password reset email.");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // Close overlay on background click
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-96 relative"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form
      >
        <AnimatePresence mode="wait">
          {/* Login Form */}
          {mode === "login" && (
            <motion.form
              key="login"
              onSubmit={(e) => e.preventDefault()}
              layout
            >
              <h2 className="text-2xl font-bold text-center text-secondary mb-6">Login</h2>
              {error && <p className="text-red-500 text-center mb-4">{error}</p>}
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-4"
              />
              <Button onClick={handleLogin} fullWidth className="mt-4">
                Login
              </Button>
              <p className="text-center mt-4">
                Don't have an account?{" "}
                <button
                  onClick={() => setMode("register")}
                  className="text-primary font-medium"
                >
                  Sign Up
                </button>
              </p>
              <p className="text-center mt-2">
                <button
                  onClick={() => setMode("reset")}
                  className="text-primary font-medium"
                >
                  Forgot Password?
                </button>
              </p>
            </motion.form>
          )}

          {/* Register Form */}
          {mode === "register" && (
            <motion.form
              key="register"
              onSubmit={(e) => e.preventDefault()}
              layout
            >
              <h2 className="text-2xl font-bold text-center text-secondary mb-6">Sign Up</h2>
              {error && <p className="text-red-500 text-center mb-4">{error}</p>}
              <Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-4"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-4"
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-4"
              />
              <Button onClick={handleRegister} fullWidth className="mt-4">
                Sign Up
              </Button>
              <p className="text-center mt-4">
                Already have an account?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-primary font-medium"
                >
                  Login
                </button>
              </p>
            </motion.form>
          )}

          {/* Password Reset Form */}
          {mode === "reset" && (
            <motion.form
              key="reset"
              onSubmit={(e) => e.preventDefault()}
              layout
            >
              <h2 className="text-2xl font-bold text-center text-secondary mb-6">Forgot Password?</h2>
              {error && <p className="text-red-500 text-center mb-4">{error}</p>}
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button onClick={handleResetPassword} fullWidth className="mt-4">
                Send Reset Link
              </Button>
              <p className="text-center mt-4">
                Back to{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-primary font-medium"
                >
                  Login
                </button>
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default OverlayForm;
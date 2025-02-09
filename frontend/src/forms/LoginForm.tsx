// LoginForm.tsx
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

interface LoginFormProps {
  onLogin: (credentials: { email: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }
    onLogin(formData); // Call the parent function to handle authentication
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Login</h2>

      {/* Email Input */}
      <Input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      {/* Password Input */}
      <Input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />

      {/* Submit Button */}
      <Button type="submit" fullWidth>
        Login
      </Button>

      {/* Forgot Password Link */}
      <div className="text-center">
        <a href="#" className="text-primary font-medium">
          Forgot Password?
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
// RegisterForm.tsx
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

interface RegisterFormProps {
  onRegister: (details: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    onRegister(formData); // Call the parent function to handle registration
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Sign Up</h2>

      {/* Name Input */}
      <Input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

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

      {/* Confirm Password Input */}
      <Input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
      />

      {/* Submit Button */}
      <Button type="submit" fullWidth>
        Sign Up
      </Button>
    </form>
  );
};

export default RegisterForm;
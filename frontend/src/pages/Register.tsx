// src/pages/Register.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Input from "../components/Input";
import Button from "../components/Button";
import { supabase } from "../services/supabaseService";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

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
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      // Optionally, update user metadata with the name
      await supabase.auth.updateUser({ data: { name } });

      router.push("/login"); // Redirect to login page
    } catch (err: any) {
      setError(err.message || "Failed to register.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
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
          <Link href="/login" className="text-primary font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
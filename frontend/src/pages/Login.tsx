// src/pages/Login.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Input from "../components/Input";
import Button from "../components/Button";
import { supabase } from "../services/supabaseService";

const Login: React.FC<{ onLogin: (user: any) => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      onLogin(user); // Notify parent component of successful login
      router.push("/dashboard"); // Redirect to dashboard
    } catch (err: any) {
      setError(err.message || "Invalid credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
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
          <Link href="/register" className="text-primary font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
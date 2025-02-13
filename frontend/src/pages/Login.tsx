// src/pages/Login.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Input from "../components/Input";
import Button from "../components/Button";
import { signInUser, signInWithOAuth, resetPassword } from "../services/supabaseService";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Handle email/password login
  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const user = await signInUser(email, password);

      if (user) {
        setError(null); // Clear any previous errors
        router.push("/dashboard"); // Redirect to dashboard
      }
    } catch (err: any) {
      setError(err.message || "Invalid credentials.");
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithOAuth("google");

      if (user) {
        setError(null); // Clear any previous errors
        router.push("/dashboard"); // Redirect to dashboard
      }
    } catch (err: any) {
      setError(err.message || "Google login failed.");
    }
  };

  // Handle Facebook login
  const handleFacebookLogin = async () => {
    try {
      const user = await signInWithOAuth("facebook");

      if (user) {
        setError(null); // Clear any previous errors
        router.push("/dashboard"); // Redirect to dashboard
      }
    } catch (err: any) {
      setError(err.message || "Facebook login failed.");
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
    } catch (err: any) {
      setError(err.message || "Failed to send password reset email.");
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
        <div className="flex items-center my-4">
          <hr className="w-full border-gray-300" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <Button onClick={handleGoogleLogin} fullWidth className="bg-primary hover:bg-primary/80 text-white mt-2">
          Login with Google
        </Button>
        <Button onClick={handleFacebookLogin} fullWidth className="bg-blue-600 hover:bg-blue-700 text-white mt-2">
          Login with Facebook
        </Button>
        <p className="text-center mt-4">
          <button onClick={handleResetPassword} className="text-primary font-medium">
            Forgot Password?
          </button>
        </p>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-primary font-medium">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
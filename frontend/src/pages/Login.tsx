"use client";

import { useState } from "react";
import { login } from "../services/authService";
import OverlayForm from "../components/OverlayForm";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async ({ email, password }) => {
    const { user, error } = await login(email, password);
    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }
  };

  return <OverlayForm title="Login" buttonText="Sign In" onSubmit={handleLogin} errorMessage={error} />;
}

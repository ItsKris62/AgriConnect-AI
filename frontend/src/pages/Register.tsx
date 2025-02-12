"use client";

import { useState } from "react";
import { register } from "../services/authService";
import OverlayForm from "../components/OverlayForm";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async ({ email, password }) => {
    const { user, error } = await register(email, password);
    if (error) {
      setError(error.message);
    } else {
      router.push("/auth/login");
    }
  };

  return <OverlayForm title="Register" buttonText="Sign Up" onSubmit={handleRegister} errorMessage={error} />;
}

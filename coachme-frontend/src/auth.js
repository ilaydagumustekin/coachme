// src/api/auth.js
import { apiRequest } from "./api";

// Giriş (Login) fonksiyonu
export function login({ email, password }) {
  return apiRequest("/auth/login", {
    method: "POST",
    body: { email, password },
  });
}

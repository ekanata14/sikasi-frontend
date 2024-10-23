// services/authApi.ts
import axiosInstance from "~/lib/axios";
import axios from "axios";
import {
  RegisterPayload,
  LoginPayload,
  AuthResponse,
} from "../types/authTypes";

// Function untuk register user baru
export const register = async (
  payload: RegisterPayload
): Promise<AuthResponse | null> => {
  try {
    const response = await axiosInstance.post<AuthResponse>(
      "/register",
      payload
    );
    return response.data;
  } catch (error) {
    handleError(error);
    return null;
  }
};

// Function untuk login
export const login = async (
  payload: LoginPayload
): Promise<AuthResponse | null> => {
  try {
    const response = await axiosInstance.post<AuthResponse>("/login", payload);
    return response.data;
  } catch (error) {
    handleError(error);
    return null;
  }
};

// Function untuk login
export const googleLogin = async (): Promise<AuthResponse | null> => {
  try {
    const response = await axiosInstance.get<AuthResponse>("/auth/google");
    return response.data;
  } catch (error) {
    handleError(error);
    return null;
  }
};

// Error handling function
const handleError = (error: unknown): void => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      console.error("Error response:", error.response.data);
    } else if (error.request) {
      console.error("Error request:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
  } else {
    console.error("Unexpected error:", error);
  }
};

// types/authTypes.ts

export interface RegisterPayload {
  name: string;
  nim: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface LoginPayload {
  nim: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  message: string;
}

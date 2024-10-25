// types/authTypes.ts

export interface RegisterPayload {
  name: string;
  nim: string;
  email: string;
  password: string;
  confirm_password: string;
  department_id: string | number;
}

export interface LoginPayload {
  nim: string;
  password: string;
}

export interface AuthResponse {
  status: boolean;
  code: number;
  errors: Array<unknown>;
  message: string;
  data: {
    token: string;
    idUser: number;
  };
}

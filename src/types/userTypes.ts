export interface UserResponse {
  status: boolean;
  code: number;
  errors: Array<unknown>;
  message: string;
  data: UserData;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  nim: string;
  email_verified_at?: Date;
  google_id?: number;
  profile: string;
  department_id: number;
  mobile_phone: string;
  created_at: Date;
  updated_at: Date;
  users_roles: UsersRole[];
}

export interface UsersRole {
  id: number;
  user_id: number;
  organization_role_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface DepartmentResponse {
  code: number;
  status: boolean;
  message: string;
  data: DepartmentData[];
  errors: Array<unknown>;
}

export interface DepartmentData {
  id: number;
  name: string;
}

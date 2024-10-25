export interface OrganizationResponse {
  code: number;
  status: boolean;
  message: string;
  data: OrganizationData[];
  errors: Array<unknown>;
}

export interface OrganizationData {
  id: number;
  nickname: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}

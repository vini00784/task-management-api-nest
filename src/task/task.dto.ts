export class TaskDto {
  id: string;
  title: string;
  description: string;
  status: string;
  expireAt: Date;
}

export interface GetAllParameters {
  title: string;
  status: string;
}

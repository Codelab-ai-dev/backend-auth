export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserCreate {
  username: string;
  email: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserResponse {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

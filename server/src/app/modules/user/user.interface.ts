export type TUserRole = 'admin';

export interface IAddress {
  street: string;
  city: string;
  country: string;
  postalCode?: number;
}

export interface IUser {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  role: TUserRole;
  mobile?: string;
  gender: 'male' | 'female' | 'third';
  address: IAddress;
}

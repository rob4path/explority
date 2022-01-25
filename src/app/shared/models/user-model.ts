export enum UserType {
  customer = 'customer',
}

export enum UserStatus {
  active = 'active',
  suspended = 'suspended',
  // pending = 'pending'
}

export interface User {
  _id: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  phone?: string;
  status: UserStatus;
  type: UserType;
  profilePicture?: string;
  profilePictureUrl?: string; // generated from profilePicture

  forgotPasswordCode?: string;
  emailConfirmation: {
    code?: string;
    confirmed: boolean;
  };

  // social accounts
  social?: {
    facebook?: { id: string };
    google?: { id: string };
    apple?: { id: string };
  };
}

export interface IUserSignup {
  name: string;
  email: string;
  password: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;
  };
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserData {
  _id: string;
  profile_image: string;
  name: string;
  email: string;
  password: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;
  };
  createdAt: string;
  updatedAt: string;
}

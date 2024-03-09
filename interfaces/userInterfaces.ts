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

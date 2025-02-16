namespace AUTH {
  type IRegisterReceptionResponse = IReceptionLogin;
  type IRegisterReceptionRequest = IReceptionLogin;

  type ILoginUserRequest = {
    username: string;
    password: string;
  };
  type ILoginUserResponse = {
    user: {
      username: string;
      email: string;
    };
    access: string;
    refresh: string;
  };
}

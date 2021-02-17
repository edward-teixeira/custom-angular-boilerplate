export interface IUsuario {
  id: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export class Usuario implements IUsuario {

  constructor(
    public id: string,
    public email: string,
    public password: string,
    public confirmPassword: string,
  ) { }
}

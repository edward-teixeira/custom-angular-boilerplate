
export class LocalStorageUtils {

  public obterUsuario(): string | null {
    const item: string | null = localStorage.getItem('app.user');
    return item && JSON.parse(item);
  }

  public salvarDadosLocaisUsuario(response: any): void {
      this.salvarTokenUsuario(response.accessToken);
      this.salvarUsuario(response.userToken);
  }

  public limparDadosLocaisUsuario(): void {
      localStorage.removeItem('app.token');
      localStorage.removeItem('app.user');
  }

  public obterTokenUsuario(): string | null {
      return localStorage.getItem('app.token');
  }

  public salvarTokenUsuario(token: string): void {
      localStorage.setItem('app.token', token);
  }

  public salvarUsuario(user: string): void {
      localStorage.setItem('app.user', JSON.stringify(user));
  }

}

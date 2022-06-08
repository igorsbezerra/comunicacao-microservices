export class User {
  private id: string;
  private name: string;
  private email: string;
  private password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  get getEmail() {
    return this.email;
  }

  get getPassword() {
    return this.password;
  }
}

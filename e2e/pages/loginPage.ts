import { Page } from "@playwright/test";
import HomePage from "./homePage";
import { Env } from "../frameworkConfig/env";

class LoginPage {
  constructor(private readonly page: Page) {}

  public readonly loginText = this.page.getByText(
    "Por favor ingrese correo y contraseña",
  );
  private readonly userEmailTextBox = this.page.getByPlaceholder(
    "Usuario o correo electrónico",
  );
  private readonly passwordTextBox = this.page.getByPlaceholder("Contraseña");
  private readonly loginButton = this.page.getByRole("button", {
    name: "Autenticar",
  });

  async visit() {
    await this.page.goto(Env.BASE_URL);
  }

  async login(username: string, password: string) {
    await this.userEmailTextBox.fill(username);
    await this.passwordTextBox.fill(password);
    await this.loginButton.click();
    return new HomePage(this.page);
  }
}

export default LoginPage;

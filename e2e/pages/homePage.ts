import { Page } from "@playwright/test";
import LeftMenuComponent from "./components/leftMenuComponent";
import AddCategoryComponent from "./components/addCategoryComponent";

class HomePage {
  private leftMenuComponent: LeftMenuComponent;
  private addCategoryComponent: AddCategoryComponent;
  public readonly successMessage = this.page.getByLabel(
    "Tipo de categoría adicionada satisfactoriamente",
  );
  public readonly logoutLink = this.page.locator("a.nav-link", {
    hasText: "Salir",
  });

  constructor(private readonly page: Page) {
    this.leftMenuComponent = new LeftMenuComponent(page);
    this.addCategoryComponent = new AddCategoryComponent(page);
  }

  getLeftMenuComponent() {
    return this.leftMenuComponent;
  }

  getAddCategoryComponent() {
    return this.addCategoryComponent;
  }

  async validateDataInGrid(data: string): Promise<boolean> {
    await this.addCategoryComponent.navigateToLastPage();
    const isDataFound = await this.addCategoryComponent.isDataInGrid(data);
    return isDataFound;
  }
}

export default HomePage;

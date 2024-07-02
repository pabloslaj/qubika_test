import { Page } from "@playwright/test";
import LeftMenuComponent from "./leftMenuComponent";

class AddCategoryComponent {
  constructor(private readonly page: Page) {}

  private readonly addCategoryButton = this.page.getByRole("button", {
    name: "Adicionar",
  });
  private readonly categoryNameTextBox = this.page.getByPlaceholder(
    "Nombre de categoría",
  );
  private readonly acceptButton = this.page.getByRole("button", {
    name: "Aceptar",
  });
  private readonly isSubcategoryCheckBox =
    this.page.getByText("Es subcategoria?");
  private readonly subCategoryTextBox = this.page
    .getByRole("combobox")
    .getByRole("textbox");
  private readonly selectFatherList = (fatherName: string) =>
    this.page.getByRole("option", { name: fatherName });
  private readonly paginationSelector = this.page.locator(
    ".pagination .page-item",
  );
  private readonly categoryCell = (categoryName: string) =>
    this.page.getByRole("cell", { name: categoryName }).first();

  async addCategory(categoryName: string) {
    await this.addCategoryButton.click();
    await this.categoryNameTextBox.fill(categoryName);
    await this.acceptButton.click();
  }

  async addSubCategory(categoryName: string, fatherCategoryName: string) {
    await this.addCategoryButton.click();
    await this.categoryNameTextBox.fill(categoryName);
    await this.isSubcategoryCheckBox.click();
    await this.selectFatherCategory(fatherCategoryName);
    await this.acceptButton.click();
  }

  async selectFatherCategory(fatherName: string) {
    await this.subCategoryTextBox.fill(fatherName);
    await this.selectFatherList(fatherName).click();
  }

  async navigateToLastPage() {
    const pages = await this.paginationSelector.elementHandles();
    const lastPage = pages[pages.length - 2];
    await lastPage.click();
  }

  async getCategoryCell(categoryName: string) {
    return this.categoryCell(categoryName);
  }
}

export default AddCategoryComponent;

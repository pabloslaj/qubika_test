import { test, expect } from "../../fixtures/customFixtures";
import { Env } from "../../frameworkConfig/env";
import ApiHelper from "../../../utils/api/apiHelper";
import FakerHelper from "../../../utils/randomData/FakerHelper";

test("Add Category e2e test", async ({ request, loginPage, homePage }) => {
  // 1 - Create a new user through API and save the user information.
  const fakerHelper = new FakerHelper(request);
  const email = fakerHelper.generateEmail();
  const password = fakerHelper.generatePassword();
  const response = await new ApiHelper(request).register(email, password);

  // 2 - Go to Qubika Sports Club Management System
  await loginPage.visit(Env.BASE_URL);

  // 3 - Validate that the login page is displayed correctly
  await expect(loginPage.loginText).toBeVisible(
    "The Login page is not displayed",
  );

  // 4 - Log in with the created user
  await loginPage.login(email, password);

  // 5- Validate that the user is logged in
  await expect(homePage.logoutLink).toBeVisible(
    "The Logout button is not visible, user not logged",
  );

  // 6 - Once the user is logged in:
  // a) Go to the Category page
  await homePage
    .getLeftMenuComponent()
    .selectLeftMenuItem("Tipos de Categorias");

  // b) Create a new category and validate that the category was created successfully
  const category = fakerHelper.generateCategory();
  await homePage.getAddCategoryComponent().addCategory(category);
  await expect(homePage.successMessage).toBeVisible(
    "Category successfully added message is not displayed",
  );

  // c) Create a sub category and validate it is displayed in the Categories list.
  const subcategory = fakerHelper.generateSubCategory();
  await homePage
    .getAddCategoryComponent()
    .addSubCategory(subcategory, category);
  await homePage.getAddCategoryComponent().navigateToLastPage();

  // Wait for the category cell to be visible
  const categoryCell = await homePage
    .getAddCategoryComponent()
    .getCategoryCell(category);
  await expect(categoryCell).toBeVisible(
    `The category ${category} is not present on the grid`,
  );
});

import { faker } from "@faker-js/faker";

class FakerHelper {
  generateEmail(): string {
    const firstName = faker.person.firstName().toLowerCase();
    const lastName = faker.person.lastName().toLowerCase();
    const randomNumber = faker.number.int({ min: 10, max: 99 });
    return `${firstName}.${lastName}${randomNumber}@qubika.com`;
  }

  generatePassword(): string {
    return faker.internet.password();
  }

  generateCategory(): string {
    const randomWord = faker.lorem.word();
    return `Category_${randomWord}`;
  }

  generateSubCategory(): string {
    const randomWord = faker.lorem.word();
    return `SubCategory_${randomWord}`;
  }
}

export default FakerHelper;

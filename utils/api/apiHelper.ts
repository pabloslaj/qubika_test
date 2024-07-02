import { APIRequestContext } from "@playwright/test";
import { Env } from "../../e2e/frameworkConfig/env";

class ApiHelper {
  request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async register(email: string, password: string) {
    const response = await this.request.post(Env.REGISTER_API, {
      data: {
        email: email,
        password: password,
        roles: ["ROLE_ADMIN"],
      },
    });
    return response;
  }
}

export default ApiHelper;

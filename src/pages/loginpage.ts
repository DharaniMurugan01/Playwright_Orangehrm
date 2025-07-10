import { Page } from "@playwright/test";

export default class LoginPage {
    constructor(private page: Page) {}

    async enterUsernameAndPassword(username: string, password: string) {
        await this.page.fill("input[placeholder='Username']", username);
        await this.page.fill("input[placeholder='Password']", password);
    }

    async clickLogin() {
        await this.page.click("button:has-text('Login')");
    }

    async clickForgotPassword() {
        await this.page.click("p:has-text('Forgot your password?')");
    }
}

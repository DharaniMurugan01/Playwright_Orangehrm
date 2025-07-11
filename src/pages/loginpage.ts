import { Page ,expect} from "@playwright/test";

export default class LoginPage {
    constructor(private page: Page) {}
    private elements = {
    un:"input[placeholder='Username']",
    pw:"input[placeholder='Password']",
    loginbtn:"button:has-text('Login')",
    forgotlink:"p:has-text('Forgot your password?')",
    invalid:"(//p)[1]",
    emptylogin:"(//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message'])[1]",
    dashboard:"//h6",    
  };
    async enterUsernameAndPassword(username: string, password: string) {
        await this.page.fill(this.elements.un,username);
        await this.page.fill(this.elements.pw, password);
    }

    async clickLogin() {
        await this.page.click(this.elements.loginbtn);
    }

    async clickForgotPassword() {
        await this.page.click(this.elements.forgotlink);
    }
    async verifyresult(loginResult:string){
    if (loginResult === 'valid login') {
        await expect(this.page.locator(this.elements.dashboard)).toBeVisible();
    } else if (loginResult === 'invalid login') {
        await expect(this.page.locator(this.elements.invalid)).toHaveText('Invalid credentials');
    } else if (loginResult === 'empty login') {
        await expect(this.page.locator(this.elements.emptylogin)).toBeVisible();
    }
    }
}

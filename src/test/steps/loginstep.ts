import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pagefixture";
import LoginPage from "../../pages/loginpage";

let loginPage: LoginPage;

Given('the user navigates to OrangeHRM login page',{timeout:30000}, async function () {
    const baseUrl = process.env.BASEURL;
    console.log("BASEURL from env:", process.env.BASEURL);
    if (!baseUrl) throw new Error("BASEURL is not defined");
    await pageFixture.page?.goto(baseUrl);
    loginPage = new LoginPage(pageFixture.page!);
});

When('the user enters username {string} and password {string}', async function (username: string, password: string) {
    await loginPage.enterUsernameAndPassword(username, password);
});

When('clicks on the Login button', async function () {
    await loginPage.clickLogin();
});

Then('the user should see {string}', async function (loginResult: string) {
    const page = pageFixture.page!;
    if (loginResult === 'valid login') {
        await expect(page.locator("p.oxd-userdropdown-name")).toBeVisible();
    } else if (loginResult === 'invalid login') {
        await expect(page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text")).toHaveText('Invalid credentials');
    } else if (loginResult === 'empty login') {
        await expect(page.locator("input[name='username']")).toBeVisible();
    }
});

When('the user clicks on the Forgot Password link', async function () {
    await loginPage.clickForgotPassword();
});

Then('the Forgot Password page should be displayed', async function () {
    await expect(pageFixture.page!.locator("h6")).toHaveText("Reset Password");
});

import { Page } from "@playwright/test";
export default class PimPage {
  constructor(private page: Page) {}
  private elements = {
    pimmenu: "(//a/child::span)[2]",
    add: "//button[@class='oxd-button oxd-button--medium oxd-button--secondary']",
    firstname: "//input[@name='firstName']",
    lastname: "//input[@name='lastName']",
    id: "(//input[@class='oxd-input oxd-input--active'])[2]",
    save: "//button[@class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']",
  };

  async clickpim() {
    await this.page.click(this.elements.pimmenu);
  }

  async clickAdd() {
    await this.page.click(this.elements.add);
  }

  async FillForm(Firstname: string, Lastname: string, Employeeid: string) {
    await this.page.fill(this.elements.firstname,Firstname);
    await this.page.fill(this.elements.lastname,Lastname);
    await this.page.fill(this.elements.id,Employeeid);
  }

  async clicksave() {
    await this.page.click(this.elements.save);
  }
}

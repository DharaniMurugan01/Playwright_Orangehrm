import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pagefixture";
import pimPage from "../../pages/Pimpage";
import employeedata from"../data/employeedata.json";
let pim: pimPage;
When('the user click the PIM menu',async function(){
pim = new pimPage(pageFixture.page!);
  await pim.clickpim();
});
When('the user Add the employee', async function () {
  for (const emp of employeedata) {
    await pim.clickAdd();
    await pim.FillForm(emp.Firstname,emp.Lastname,emp.Employeeid);
    await pim.clicksave();
    await pageFixture.page?.waitForTimeout(1000);
  }
});

Then('the employee should be added successfully', async function () {
  console.log("✅ All employees added from CSV");
});

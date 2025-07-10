import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";
import { pageFixture } from "./pagefixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from '../helper/env/env';
import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '../helper/env/.env.' + process.env.ENV);
dotenv.config({ path: envPath });


let browser: Browser;
let context: BrowserContext;

BeforeAll(async () => {
    getEnv();
    browser = await invokeBrowser();
});

Before(async function ({ pickle }) {
    context = await browser.newContext();
    const page: Page = await context.newPage();
    pageFixture.page = page;
});

After(async function ({ pickle, result }) {
    if (result?.status === Status.FAILED) {
        const img = await pageFixture.page?.screenshot({ path: `./test-results/${pickle.name}.png` });
        if (img) await this.attach(img, "image/png");
    }
    await pageFixture.page?.close();
    await context.close();
});

AfterAll(async () => {
    await browser.close();
});

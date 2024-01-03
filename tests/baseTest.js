import base from '@playwright/test';
import { chromium } from '@playwright/test';
import HomePage from '../src/pages/homepage';
import PDPPages from '../src/pages/pdppage';
import PLPPages from '../src/pages/plppage';
import LoginModal from '../src/pages/loginmodal';

export const test = base.extend({
    persistentcontext:  [ async ({ }, use) => {
        const userDataDir = '/Users/anup.mohan/Library/Application Support/Google/Chrome/Profile 3';
        const context = await chromium.launchPersistentContext(userDataDir, {
            headless: false,
            channel: "chrome",
            slowMo: 1000,
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            ignoreDefaultArgs: ['--disable-sync', '--enable-automation', '--disable-background-networking', '--disable-features=TranslateUI,BlinkGenPropertyTrees,ImprovedCookieControls,SameSiteByDefaultCookies,LazyFrameLoading'],
        });
        await use(context);

    }, {scope: 'worker'}],

    page: [ async ({ persistentcontext: context }, use) => {
        const page = await context.newPage();
        await use(page);
        await page.close();
      }, {scope: 'test'}],

    homePage: async ({ page }, use) => {
        // Set up the fixture.
        const homePage = new HomePage(page);
        //await homePage.acceptCookieDialog();

        // Use the fixture value in the test.
        await use(homePage);

        // Clean up the fixture.
        //await homePage.removeAll();

    },
    pdpPage: async ({ page }, use) => {

        const pdpPage = new PDPPages(page);
        await use (pdpPage);
    },

    plpPage: async ({ page }, use) => {

        const plpPage = new PLPPages(page);
        await use (plpPage);
    },

    loginModal: async ({ page}, use) => {

        const loginModal = new LoginModal(page);
        await use(loginModal);

    }
});

export const expect = base.expect;
import { expect } from '@playwright/test';

export default class HomePage{
    constructor(page){
        this.page = page;
        this.acceptCookiesSelector = page.getByRole('button', { name: 'Aceitar rastreio' });
        this.collection = page.locator('li').getByRole('menu').locator('nth=5');
        this.ultraboost = page.getByLabel('Main Navigation').getByRole('link', { name: 'Ultraboost' });

    }

    async launchURL(){
        await this.page.goto("/");

    }
    async acceptCookieDialog(){
        await this.acceptCookiesSelector.click().catch((error) => {
            console.error(`Error accepting the cookies: $(error)`);
            throw error;
        });
    }

    
    async navigateToUltraboost(){
        await expect(this.collection).toBeVisible();
        await this.collection.click();
        await this.ultraboost.
        click()

    }

}
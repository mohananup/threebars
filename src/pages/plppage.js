import { expect} from '@playwright/test';

export default class PLPPage{

    constructor(page){
        this.page = page;
        this.firstProductSelector = page.locator(".grid-item").locator('nth=0');

    }

    async selectFirstProduct(){
        await this.firstProductSelector.click();
    }

}
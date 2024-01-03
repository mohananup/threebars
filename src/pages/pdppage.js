import { expect } from '@playwright/test';
import { error } from 'console';

export default class PDPPages{

    constructor(page){
        this.page = page;
        this.accountmodal = page.locator('button[name="account-portal-close"]');
        this.sizeSelector = page.getByRole('button', { name: '47 1/3' } );
        this.addToCartButton = page.getByRole('button', { name: 'Adicionar Ao Carrinho' });
        //this.cart = page.getByRole('link').filter({ hasText: '/cart' });
        this.cart = page.getByRole('link', { name: 'O teu saco de compras está' });

    }

    async dismissAccountDialog(){
        await expect(this.accountmodal).toBeVisible();
        await this.accountmodal.click().catch((error) => {
            console.error(`Error dismissing the modal: $(error)`);
            throw error;
        });
    }

    async selectASize(){
        await this.sizeSelector.click();

    }

    async addToCart(){
        
        const responsePromise = this.page.waitForResponse(resp => resp.url().includes('/api/chk/baskets/'));
        await this.addToCartButton.click();
        await responsePromise;
        //await this.page.waitForTimeout(2000000)
    
    }

    async goToCart(){
        
        expect(await this.cart).toBeVisible()
        await this.cart.click();

    }

}
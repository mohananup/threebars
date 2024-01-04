import {expect} from '@playwright/test';

export default class LoginModal{
    constructor(page){
        this.page = page;
        this.signInButton = page.getByText('torna-te membro', { exact: true });
        this.emailField = page.getByPlaceholder(' ');
        this.checkboxRegister = page.locator('label').filter({ hasText: 'Ao clicar em "REGISTAR", está' });
        this.continueButton =  page.getByLabel('CONTINUAR');
        this.closeModalButton = page.locator('button[name="account-portal-close"]');

    }

    async signUp(){

        await this.signInButton.click();
        await this.emailField.click();
        await this.emailField.fill('mohananup002@gmail.com');
        await this.checkboxRegister.click();
        const responsePromise = this.page.waitForResponse(resp => resp.url().includes('api/account/profile/auth-options') && resp.status() === 200);
        await this.continueButton.click();
        await responsePromise;
        
        

    }

    async closeModal(){
        await this.closeModalButton.click();
    }


}

import { lstat } from 'fs';
import { test } from '../tests/baseTest'

test('Register for new Account', async ({ homePage, loginModal }) => {
    await homePage.launchURL()
    await loginModal.signUp();
    await loginModal.closeModal();
});
    


test('select a product and add to cart', async ({ homePage, plpPage, pdpPage }) => {
    await homePage.launchURL()
    await homePage.navigateToUltraboost();
    await plpPage.selectFirstProduct();
    await pdpPage.selectASize();
    await pdpPage.addToCart();
    await pdpPage.goToCart();

});

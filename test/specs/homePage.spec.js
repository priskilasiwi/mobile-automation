import { HomeAction } from '../actions/home.action';
import { LoginAction } from '../actions/login.action';
import appHelper from '../../helpers/app.helper';
import Credentials from '../test-data/credentials';


describe('Home Page', () => {
    beforeEach(async () => {
        await appHelper.reset()
    });
    
    afterEach(async function() {
        if (this.currentTest?.state === "failed") {
            await driver.takeScreenshot()
            await driver.saveScreenshot(`./reports/screenshots/${this.currentTest.title}.png`)
        }
     });
    
    after(async () => {
        await appHelper.close()
    });

    const homeAction = new HomeAction();
    const loginAction = new LoginAction();

    it('verify homepage, scroll down/up, filter and logout', async () => {
        // Login
        await loginAction.login(
            Credentials.standard_user.username, 
            Credentials.standard_user.password
        );

        await homeAction.verifyHomePage();

        await homeAction.scroll('down');
        await homeAction.scroll('up');

        await homeAction.tapModalSelectorButton();
        await homeAction.tapCloseFilterButton();

        await homeAction.tapBurgerMenuButton();
        await homeAction.tapLogoutButton();
        
    });

    it('failed login with invalid credentials', async () => {
    await loginAction.login(
        'salah_username',
        'salah_password'
    );

    const isErrorVisible = await loginAction.isErrorMessageVisible();
    expect(isErrorVisible).toBe(true);
    });

    it('verify sorting products price from low to high', async () => {
        // Login
        await loginAction.login(
            Credentials.standard_user.username, 
            Credentials.standard_user.password
        );
        await homeAction.verifyHomePage();
        await homeAction.tapModalSelectorButton();
        await homeAction.tapSortPriceLowToHigh();

        const isSorted = await homeAction.verifyPriceLowToHigh();
        expect(isSorted).toBe(true);
        
    });

    it ('verify logout functionality', async () => {
        // Login
        await loginAction.login(
            Credentials.standard_user.username, 
            Credentials.standard_user.password
        );
        await homeAction.verifyHomePage();
        await homeAction.tapBurgerMenuButton();
        await homeAction.tapLogoutButton();

        const isOnLoginPage = await loginAction.isOnLoginPage();
        expect(isOnLoginPage).toBe(true);
    });

    
});
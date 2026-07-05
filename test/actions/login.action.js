import loginPage from '../pageobjects/login.page'

export class LoginAction {
    async enterUsername(username) {
    const field = await $(loginPage.usernameInput)
    await field.setValue(username)
    }

    async enterPassword(password) {
    const field = await $(loginPage.passwordInput)
    await field.setValue(password)
    }

    async tapLogin() {
        const btn = await $(loginPage.loginButton)
        await btn.click()
    }

    async login(username, password) {
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.tapLogin()
    }

    async waitForProducts() {
        const products = await $(loginPage.productsTitle)
        await products.waitForExist({ timeout: 10000 })
        return products.isDisplayed()
    }

    async isOnLoginPage() {
        const btn = await $(loginPage.loginButton)
        await btn.waitForExist({ timeout: 10000 })
        return btn.isExisting()
    }

    async isErrorMessageVisible() {
    const error = await $(loginPage.errorMessage);
    await error.waitForDisplayed({ timeout: 5000 });
    return await error.isDisplayed();
}

}

export default new LoginAction()
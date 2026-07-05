export class LoginPage {
    get loginButton() {
        return 'android=new UiSelector().description("test-LOGIN")'
    }

    get productsTitle() {
        return 'android=new UiSelector().text("PRODUCTS")'
    }

    get usernameInput() {
        return 'android=new UiSelector().text("Username")'
    }

    get passwordInput() {
        return 'android=new UiSelector().text("Password")'
    }

    get errorMessage() {
    return 'android=new UiSelector().textContains("Username and password do not match")'
    }

}

export default new LoginPage()
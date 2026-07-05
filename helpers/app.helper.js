class AppHelper {
    async launch() {
        await driver.launchApp();
    }

    async close() {
        await driver.closeApp();
    }

    async reset() {
        await driver.terminateApp('com.swaglabsmobileapp');
        await driver.activateApp('com.swaglabsmobileapp');
    }
}

module.exports = new AppHelper();
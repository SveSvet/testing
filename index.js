require("chromedriver");
const { Builder, Key, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Checkout Google', () => {
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });
    
    it('Поиск в Гугл: значение заголовка корректное', async () => {
            await driver.get("https://google.com");
            await driver.findElement(By.xpath("//input[@name='q']")).click();
            await driver.findElement(By.xpath("//input[@name='q']")).sendKeys('Котики', Key.RETURN);
            await driver.wait(until.elementLocated(By.id('rcnt')), 20000);
            let title = await driver.getTitle();
            assert(title, 'Котики - Поиск в Google');
    });
    
    after(() => {
        driver.quit();
    });
});
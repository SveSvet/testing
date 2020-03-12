require('chromedriver');
const assert = require('assert');
const { Builder, Key, By, until} = require("selenium-webdriver");

describe('Automation script, #2', () => {
  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://moskva.beeline.ru/shop/");
  });

  it('Find element "Телефоны"', async function() {

    let findMobile = await driver.findElement(By.css("div.DevicesMenu_container_1gj4 > a:nth-child(2)"));
    await findMobile.click();

    let priceFrom =
        await driver.findElement(By.css('div.RangeFilter_textBlock_1oz_ > ' +
            'div:nth-child(1) > div.withIcon_container_2Z38 > ' +
            'input'));
    await priceFrom.click();
    await priceFrom.sendKeys('1200', Key.RETURN);

    let priceTo =
        await driver.findElement(By.css('div:nth-child(3) > ' +
            'div.withIcon_container_2Z38 > input'));
    await priceTo.click();
    await priceTo.sendKeys('40000', Key.RETURN);

    await driver.wait(until.elementLocated(By.css('div.Grid_columns-9_3nwQ')), 10000);

    let checkProduct =
        await driver.findElement(By.css('div:nth-child(9) > div > div > div.Grid_container_15R4.Grid_gutterMedium_3rkN.Grid_nowrap_2d2d > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div > div > button'));
    await checkProduct.click();

    driver.navigate().back();
  });
});
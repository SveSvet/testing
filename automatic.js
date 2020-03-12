require('chromedriver');
const assert = require('assert');
const {Builder, By} = require('selenium-webdriver');

describe('Automation script, #2', () => {
  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://moskva.beeline.ru/shop/");
  });

  it('Find element "Телефоны"', async function() {
    let findMobile = await driver.findElement(By.css("div.DevicesMenu_container_1gj4 >a:nth-child(2)"));
    await findMobile.click();

    let openAll =
        await driver.findElement(By.css('div.FiltersWidget_container_17Bj > ' +
            'div:nth-child(3) > ' +
            'div.ShowAllButton_wrapper_3cwV > span'));
    await openAll.click();

    let checkMeizu =
        await driver.findElement(By.css('input#checkbox__proizvoditel_proizvoditel-meizu'));
    await checkMeizu.click();

    driver.navigate().back();
  });


});
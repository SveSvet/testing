require('chromedriver');
const assert = require('assert');
const {Builder, By} = require('selenium-webdriver');

describe('Задание №1: составить селекторы для различных элементов', () => {
  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://moskva.beeline.ru/shop/");
  });

  it('Find element "Телефоны"', async function() {
    let findMobile = await driver.findElement(By.linkText("телефоны")).getAttribute("href");
    assert.equal(findMobile, 'https://moskva.beeline.ru/shop/catalog/telefony/');
  });

});

describe('Задание №1: составить селекторы для различных элементов', () => {
  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://moskva.beeline.ru/shop/catalog/telefony/smartfony/");
  });

  it('Filter elements from', async function() {
    let findInputFrom = await driver.findElement(By.xpath("//*[@id=\"catalogSidebarContent\"]")).getAttribute("placeholder");
    assert.equal(findInputFrom, '1990');
  });

  it('Filter elements to', async function() {
    let findInputTo = await driver.findElement(By.xpath("//*[@id=\"catalogSidebarContent\"]")).getAttribute("placeholder");
    assert.equal(findInputTo, '131990');
  });

  it('Показать всё', async function() {
    let buttonAll = await driver.findElement(By.css("span[class*=ShowAllButton_text]"));
  });

  it('checkBox', async function() {
    let checkBox = await driver.findElement(By.id("checkbox__proizvoditel_proizvoditel-huawei"));
  });

  it('Element by price sort', async function() {
    let price = await driver.findElement(By.xpath("//*[@id=\"catalogSidebarContent\"]"));
  });

  it('Product name', async function() {
    let name = await driver.findElement(By.css("div[class*=ProductCard_header]"));
  });

  it('Product price', async function() {
    let productPrice = await driver.findElement(By.css("div[class*=InlineSet_item]"));
  });

  it('Product buy', async function() {
    let BuyProduct = await driver.findElement(By.css("button[class*=BuyButtonLayout_button]"));
  });
});

describe('Задание №1: составить селекторы для различных элементов', () => {
  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://moskva.beeline.ru/shop/basket/#?step=orderList");
  });

  it('Delete', async function() {
    let deleteProduct = await driver.findElement(By.css("svg.modify-link-after"));
  });

  it('DeleteMessage', async function() {
    let deleteProductBlock = await driver.findElements(By.css("div.shop-basket-item-service-note"));
    let deleteProductMessage = await deleteProductBlock.findElement(By.css("span"))
  });

  it('Restore', async function() {
    let restoreBlock = await driver.findElements(By.css("div.shop-basket-item-repair-link-wrap"));
    let restore = await restoreBlock.findElement(By.css("span.dynamic"))
  });


});
const chai = require('chai');
var expect = chai.expect;

describe('Туые №1', function(){
    beforeEach(function(){
        browser.url('https://moskva.beeline.ru/shop/');
        let title = browser.getTitle();
        expect(title).to.equal('Интернет-магазин Билайн Москва - продажа сотовых телефонов, смартфонов и аксессуаров');
    });

    it('should successfull open phone page', function(){
        $('a[href="/shop/catalog/telefony/"]').click();
        $('//div[./span[text()=\'Производитель\']]/following-sibling::div/span').click();
        $('input#checkbox__proizvoditel_proizvoditel-meizu').click;
    });
});

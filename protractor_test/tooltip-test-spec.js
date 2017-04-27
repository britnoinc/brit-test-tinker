/**
 * Created by Brit on 4/27/2017.
 */
// spec.js
describe('qris demo test', function() {
    it('should have a title', function () {
        browser.get('https://qa.marylandexcels.org/login'); // Navigates to the page
        expect(browser.getTitle()).toEqual('QRIS Program'); // checks the page title
        it('should let me login', function () {
            element(by.id('username')).sendKeys('admin@noinc.com'); // Selects the element username
            element(by.id('password')).sendKeys('welcome1'); // Selects the element password
            element(by.id('_submit')).click(); // Submits the field data
        it('should have a footer', function() {
            expect($('.butts').isPresent()).toBeTruthy();
            });
        });
    });
});
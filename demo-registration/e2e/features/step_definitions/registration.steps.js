'use strict';
var chai = require('chai'),
  expect = chai.expect,
  moment = require('moment'),
  timestamp = Date.now(),
  text = 'Selenium',
  country = 'United States',
  domain = '@gmail.com',
  maritalStatus = 'Married',
  hobby = 'Reading',
  phone = '9125552317';

module.exports = function () {
  this.Given(/^I am on the ToolsQA Registration Page$/, function (callback) {
    //client.url(this.baseUrl);
    browser.url('http://demoqa.com/registration/');
    callback();
  });

  this.When(/^I enter text into the search bar$/, function (callback) {
    browser.setValue('#name_3_firstname', 'Chaley');
    browser.setValue('#name_3_lastname', text);
    browser.element('[value="' + maritalStatus.toLowerCase() + '"]').click();
    browser.element('[value="' + hobby.toLowerCase() + '"]').click();
    browser.element('#dropdown_7').click();
    browser.element('[value="' + country + '"]').click();
    browser.element('#mm_date_8').click();
    browser.element('[value="7"]').click();
    browser.element('#dd_date_8').click();
    browser.element('[value="23"]').click();
    browser.element('#yy_date_8').click();
    browser.element('[value="1993"]').click();
    browser.setValue('#phone_9', phone);
    browser.setValue('#username', text + timestamp);
    browser.setValue('#email_1', text + '+' + timestamp + domain);
    browser.setValue('#description', text);
    browser.setValue('#password_2', text);
    browser.setValue('#confirm_password_password_2', text);
    browser.element('[type="submit"]').click();
    callback();
  });

  this.Then(/^I should see results$/, function (callback) {
    //browser.element('.piereg_message').waitForExist(5000);
    expect(browser.element('.piereg_message').getText()).to.equal('Thank you for your registration');
    callback();
  });
};
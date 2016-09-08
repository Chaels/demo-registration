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
  phone = '9125552317',
  RegistrationPage = require('./registration.page.obj.js'),
  registrationPage = new RegistrationPage();

module.exports = function () {
  this.Given(/^User is on the ToolsQA HomePage$/, function (callback) {
    browser.url('/');
    callback();
  });

  this.When(/^Navigates to the registration page$/, function (callback) {
    registrationPage.registrationLink();
    callback();
  });

  this.When(/^Enters (.*) information into the form$/, function (isValid, callback) {
    registrationPage.enterFormInfo(isValid);
    callback();
  });

  this.When(/^Clicks the Submit button$/, function (callback) {
    registrationPage.submit();
    callback();
  });

  this.Then(/^User will receive message indicating registration was (.*)$/, function (result, callback) {
    if (result.indexOf('unsuccessful') !== -1) {
      expect(browser.element('.legend.error').getText()).to.equal('* Invalid email address');
    } else {
      expect(browser.element('.piereg_message').getText()).to.equal('Thank you for your registration');
    }
    callback();
  });
};
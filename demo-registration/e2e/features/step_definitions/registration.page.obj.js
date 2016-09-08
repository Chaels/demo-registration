'use strict';
var randVal = Date.now(),
  params = require('./registration.json'),
  self;

var RegistrationPage = function () {
  randVal = Date.now();
  self = this;
};

RegistrationPage.prototype = Object.create({}, {
  registrationLink: {
    value: function () {
      browser.click('.menu-registration-container');
    }
  },
  firstName: {
    value: function (firstName) {
      browser.setValue('#name_3_firstname', firstName);
    }
  },
  lastName: {
    value: function (lastName) {
      browser.setValue('#name_3_lastname', lastName);
    }
  },
  maritalStatus: {
    value: function (maritalStatus) {
      browser.element('[value="' + maritalStatus.toLowerCase() + '"]').click();
    }
  },
  hobby: {
    value: function (hobby) {
      browser.element('[value="' + hobby.toLowerCase() + '"]').click();
    }
  },
  country: {
    value: function (country) {
      browser.element('#dropdown_7').click();
      browser.element('[value="' + country + '"]').click();
    }
  },
  birthMonth: {
    value: function (birthMonth) {
      browser.element('#mm_date_8').click();
      browser.element('[value="' + birthMonth + '"]').click();
    }
  },
  birthDate: {
    value: function (birthDate) {
      browser.element('#dd_date_8').click();
      browser.element('[value="' + birthDate + '"]').click();
    }
  },
  birthYear: {
    value: function (birthYear) {
      browser.element('#yy_date_8').click();
      browser.element('[value="' + birthYear + '"]').click();
    }
  },
  phone: {
    value: function (phoneNumber) {
      browser.setValue('#phone_9', phoneNumber);
    }
  },
  username: {
    value: function (username) {
      browser.setValue('#username', username + randVal);
    }
  },
  email: {
    value: function (emailPrefix, domain) {
      browser.setValue('#email_1', emailPrefix + randVal + domain);
    }
  },
  aboutYourself: {
    value: function (about) {
      browser.setValue('#description', about);
    }
  },
  password: {
    value: function (password) {
      browser.setValue('#password_2', password);
    }
  },
  passwordConfirm: {
    value: function (passwordConfirm) {
      browser.setValue('#confirm_password_password_2', passwordConfirm);
    }
  },
  submit: {
    value: function () {
      browser.element('[type="submit"]').click();
    }
  },
  enterFormInfo: {
    value: function (scenario) {
      this.firstName(params.userInfo.firstName);
      this.lastName(params.userInfo.lastName);
      this.hobby(params.userInfo.hobby);
      this.phone(params.userInfo.phoneNumber);
      this.username(params.userInfo.userName);
      this.maritalStatus(params.userInfo.maritalStatus);
      this.country(params.userInfo.country);
      this.birthMonth(params.userInfo.birthMonth);
      this.birthDate(params.userInfo.birthDate);
      this.birthYear(params.userInfo.birthYear);
      if (scenario.indexOf('invalid') !== -1) {
        self.email(params.userInfo.invalidEmailPrefix, params.userInfo.domain);
      } else {
        self.email(params.userInfo.emailPrefix, params.userInfo.domain);
      }
      this.aboutYourself(params.userInfo.about);
      this.password(params.userInfo.password);
      this.passwordConfirm(params.userInfo.passwordConfirm);
    }
  }
});
module.exports = RegistrationPage;
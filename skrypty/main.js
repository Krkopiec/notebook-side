(function(window) {
    'use strict';

    var SERVER_URL = 'http://192.168.1.106:8080'
    var LOGIN_FORM_SELECTOR = '#login-form';

    var Application = window.Application;
    var Login = Application.Login;

    var login = new Login(LOGIN_FORM_SELECTOR, SERVER_URL);
    login.handleForm();

})(window);
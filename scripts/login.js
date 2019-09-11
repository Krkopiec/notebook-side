(function(window) {
    'use strict';

    var Application = window.Application || {};
    var $ = window.jQuery;

    function Login(serverUrl) {
        if (!serverUrl) {
            throw new Error('No url provided');
        }
        this.serverUrl = serverUrl;
    }

    Login.prototype.handleForm = function() {
        var self = this;
        $('#login-form').on('submit', function(event) {
            event.preventDefault();
            var formData = {};
            $(this).serializeArray().forEach(function(element) {
                formData[element.name] = element.value;
            });
            self.login(formData);
        });
    }

    Login.prototype.login = function(formData) {
        $.ajax({
            type: 'POST',
            url: this.serverUrl + '/check-user',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function () {
            	sessionStorage.setItem('login', formData.login);
            	sessionStorage.setItem('password', formData.password);
            	location.pathname = "/notes.html";
            },
            error: function() {
                $('#login-error').show();
            }
        });
    }
    
    Application.Login = Login;
    window.Application = Application;

    var SERVER_URL = 'http://localhost:8080'
    var login = new Login(SERVER_URL);
    login.handleForm();
})(window);

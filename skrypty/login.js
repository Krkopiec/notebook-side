(function(window) {
    'use strict';

    var Application = window.Application || {};
    var $ = window.jQuery;

    function Login(loginFormSelector, serverUrl) {
        if (!serverUrl || !loginFormSelector) {
            throw new Error('No url or form selector provided');
        }
        this.$loginFormSelector = $(loginFormSelector);
        this.serverUrl = serverUrl;
    }

    Login.prototype.handleForm = function() {
        var self = this;
        this.$loginFormSelector.on('submit', function(event) {
            event.preventDefault();
            var formData = {};
            $(this).serializeArray().forEach(function(element) {
                formData[element.name] = element.value;
            });
            self.login(formData);
        });
    }

    Login.prototype.login = function(formData) {
        $.post(this.serverUrl + '/login', formData, function(answer) {
            console.log(answer);
        });
    }

    Application.Login = Login;
    window.Application = Application;
})(window)
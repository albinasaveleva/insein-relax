'use strict';

class Autorize {
    constructor({
        form,
        login, 
        password, 
        authorizationButton, 
    }) {
        this.form = document.querySelector(form);
        this.login = document.querySelector(login);
        this.password = document.querySelector(password);
        this.authorizationButton = authorizationButton;
        this.autorizeCookie = {};
        this.correctAutorize = false;
    }

    authorizing() {
        if (this.login.value === this.autorizeCookie.login &&
            this.password.value === this.autorizeCookie.password) {
            this.correctAutorize = true;
            this.clearForm(this.form);
            this.setCookie('correctAutorize', this.correctAutorize);
            if (/\index.html/.test(window.location)) {
                window.location = window.location.href.replace(/index/, 'table' );
            } else {
                window.location = `${window.location.href}table.html`;
            }
        } else {
            this.correctAutorize = false;
            this.clearForm(this.form);
            this.setCookie('correctAutorize', this.correctAutorize);

            if (this.login.value !== this.autorizeCookie.login) {
                this.addError(this.login.nextElementSibling, 'inline');
            } 
            if (this.password.value !== this.autorizeCookie.password) {
                this.addError(this.password.nextElementSibling, 'inline');
            }
        }
        this.correctAutorize = false;
    }

    clearForm(form) {
        form.querySelectorAll('input').forEach(input => input.value = '');
    }
    addError(error, style) {
        error.style.display = style;
    }
    clearError(error) {
        error.style.display = '';
    }   
    setCookie(key, value, maxAge, path, domain, secure) {
        let cookieStr = `${encodeURI(key)}=${encodeURI(value)}`;
    
        if (maxAge) {
          let expires = new Date(Date.now() + maxAge);
          // 1 day: 86400e3 
          cookieStr += `; expires=${expires.toGMTString()}`;
        }
    
        cookieStr += path ? `; path=${encodeURI(path)}` : '';
        cookieStr += domain ? `; domain=${encodeURI(domain)}` : '';
        cookieStr += secure ? `; secure=${encodeURI(secure)}` : '';
    
        document.cookie = cookieStr;
    }
    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURI(matches[1]) : undefined;
    }
    getAutorizeCookie() {
        if (this.getCookie('login')) {
            this.autorizeCookie.login = this.getCookie('login');
        }
        if (this.getCookie('password')) {
            this.autorizeCookie.password = this.getCookie('password');
        }
    }
    init() {
        let login = 'testLogin',//login для входа
            password = 'testPassword';//password для входа
            
        this.setCookie('login', login);
        this.setCookie('password', password);
         
        this.getAutorizeCookie();

        let authorizationBind = this.authorizing.bind(this);
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            authorizationBind();
            this.clearForm(this.form);
        });
        this.form.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', () => this.clearError(input.nextElementSibling));
        });

    }
}

const autorize = new Autorize({
    form: 'form',
    login: '#name',
    password: '#type',
    authorizationButton: '.button-ui_firm'
});
autorize.init();
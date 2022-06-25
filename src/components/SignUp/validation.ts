export interface IFormValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const REQUIRED_FIELD = 'Обязательно для заполнения';

export const emailValidation = Object.freeze({
    required: REQUIRED_FIELD,
    validate: (value: string): string | boolean => {
        if(!value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
            return 'Не корректный адрес электронной почты';
        }

        return true;
    }
});

export const usernameValidation = Object.freeze({
    required: REQUIRED_FIELD,
    validate: (value: string): string | boolean => {
        if(value.match(/[а-яА-Я]/)) {
            return 'Имя не может содержать кириллицу';
        } else if (!value.match(/^[^\d]*$/)) {
            return 'Имя не может содержать цифры';
        } else if (!value.match(/^[\w&.\\-]*$/)) {
            return 'Имя не может содержать специальные символы';
        } else if (value.length > 15) {
            return 'Слишком длинное имя';
        }

        return true;
    }
});

export const passwordValidation = Object.freeze({
    required: REQUIRED_FIELD,
    validate: (value: string): string | boolean => {
        if(value.length <= 7) {
            return 'Пароль должен быть не менее 8-ми символов';
        }

        return true;
    }
});

export const helpGetPass = {
    pass: '',
    setPass: function(value = ''){
        this.pass = value
    },
    getPass: function() {
        return this.pass;
    }
}

export const confirmValidation = Object.freeze({
    required: REQUIRED_FIELD,
    validate: (value: string): string | boolean => {
        if (value !== helpGetPass.getPass()) {
            return 'Пароли должны совпадать';
        }

        return true;
    }
});

export type ISignUp = Omit<IFormValues, 'confirmPassword'>
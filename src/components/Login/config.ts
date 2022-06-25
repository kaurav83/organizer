import * as yup from 'yup';

export interface IFormValues {
    email: string;
    password: string;
}

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина пароля ${min}';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина пароля ${max}';

export const schema: yup.SchemaOf<IFormValues> = yup
    .object()
    .shape({
        email:    yup.string().email().required('email is required'),
        password: yup
            .string()
            .required('password is required')
            .min(8, tooShortMessage)
            .max(15, tooLongMessage)
            .defined(),
    })
    .defined();

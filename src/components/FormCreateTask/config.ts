import * as yup from 'yup';

export interface IFormValues {
    title: string;
    deadline: string;
    description: string;
    tag: string;
}

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessageTitle = 'минимальная длина заголовка ${min}';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessageTitle = 'максимальная длина заголовка ${max}';
// eslint-disable-next-line no-template-curly-in-string
const tooShortMessageDescription = 'минимальная длина описания ${max}';

export const schema: yup.SchemaOf<IFormValues> = yup
    .object()
    .shape({
        title:    yup
            .string()
            .required('Заголовок задачи обязателен')
            .min(10, tooShortMessageTitle)
            .max(40, tooLongMessageTitle),
        description: yup
            .string()
            .required('Описание задачи обязательно')
            .min(8, tooShortMessageDescription)
            .defined(),
        deadline: yup
            .string()
            .required('Выбор даты обязателен'),
        tag: yup
            .string()
            .required('Tэг задачи обязательно')
    })
    .defined();

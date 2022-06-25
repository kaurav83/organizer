import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import Button from '@mui/material/Button';
import { FieldSignUp } from '../Shared/FieldSignUp';
import { 
    IFormValues, 
    usernameValidation, 
    passwordValidation,
    emailValidation,
    helpGetPass,
    confirmValidation
} from './validation';
import { signUpNewUser } from '../../redux/actions/auth';
import { getToken } from '../../redux/selectors/auth';
import { 
    SectionAuthForm, 
    Form, 
    LegendAuthForm,
    FieldsetAuthForm,
    ParagraphAuthForm
} from '../styledComponents';

export const SignUp: React.FC = () => {
    const {
        handleSubmit, reset, control, setValue, watch, getValues,
    } = useForm<IFormValues>({
        mode: 'all',
        defaultValues: {
            name: '',
            email:    '',
            password: '',
            confirmPassword: '',
        },
    });

    const dispatch = useDispatch();
    const token = useSelector(getToken);
    const navigate = useNavigate();

    useEffect(() => {
        helpGetPass.setPass(getValues('password'));
    }, [watch('password')]);

    useEffect(() => {
        if (token) {
            navigate('/tasks');
        }
    }, [token]);

    const onSubmit: SubmitHandler<IFormValues> = data => {
        const { confirmPassword, ...newUser } = data;
        dispatch(signUpNewUser(newUser));
        // reset();
    };

    return (
        <SectionAuthForm>
            <Form onSubmit = { handleSubmit(onSubmit) }>
                <FieldsetAuthForm>
                    <LegendAuthForm>Регистрация</LegendAuthForm>
                    <FieldSignUp
                        name = 'name'
                        validation = { usernameValidation }
                        control = { control }
                        label = 'Имя пользователя' 
                        type = 'text' />
                    <FieldSignUp
                        name = 'email'
                        validation = { emailValidation }
                        control = { control }
                        label = 'Email'
                        type = 'text' />
                    <FieldSignUp
                        name = 'password'
                        validation = { passwordValidation }
                        control = { control }
                        label = 'Пароль'
                        type = 'password' />
                    <FieldSignUp
                        name = 'confirmPassword'
                        validation = { confirmValidation }
                        control = { control }
                        label = 'Подтвердите пароль'
                        type = 'password' />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth={ false }
                        disableElevation={ true }
                        sx={{
                            marginTop: 1
                        }}
                    >
                        Зарегистрироваться
                    </Button>
                </FieldsetAuthForm>
                <ParagraphAuthForm>Перейти к <Link to="/login" style={{textDecoration: 'none', color: 'blue'}}>логину</Link></ParagraphAuthForm>
            </Form>
        </SectionAuthForm>
    );
};

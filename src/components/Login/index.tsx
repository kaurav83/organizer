import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import Button from '@mui/material/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldLogin } from '../Shared/FieldLogin';
import { IFormValues, schema } from './config';
import { loginUser } from '../../redux/actions/auth';
import { getToken } from '../../redux/selectors/auth';
import { 
    SectionAuthForm, 
    Form, 
    LegendAuthForm,
    FieldsetAuthForm,
    ParagraphAuthForm
} from '../styledComponents';

export const Login: React.FC = () => {
    const {
        handleSubmit, reset, control, setValue, watch,
    } = useForm<IFormValues>({
        mode: 'all',
        resolver: yupResolver(schema),
        defaultValues: {
            email:    '',
            password: '',
        },
    });

    const dispatch = useDispatch();
    const token = useSelector(getToken);
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IFormValues> = data => {
        dispatch(loginUser(data));
        // reset();
    };

    useEffect(() => {
        if (token) {
            navigate('/tasks');
        }
    }, [token]);

    return (
        <SectionAuthForm>
            <Form onSubmit = { handleSubmit(onSubmit) }>
                <FieldsetAuthForm>
                    <LegendAuthForm>Вход</LegendAuthForm>
                    <FieldLogin
                        name = 'email'
                        control = { control }
                        label = 'Электропочта' 
                        type = 'text' />
                    <FieldLogin
                        name = 'password'
                        control = { control }
                        label = 'Пароль'
                        type = 'password' />
                    <Button
                        type="submit"
                        variant="contained"
                        disableElevation={ true }
                        sx={{
                            marginTop: 1
                        }}
                    >
                        Войти
                    </Button>
                </FieldsetAuthForm>
                <ParagraphAuthForm>Если у вас до сих пор нет учётной записи, вы можете <Link to="/signup" style={{textDecoration: 'none', color: 'blue'}}>зарегистрироваться</Link>.</ParagraphAuthForm>
            </Form>
        </SectionAuthForm>
    );
};

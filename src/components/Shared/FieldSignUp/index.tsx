import React from 'react';
import { Controller, useFormState, Control } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FieldWrapper } from '../../styledComponents';
import { IFormValues } from '../../SignUp/validation';

type Props = {
    name: "name" | "email" | "password" | "confirmPassword"
    control: Control<IFormValues>
    label: string
    type: string
    validation: { required: boolean | string}
};

export const FieldSignUp = ({ name, control, label, type, validation }: Props) => {
    const { errors } = useFormState({ control })

    return (
        <FieldWrapper>
            <Controller
                name = { name }
                control = { control }
                rules = { validation }
                render = { ({
                    field: { onChange, value },
                    fieldState: { error },
                    formState,
                }) => {
                    return (
                        <TextField
                            onChange = { onChange }
                            type = { type }
                            value = { value }
                            placeholder = { label }
                            helperText = { error ? error.message : null }
                            size = 'small'
                            error = { !!error }
                            fullWidth
                            variant = 'standard' />
                    );
                } } />
        </FieldWrapper>
    );
};

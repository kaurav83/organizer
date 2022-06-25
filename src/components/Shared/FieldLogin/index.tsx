import React from 'react';
import { Controller, Control } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FieldWrapper } from '../../styledComponents';
import { IFormValues } from '../../Login/config';

type Props = {
    name: "email" | "password"
    control: Control<IFormValues>
    label: string
    type: string
};

export const FieldLogin = ({ name, control, label, type }: Props) => {
    return (
        <FieldWrapper>
            <Controller
                name = { name }
                control = { control }
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
                            size = 'medium'
                            error = { !!error }
                            fullWidth
                            variant = 'standard' />
                    );
                } } />
        </FieldWrapper>
    );
};

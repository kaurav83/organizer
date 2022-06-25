import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

type Props = {
    name: string
} & TextFieldProps;

export const FieldTask: React.FC<Props> = ({ name, ...otherProps }) => {
    const { control, formState: { errors } } = useFormContext();
    
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                return (
                    <TextField
                        {...field}
                        {...otherProps}
                        error={!!errors[name]}
                        helperText={errors[name] ? errors[name].message : ''}
                        size='small'
                        fullWidth
                        variant='outlined' />
                );
            }} />
    );
};
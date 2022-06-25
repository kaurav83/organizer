import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from  '../components/Shared/Spinner';
import { Login } from '../components/Login';
import { getLoading } from '../redux/selectors/loading';

export const LoginPage: React.FC = () => {
    const isLoading = useSelector(getLoading);

    if (isLoading) {
        return <Spinner />
    }

    return (
        <Login />
    );
};

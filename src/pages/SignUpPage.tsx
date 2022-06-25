import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from  '../components/Shared/Spinner';
import { getLoading } from '../redux/selectors/loading';
import { SignUp } from '../components/SignUp';

export const SignUpPage: React.FC = () => {
    const isLoading = useSelector(getLoading);

    if (isLoading) {
        return <Spinner />
    }

    return (
        <SignUp />
    );
};

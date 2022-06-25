import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Main } from '../../styledComponents';

type Props = {
    user: boolean
    redirectPath?: string
}

export const ProtectedRoute = ({ user, redirectPath = '/login' }: Props) => {
    if (!user) {
        return <Navigate to = { redirectPath } replace />;
    }

    return (
        <Main>
            <Outlet />
        </Main>  
    )
};
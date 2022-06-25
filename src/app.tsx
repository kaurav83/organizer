// Core
import { FC, useEffect } from 'react';
import {
    Navigate, Route, Routes,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, Slide } from 'react-toastify';
// Components
import {
    LoginPage,
    ProfilePage,
    SignUpPage,
    TasksPage,
} from './pages';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/Shared/ProtectedRoute';
import { getToken } from './redux/selectors/auth';
import { useMessage } from './hooks/useMessage';
import { getProfile } from './redux/actions/profile';
import { setUserToken } from './redux/actions/auth';
// Instruments


export const App: FC = () => {
    const token = useSelector(getToken);
    const dispatch = useDispatch();
    useMessage();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            const tokenLS = localStorage.getItem('token') || '';
            dispatch(setUserToken({data: tokenLS}));
            dispatch(getProfile(tokenLS));
        }
    }, []);

    return (
        <>
            <ToastContainer newestOnTop transition = { Slide } />
            <Routes>
                <Route element = { <Layout /> }>
                    <Route path = '/login' element = { <LoginPage /> } />
                    <Route path = '/signup' element = { <SignUpPage /> } />
                    <Route element = { <ProtectedRoute user = { Boolean(token) } /> }>
                        <Route path = '/profile' element = { <ProfilePage /> } />
                        <Route path = '/tasks' element = { <TasksPage /> } />
                    </Route>
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Route>
            </Routes>
        </>
    );
};


import React, { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { getToken } from '../../redux/selectors/auth';
import { logoutUser, resetUserToken } from '../../redux/actions/auth';
import { setMessage, resetMessage } from '../../redux/actions/messages';

const NavBarWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding: 30px 40px;
`;

export const NavBar: React.FC = () => {
    const token = useSelector(getToken);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser(token));
        localStorage.removeItem('token');
    };

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (!token) {
            event.stopPropagation();
        }
    };

    return (
        <NavBarWrapper>
            {
                !token
                &&
                <NavLink 
                    to = '/login'
                    style = {({ isActive }) => ({
                        color: isActive ? '#4d7cfe' : '#98a9bc',
                        marginLeft: '30px',
                        textDecoration: 'none',
                        fontFamily: '22px',
                        fontWegiht: '500',
                        cursor: 'pointer',
                    })}
                >
                    Войти
                </NavLink>
            }
            <NavLink 
                to = {!token ? '#' : '/tasks'}
                style = {({ isActive }) => ({
                    color: isActive ? '#4d7cfe' : '#98a9bc',
                    marginLeft: '30px',
                    textDecoration: 'none',
                    fontFamily: '18px',
                    fontWegiht: '200',
                    cursor: token ? 'pointer' : 'not-allowed',
                })}
            >
                К задачам
            </NavLink>
            <NavLink 
                to = {!token ? '#' : '/profile'}
                style = {({ isActive }) => ({
                    color: isActive ? '#4d7cfe' : '#98a9bc',
                    marginLeft: '30px',
                    textDecoration: 'none',
                    fontFamily: '18px',
                    fontWegiht: '200',
                    cursor: token ? 'pointer' : 'not-allowed',
                })}
                onClick = {handleClick}
            >
                Профиль
            </NavLink>
            {
                token
                &&
                <Button 
                    size = 'medium' 
                    variant = 'contained'
                    style = {{ marginLeft: '30px' }}
                    onClick = {logout}
                >
                    ВЫЙТИ
                </Button>
            }
        </NavBarWrapper>
    );
};
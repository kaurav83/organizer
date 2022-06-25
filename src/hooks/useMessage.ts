import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { toastsOptions } from '../constants/toastOptions';
import { getMessage, getTypeMessage } from '../redux/selectors/messages';

export const useMessage = () => {
    const notification: string = useSelector(getMessage);
    const type: string = useSelector(getTypeMessage);

    useEffect(() => {
        if (notification && (type === 'error' || type === 'success' || type === 'info')) {
            toast[type](notification, toastsOptions);
        }
    }, [notification]);
};
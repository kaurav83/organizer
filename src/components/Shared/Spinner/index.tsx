import React from 'react';
import { Audio } from  'react-loader-spinner'
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const Spinner: React.FC = () => {
    return (
        <SpinnerWrapper>
            <Audio
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'
            />
        </SpinnerWrapper>
    )
}
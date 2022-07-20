import React from 'react';
import styled from 'styled-components';
import img from '../../assets/images/illustration.png';
import { ITagModel } from '../../api/types';

export const Form = styled.form`
    background-color: #fff;
    border-radius: 10px;
    padding: 50px 40px;
`;

export const SectionAuthForm = styled.section`
    width: calc(40% - 45px);
    margin: 200px auto;
`;

export const LegendAuthForm = styled.legend`
    text-align: center;
    font-size: 24px;
    font-family: "Roboto",sans-serif;
    font-weight: 500;
    margin-bottom: 20px;
    color: #778ca2;
`;

export const FieldsetAuthForm = styled.fieldset`
    border: unset;
`;

export const FieldWrapper = styled.div`
    margin-bottom: 15px;
`;

export const ParagraphAuthForm = styled.p`
    margin-top: 40px;
    font-size: 14px;
    color: #98a9bc;
    font-family: "Roboto",sans-serif;
    font-weight: 200;
`;

export const Main = styled.main`
    padding-top: 87px;
    min-height: 800px;
`;

export const ToggleTaskWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 37px;
`;

export const ToggleTaskButton = styled.button`
    background: none;
    border: none;
    color: #4d7cfe;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    transition: all .2s;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    &:before {
        content: "";
        font-family: "Line Awesome Free";
        font-weight: 900;
        margin-right: 7px;
        font-size: 18px;
    }
`;

export const WrapTaskPanel = styled.div`
    display: flex;
    min-height: 650px;
`;

export const EmptyTasksSpace = styled.div`
    background: none;
    padding-top: 126px;
    display: flex;
    justify-content: center;

    width: 100%;
    flex-shrink: 1;
    background-color: #fff;
    margin: 30px 30px 0;
    padding: 30px 0;

    &:before {
        content: "";
        background-image: url(${img});
        width: 460px;
        height: 311px;
        display: block;
        background-size: cover;
    }
`;

export const TaskCard = styled.div`
    margin-top: 30px;
    width: calc(50% - 45px);
    max-height: 600px;
    margin-right: 30px;
    flex-shrink: 0;
    background-color: #fff;
    padding-bottom: 50px;
`;

export const HeaderTaskCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 53px;
    margin-bottom: 27px;
    
    &:after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #e8ecef;
    }
`;

export const ButtonCompleteTask = styled.button`
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: #778ca2;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    margin-left: 26px;
    cursor: pointer;

    &:before {
        content: "";
        font-family: "Line Awesome Free";
        font-weight: 900;
        font-size: 19px;
        display: block;
        margin-right: 12px;
    }
`;

export const ButtonRemoveTask = styled.button`
    border: none;
    background: none;
    outline: none;
    margin-right: 17px;
    transition: all .2s;
    cursor: pointer;

    &:before {
        content: "";
        font-family: "Line Awesome Free";
        font-weight: 900;
        font-size: 26px;
        display: block;
        color: #fe4d97;
    }
`;

export const ContentTaskCard = styled.div`
    padding-left: 26px;
    padding-right: 44px;
    max-height: 596px;
    overflow-y: scroll;
`;

export const LabelTaskField = styled.label`
    display: block;
    font-size: 22px;
    color: #98a9bc;
    margin-bottom: 14px;
`;

export const WrapInputDateTask = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    &:before {
        content: "";
        font-family: "Line Awesome Free";
        font-weight: 900;
        font-size: 20px;
        margin-right: 6px;
        color: #778ca2;
    }

    & input {
        border: none;
        font-size: 18px;
    } 
`;

export const Tags = styled.div`
    margin-bottom: 34px;
`;

type PropsTaskSpan = {
    tag: ITagModel
    currentTag?: string | null
}
export const Tag = styled.span<PropsTaskSpan>`
    padding: 10px;
    background: ${({tag}) => (tag.bg)};
    color: ${({tag}) => (tag.color)};
    opacity: ${({tag, currentTag}) => (currentTag === null ? '1' : tag.id === currentTag ? '1' : '.4')};
    display: inline-flex;
    justify-content: center;
    width: 92px;
    font-size: 14px;
    padding-top: 9px;
    padding-bottom: 8px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;
// DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export const ButtonsControl = styled.div`
    display: flex;
`;

export const ButtonReset = styled.button`
    background-color: #fe4d97;
    cursor: pointer;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 9px 19px 8px;
    border: none;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    border-radius: 4px;
    transition: all .2s;

    &:disabled {
        cursor: auto;
        transform: scale(1);
        filter: grayscale(100%);
        opacity: .3;
    }
`;

export const ButtonSubmit = styled.button`
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 9px 19px 8px;
    border: none;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    border-radius: 4px;
    transition: all .2s;
    background-color: #4d7cfe;
    cursor: pointer;

    &:disabled {
        cursor: auto;
        transform: scale(1);
        filter: grayscale(100%);
        opacity: .3;
    }
`;

export const ErrorMessage = styled.div`
    color: tomato;
    margin: 10px 0;
`;

export const TasksWrapper = styled.div`
    width: 100%;
    flex-shrink: 1;
    background-color: #fff;
    margin: 30px 30px 0;
    padding: 30px 0;
`;

export const TasksList = styled.div`
    padding: 0 30px;
    max-height: 600px;
    overflow-y: scroll;
`;

export const Task = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 56px;
    cursor: pointer;

    &:before {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 2px;
        background-color: #e8ecef;
        margin-right: 12px;
    }

    &:after {
        position: absolute;
        bottom: 0;
        content: "";
        width: 100%;
        height: 1px;
        background-color: #e8ecef;
        display: block;
    }

    &.completed: before {
        content: "";
        font-family: "Line Awesome Free";
        font-weight: 900;
        color: #fff;
        background-color: #4d7cfe;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const TaskTitle = styled.span`
    color: #252631;
    font-size: 16px;
    line-height: 1;
    margin-top: 1px;
`;

export const MetaTitle = styled.div`
    position: absolute;
    right: 0;
`;

export const TaskDeadline = styled.span`
    font-size: 14px;
    color: #98a9bc;
    margin-right: 18px;

    &:before {
        content: "";
        font-family: "Line Awesome Free";
        font-weight: 900;
        margin-right: 6px;
    }
`;
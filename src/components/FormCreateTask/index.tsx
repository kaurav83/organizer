import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormValues, schema } from './config';
import { FieldTask } from '../Shared/FieldTask';
import { InputDateTask } from '../Shared/InputDateTask';
import { 
    HeaderTaskCard, ButtonCompleteTask, ButtonRemoveTask,
    LabelTaskField, ContentTaskCard, WrapInputDateTask,
    Tags, Tag, ButtonsControl, ButtonReset, ButtonSubmit,
    ErrorMessage,
} from '../styledComponents';
import { postTask, removeTask } from '../../redux/actions/tasks';
import { setOpenCard } from '../../redux/actions/taskCard';
import { updateTask } from '../../redux/actions/tasks';
import { getStateCardNewTask } from '../../redux/selectors/taskCard';
import { allTags } from '../../redux/selectors/tags';
import { getToken } from '../../redux/selectors/auth';
import { getTask } from '../../redux/selectors/tasks';
import { allTasks } from '../../redux/selectors/tasks';
import { TaskModel } from '../../api/types';

export const FormCreateTask: React.FC = () => {
    const tags = useSelector(allTags);
    const token = useSelector(getToken);
    const isNewTask = useSelector(getStateCardNewTask);
    const selectedTaskId = useSelector(getTask);
    const tasks = useSelector(allTasks);
    const dispatch = useDispatch();

    const methods = useForm<IFormValues>({
        mode: 'onTouched',
        resolver: yupResolver(schema),
        defaultValues: {
            title: '',
            description: '',
            deadline: '',
            tag: '',
        }
    });
    const { clearErrors, handleSubmit, formState: { errors }, setValue, watch } = methods;
    
    const submitForm: SubmitHandler<IFormValues> = data => {
        if (isNewTask) {
            dispatch(postTask(data, token));
            dispatch(setOpenCard({openForm: false, newTask: true}));
        } else {
            const task = {
                completed: true,
                title: watch('title'),
                description: watch('description'),
                deadline: watch('deadline'),
                tag: watch('tag')
            };
            dispatch(setOpenCard({openForm: false, newTask: false}));
            dispatch(updateTask(task, selectedTaskId, token));
        }
        // reset();
    };

    const handleTag = (id: string) => {
        setValue('tag', id);
        clearErrors('tag');
    };

    const handleCompleteTask = () => {
        const task = {
            completed: true,
            title: watch('title'),
            description: watch('description'),
            deadline: watch('deadline'),
            tag: watch('tag')
        };
        dispatch(setOpenCard({openForm: false, newTask: false}));
        dispatch(updateTask(task, selectedTaskId, token));
    }

    const handleRemoveTask = () => {
        dispatch(removeTask(selectedTaskId, token));
        dispatch(setOpenCard({openForm: false, newTask: false}));
    }

    useEffect(() => {
        if (!isNewTask) {
            const targetTask: TaskModel | undefined = tasks.find((task) => task.id === selectedTaskId);
            if (targetTask) {
                setValue('title', targetTask.title);
                setValue('description', targetTask.description);
                setValue('deadline', '');
                setValue('tag', targetTask.tag.id);
            }
        } else {
                setValue('title', '');
                setValue('description', '');
                setValue('deadline', '');
                setValue('tag', '');
        }
    }, [selectedTaskId]);
    
    return (
        <FormProvider {...methods}>
            <form onSubmit = {handleSubmit(submitForm)}>
                <HeaderTaskCard>
                    {
                        !isNewTask ?
                            <>
                                <ButtonCompleteTask
                                    onClick = {handleCompleteTask}
                                >
                                    Завершить
                                </ButtonCompleteTask>
                                <ButtonRemoveTask
                                    onClick = {handleRemoveTask}
                                />
                            </>
                            :
                            null
                    }
                    
                </HeaderTaskCard>
                <ContentTaskCard>
                    <LabelTaskField>Задачи
                        <FieldTask 
                            placeholder = 'Цель задачи'
                            type = 'text'
                            name = 'title'
                            focused
                        />
                    </LabelTaskField>
                    <LabelTaskField>Дедлайн</LabelTaskField>
                    <WrapInputDateTask>
                        <InputDateTask name = 'deadline' />
                    </WrapInputDateTask>
                    <LabelTaskField>Описание
                        <FieldTask 
                            placeholder = 'Описание задачи'
                            type = 'text'
                            name = 'description'
                            focused
                            multiline = {true}
                            rows = {3}
                        />
                    </LabelTaskField>
                    <Tags>
                        {
                            tags.length && tags.map((tag) => {
                                return <Tag 
                                            key = {tag.id} 
                                            tag = {tag}
                                            currentTag = {watch('tag')}
                                            onClick = {() => handleTag(tag.id)}
                                        >
                                            {tag.name}
                                        </Tag>
                            })
                        }
                    </Tags>
                    {errors.deadline && <ErrorMessage>{errors.deadline.message}</ErrorMessage>}
                    {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
                    {errors.tag && <ErrorMessage>{errors.tag.message}</ErrorMessage>}
                    {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
                    <ButtonsControl>
                        <ButtonReset disabled = {false} type = 'reset'>RESET</ButtonReset>
                        <ButtonSubmit disabled = {false} type = 'submit'>SUBMIT</ButtonSubmit>
                    </ButtonsControl>
                </ContentTaskCard>
            </form>
        </FormProvider>
    );
};
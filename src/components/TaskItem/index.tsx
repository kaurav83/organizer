import React from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { TaskModel } from '../../api/types';
import {
    Task, TaskTitle, MetaTitle, TaskDeadline, Tag
} from '../styledComponents';
import { selectTask } from '../../redux/actions/tasks';
import { setOpenCard } from '../../redux/actions/taskCard';
import { getTags } from '../../redux/actions/tags';

type Props = {
    task: TaskModel
}

export const TaskItem: React.FC<Props> = ({ task }) => {
    const dispatch = useDispatch();
    const date = new Date(task.deadline);

    const handleClickTask = () => {
        dispatch(selectTask(task.id));
        dispatch(getTags());
        dispatch(setOpenCard({openForm: true, newTask: false}));
    }
    
    return (
        <Task onClick = {handleClickTask} className={task.completed ? 'completed' : ''}>
            <TaskTitle>{task.title}</TaskTitle>
            <MetaTitle>
                <TaskDeadline>
                    {
                        `${format(date, 'd', { locale: ru })} 
                        ${format(date, 'MMMM', { locale: ru })} 
                        ${format(date, 'y', { locale: ru })}`
                    }
                </TaskDeadline>
                <Tag tag = {task.tag} currentTag = {null}>{task.tag.name}</Tag>
            </MetaTitle>
        </Task>
    )
};
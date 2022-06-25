import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    ToggleTaskWrapper, ToggleTaskButton, WrapTaskPanel,
    EmptyTasksSpace, TaskCard, TasksWrapper, TasksList,
} from '../styledComponents';
import { FormCreateTask } from '../FormCreateTask';
import { getTasks } from '../../redux/actions/tasks';
import { selectTask } from '../../redux/actions/tasks';
import { setOpenCard } from '../../redux/actions/taskCard';
import { getTags } from '../../redux/actions/tags';
import { allTasks } from '../../redux/selectors/tasks';
import { getToken } from '../../redux/selectors/auth';
import { getStateCardOpenForm } from '../../redux/selectors/taskCard';
import { TaskModel } from '../../api/types';
import { TaskItem } from '../TaskItem';

export const TaskManager: React.FC = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(getStateCardOpenForm);
    const token = useSelector(getToken);
    const tasks = useSelector(allTasks);

    useEffect(() => {
        dispatch(getTasks(token));
    }, []);

    const handleClick = () => {
        dispatch(setOpenCard({openForm: true, newTask: true}));
        dispatch(getTags());
        dispatch(selectTask(''));
    }

    return (
        <>
            <ToggleTaskWrapper>
                <ToggleTaskButton onClick={handleClick}>
                    НОВАЯ ЗАДАЧА
                </ToggleTaskButton>
            </ToggleTaskWrapper>

            <WrapTaskPanel>
                {
                    tasks.length ?
                        <TasksWrapper>
                            <TasksList>
                                {

                                    tasks.map((item: TaskModel) => {
                                        return (
                                            <TaskItem 
                                                key = {item.id} 
                                                task = {item} 
                                            />
                                        )
                                    })

                                }
                            </TasksList>
                        </TasksWrapper>
                        :
                        <EmptyTasksSpace />
                }
                {
                    isOpen
                    &&
                    <TaskCard>
                        <FormCreateTask />
                    </TaskCard>
                }
            </WrapTaskPanel>
        </>
    );
};

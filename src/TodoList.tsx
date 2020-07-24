import React from 'react';
import  TodoListItems from './TodoListItems';

interface TodoListProps {
    todos: Array<Todo>,
    toggleTodo: ToggleTodo
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo })=> {
    return (
        <ul>
            {todos.map(todo => {
                return <TodoListItems  key={todo.text} todo={todo} toggleTodo={toggleTodo}/>
            })}
        </ul>
    );
};
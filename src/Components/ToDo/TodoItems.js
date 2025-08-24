import React, { useRef } from 'react';
import { useStore } from '../../ContextStore';
import { observer } from 'mobx-react';
import { TodoItemContainer, FormInput, TodoTextWrapper, TodoText, RemoveButton } from '../../Styles/todoPage';

const TodoItems = (({ todo }) => {
    const {todoStore } = useStore();
    const isEditing = todoStore.editingTodoId === todo.id;
    const inputRef = useRef(null);
   
    const handleEditChange = (e) => {
     if (e.key === 'Enter') {
      todoStore.editTodo(todo.id, e.target.value);
     }
    };
   
    const handleDoubleClick = () => {
     todoStore.startEditing(todo.id);
    };
   
    return (
     <TodoItemContainer onDoubleClick={handleDoubleClick}>
      {isEditing ? (
       <FormInput
        type="text"
        defaultValue={todo.text}
        ref={inputRef}
        onBlur={(e) => todoStore.editTodo(todo.id, e.target.value)}
        onKeyDown={handleEditChange}
        autoFocus
       />
      ) : (
       <TodoTextWrapper>
        <input
         type="checkbox"
         checked={todo.completed}
         onChange={() => todoStore.toggleTodo(todo.id)}
         style={{ height: '1.25rem', width: '1.25rem', accentColor: '#4f46e5' }}
        />
        <TodoText completed={todo.completed}>
         {todo.text}
        </TodoText>
       </TodoTextWrapper>
      )}
      <RemoveButton onClick={() => todoStore.removeTodo(todo.id)}>
       Remove
      </RemoveButton>
     </TodoItemContainer>
    );
   });

   export default observer(TodoItems);
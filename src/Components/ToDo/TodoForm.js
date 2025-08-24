import React from 'react';
import { observer } from 'mobx-react';
import { Form, FormInput, FormButton } from '../../Styles/todoPage';
import { useStore } from '../../ContextStore';

const TodoForm = () => {
    const { todoStore } = useStore();   
    const handleAddTodo = (e) => {
     e.preventDefault();
     todoStore.addTodo();
    };
   
    return (
     <Form onSubmit={handleAddTodo}>
      <FormInput
       type="text"
       value={todoStore.newTodoText}
       onChange={(e) => todoStore.setNewTodoText(e.target.value)}
       placeholder="Add a new task..."
      />
      <FormButton
       type="submit"
       disabled={!todoStore.newTodoText.trim()}
      >
       Add To-Do
      </FormButton>
     </Form>
    );
   };

   export default observer(TodoForm);
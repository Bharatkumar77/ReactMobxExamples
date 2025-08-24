import { useStore } from "../../ContextStore";
import React from "react";
import { observer } from "mobx-react";
import { TodoListContainer, NoTodosMessage } from "../../Styles/todoPage";
import TodoItems from "./TodoItems";

const TodoList = () => {
const { todoStore } = useStore(); 
    return (
     <TodoListContainer>
      {todoStore.filteredTodos.length > 0 ? (
       todoStore.filteredTodos.map(todo => (
        <TodoItems key={todo.id} todo={todo} />
       ))
      ) : (
       <NoTodosMessage>No tasks found. Try adding a new one!</NoTodosMessage>
      )}
     </TodoListContainer>
    );
   };

   export default observer(TodoList);
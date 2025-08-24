import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoControls from './TodoControls'
import { Title } from '../../Styles/homePage'
import { PageContainer } from '../../Styles/todoPage'

export const ToDoWrapper = () => {
  return (
    <PageContainer>
    <Title>
      Advanced MobX To-Do List
     </Title>
     <TodoForm />
     <TodoControls />
     <TodoList />
     </PageContainer>
  )
}

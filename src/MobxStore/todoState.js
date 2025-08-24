import {action, makeObservable, observable, computed} from 'mobx';

export class TodoStore {
    todos = [
     { id: 1, text: 'Learn MobX with React', completed: true },
     { id: 2, text: 'Build a complex app with shared state', completed: false },
     { id: 3, text: 'Master the concept of reactivity', completed: false },
     { id: 4, text: 'Create a full-fledged application', completed: false },
    ];
    newTodoText = '';
    filter = 'all';
    searchText = '';
    editingTodoId = null;
   
    constructor() {
     makeObservable(this, {
        todos: observable,
        newTodoText: observable,
        filter: observable,
        searchText: observable,
        editingTodoId: observable,
        setNewTodoText: action,
        addTodo: action,
        toggleTodo: action,
        removeTodo: action,
        setFilter: action,
        setSearchText: action,
        startEditing: action,
        editTodo: action,
        cancelEditing: action,
        clearCompleted: action,
        completedTodosCount: computed,
        filteredTodos: computed,
     });
    }
   
    setNewTodoText = (text) => {
     this.newTodoText = text;
    }
   
    addTodo = () => {
     if (this.newTodoText.trim() === '') return;
     const newTodo = {
      id: Date.now(),
      text: this.newTodoText,
      completed: false,
     };
     this.todos.push(newTodo);
     this.newTodoText = '';
    }
   
    toggleTodo = (id) => {
     const todo = this.todos.find(t => t.id === id);
     if (todo) {
      todo.completed = !todo.completed;
     }
    }
   
    removeTodo = (id) => {
     this.todos = this.todos.filter(t => t.id !== id);
    }
   
    setFilter = (newFilter) => {
     this.filter = newFilter;
    }
   
    setSearchText = (text) => {
     this.searchText = text;
    }
   
    startEditing = (id) => {
     this.editingTodoId = id;
    }
    
    editTodo = (id, newText) => {
     const todo = this.todos.find(t => t.id === id);
     if (todo) {
      todo.text = newText;
      this.editingTodoId = null;
     }
    }
   
    cancelEditing = () => {
     this.editingTodoId = null;
    }
   
    clearCompleted = () => {
     this.todos = this.todos.filter(todo => !todo.completed);
    }
   
    get completedTodosCount() {
     return this.todos.filter(todo => todo.completed).length;
    }
   
    get filteredTodos() {
     const filteredByStatus = this.todos.filter(todo => {
      if (this.filter === 'active') return !todo.completed;
      if (this.filter === 'completed') return todo.completed;
      return true;
     });
   
     const filteredBySearch = filteredByStatus.filter(todo =>
      todo.text.toLowerCase().includes(this.searchText.toLowerCase())
     );
   
     return filteredBySearch;
    }
   }
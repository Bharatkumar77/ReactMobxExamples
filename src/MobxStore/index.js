import { AppState } from './appState';
import { FormState } from './formState';
import { TodoStore } from './todoState';
import { CounterStore } from './counter';

export const Store = {
    appState: new AppState(),
    FormState: new FormState(),
    todoStore: new TodoStore(),
    counterStore: new CounterStore(),
}
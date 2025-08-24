import {action, makeObservable, observable} from 'mobx';

const initialState = {
    isLoggedIn: true,
    currentPage: 'login',
    user: null,
    sidebarOpen: false,
    username: '',
    email: '',
    password: '',
    message: '',
}

export class AppState {
    isLoggedIn = true;
    currentPage = '';
    user = null;
    sidebarOpen = false;
    username = '';
    email = '';
    password = '';
    message = '';

    constructor() {
        Object.assign(this, initialState);
        makeObservable(this, {
            isLoggedIn: observable,
            currentPage: observable,
            user: observable,
            sidebarOpen: observable,
            username: observable,
            email: observable,
            password: observable,
            message: observable,
            login: action,
            logout: action,
            goToPage: action,
            toggleSidebar: action,
            setUsername: action.bound,
            setEmail: action,
            setPassword: action,
            setMessage: action,
        });
    }

    login = (userData) => {
        console.log("Logging in with user data:", userData);
        this.isLoggedIn = true;
        this.user = userData;
        this.goToPage('form');
    }


    logout = () => {
        this.isLoggedIn = false;
        this.user = null;
        this.goToPage('login');
    }

    goToPage = (pageName) => {
        this.currentPage = pageName;
    }

    toggleSidebar = () => {
        this.sidebarOpen = !this.sidebarOpen;
    }
    setUsername(name) {
        this.username = name;
    }
    setEmail = (email) => {
        this.email = email;
    }
    setPassword = (password) => {
        this.password = password;
    }
    setMessage = (message) => {
        this.message = message;
    }
    resetState = () => {
        Object.assign(this, initialState);
    }
}
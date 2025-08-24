import {action, makeObservable, observable} from 'mobx';
// import axios from 'axios';

export class FormState {
    formData = {
        name: '',
        email: '',
        message: '',
    };
    isLoading = false;
    isDataFecthed = false;
    error = '';

    constructor() {
        makeObservable(this, {
            formData: observable,
            isLoading: observable,
            isDataFecthed: observable,
            error: observable,
            setField: action,
            resetForm: action,
            getFormDetails: action,
        });
    }

    setField = (field, value) => {
        this.formData[field] = value;
        this.isDataFecthed = false;
    }
    //API Call to fetch form details
    getFormDetails = async() => {
        this.isLoading = true;
        try {
            // const data = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            setTimeout(() => {
                this.isLoading = false;
                this.isDataFecthed = true;
            }, 5000);
        } catch (error) {
            console.error("Error fetching form details:", error);
            this.isLoading = false;
            this.isDataFecthed = false;
            // this.error = 'Failed to fetch form details. Please try again later.';
        }
    }

    resetForm = () => {
        this.formData = {
            name: '',
            email: '',
            message: '',
        };
    }
}
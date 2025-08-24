import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../ContextStore';
import { Textarea, DisplayContainer, FormGroup, Label, Input, FormTitle } from '../../Styles/form';
import { ButtonGroup, CounterButton } from '../../Styles/counter';

const FormFillingComponent = () => {
    const { FormState } = useStore();
    const { getFormDetails } = FormState;

    const handleChange = (e) => {
        FormState.setField(e.target.name, e.target.value);
    };

    return (
        <DisplayContainer>
            <FormTitle>Form Filling</FormTitle>
            <form>
                <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        type="text"
                        name="name"
                        value={FormState.formData.name}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={FormState.formData.email}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                        id="message"
                        name="message"
                        value={FormState.formData.message}
                        onChange={handleChange}
                        rows="4"
                    />
                </FormGroup>
            </form>
            <ButtonGroup>
          <CounterButton onClick={() => getFormDetails()}>Show Form Data</CounterButton>
        </ButtonGroup>
        </DisplayContainer>
    );
};

export default observer(FormFillingComponent);
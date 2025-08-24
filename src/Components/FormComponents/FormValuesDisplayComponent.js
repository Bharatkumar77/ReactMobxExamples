import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../ContextStore';
import {DisplayContainer, DisplayTitle, ValuesGrid, ValueBox, Label, Value, CircularLoader} from '../../Styles/form';
import { ButtonGroup, CounterButton } from '../../Styles/counter';


const FormValuesDisplayComponent = () => {
    // Access the MobX store using the custom hook
    const { FormState } = useStore();
    const { isLoading, isDataFecthed } = FormState;

    return (
        <DisplayContainer>
            <DisplayTitle>Form Values</DisplayTitle>
           {(isDataFecthed && !isLoading) && <ValuesGrid>
                <ValueBox>
                    <Label>Name:</Label>
                    <Value>{FormState.formData.name || '...'}</Value>
                </ValueBox>
                <ValueBox>
                    <Label>Email:</Label>
                    <Value>{FormState.formData.email || '...'}</Value>
                </ValueBox>
                <ValueBox>
                    <Label>Message:</Label>
                    <Value>{FormState.formData.message || '...'}</Value>
                </ValueBox> 
            </ValuesGrid>}
            {isLoading && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <CircularLoader />
        </div> }
        </DisplayContainer>
    );
};

export default observer(FormValuesDisplayComponent);
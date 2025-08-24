import React from 'react';
import { observer } from 'mobx-react';
import FormFillingComponent from './FormFillingComponent';
import FormValuesDisplayComponent from './FormValuesDisplayComponent';
import { PageContainer, Header, MainContent } from '../../Styles/homePage';


const Form = () => 
        <PageContainer>
            <Header>
            </Header>
            <MainContent>
                <FormFillingComponent />
                <FormValuesDisplayComponent />
            </MainContent>
        </PageContainer>;

export default observer(Form);

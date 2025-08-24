import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../ContextStore';
import { PageContainer } from '../../Styles/homePage';
import { CountDisplay, ButtonGroup, CounterButton } from '../../Styles/counter';
const Counter = () => {
    const { counterStore } = useStore();
  
    return (
      <PageContainer>
        <CountDisplay>Count: {counterStore.count}</CountDisplay>
        <ButtonGroup>
          <CounterButton onClick={() => counterStore.decrement()}>Decrement</CounterButton>
          <CounterButton onClick={() => counterStore.increment()}>Increment</CounterButton>
        </ButtonGroup>
      </PageContainer>
    );
  };
  
  export default observer(Counter);
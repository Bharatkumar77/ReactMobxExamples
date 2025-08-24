import React from 'react';
import { observer } from 'mobx-react';
import { ControlsContainer, SearchInput, FilterButton, ClearButton } from '../../Styles/todoPage';
import { useStore } from '../../ContextStore';

const TodoControls = () => {

    const { todoStore } = useStore();   
    const hasCompletedTodos = todoStore.completedTodosCount > 0;
    const filterButtons = ['all', 'active', 'completed'];
   
    return (
     <ControlsContainer>
      {/* Search Input */}
      <SearchInput
       type="text"
       placeholder="Search tasks..."
       value={todoStore.searchText}
       onChange={(e) => todoStore.setSearchText(e.target.value)}
      />
   
      {/* Filter Buttons */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
       {filterButtons.map(f => (
        <FilterButton
         key={f}
         onClick={() => todoStore.setFilter(f)}
         active={todoStore.filter === f}
        >
         {f.charAt(0).toUpperCase() + f.slice(1)}
        </FilterButton>
       ))}
      </div>
   
      {/* Clear Completed Button */}
      <ClearButton
       onClick={() => todoStore.clearCompleted()}
       disabled={!hasCompletedTodos}
      >
       Clear Completed
      </ClearButton>
     </ControlsContainer>
    );
   };

   export default observer(TodoControls);
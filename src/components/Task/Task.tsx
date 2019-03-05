import * as React from 'react';
import { TaskStyle } from './styled';

export const Task = ({ task, onXClick }) => {
    return (
      <>
        <TaskStyle>
        <input type="checkbox" />
          {task}
          <button onClick={(e) => { 
            e.preventDefault
            onXClick(e)
          }}>X</button>
        </TaskStyle>
      </>
    )
  }
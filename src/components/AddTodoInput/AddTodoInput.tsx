import * as React from 'react';
import { Wrapper, Button } from './styled';
import * as p from 'prop-types';

interface Props {
    name: string;
    text: string;
}

export const AddTodoInput = ({ addTodo }) => {

    let input: any
    return (
        <Wrapper> 
        <div>
            <form onSubmit={(e) => {
                                e.preventDefault()
                                if (!input.value.trim()) { 
                                    return
                                }
                                addTodo(input.value)
                                input.value = ''
            }
          }>
                    <input placeholder="Aprender redux"
                    ref={node => {
                        input = node
                      }}/>  
            <button type="submit">
              Agregar tarea
            </button>
          </form>
        </div>
            
        </Wrapper>
    ) 
} 

AddTodoInput.propTypes = {
    addTodo: p.func.isRequired
};
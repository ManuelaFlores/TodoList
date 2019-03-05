import React, { Component } from 'react';
import { Wrapper, List } from './styled';
import { Task } from '../Task';

export class AddTodoInput extends Component {
  state = {
    tasks: [{ name: 'react', id:1, completed: false }]
  };

  refinput = React.createRef();

  render() {
    return (
      <>
        <Wrapper>
          <input ref={this.refinput} /> <button  onClick={() => {
              console.log(' this.refinput.current.value ', this.refinput.current.value);
              this.setState({
                tasks: [
                ...this.state.tasks,
                  { name: this.refinput.current.value, id: Date.now(), completed: false }
                ]
              })
            }
            }>
            Agregar tarea
            </button>
          <List>
            {this.state.tasks.map((task, i) => (
              <Task key={i}
                task={task.name}
                onXClick={this.state.tasks.filter(task => { task.id !== this.refinput.current.value.id})} />
            ))}
          </List>
        </Wrapper>
      </>
    );
  }
}
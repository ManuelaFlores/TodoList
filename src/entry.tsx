import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Avatar } from './components/Avatar';
import { Counter } from './components/Counter';
import { Todo } from './components/Todo';
import {AddTodoInput} from './components/AddTodoInput'

const Box = ({ children }) => (
    <div style={{ width: 300 }}>{children}</div>
)

const App = () => (
    <>
        <Box>
            {/* <Avatar name={"wilson"} /> */}
            <Counter />
            <Todo />
            <AddTodoInput/>
        </Box>
    </>
);

ReactDOM.render(<App/>, document.getElementById('root'));
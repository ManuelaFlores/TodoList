import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AddTodoInput} from './components/AddTodoInput'

const Box = ({ children }) => (
    <div style={{ width: 300 }}>{children}</div>
)

const App = () => (
    <>
        <Box>
            <AddTodoInput/>
        </Box>
    </>
);

ReactDOM.render(<App/>, document.getElementById('root'));
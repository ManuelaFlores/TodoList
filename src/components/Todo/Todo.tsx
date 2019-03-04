import * as React from 'react';
import * as p from 'prop-types';
import { Wrapper, Button } from './styled';

interface Props {
    text: String
}

/*export const  Todo : React.FC<Props> = ({
    text,
}) => {
    <Wrapper>
        {text}
        <Button>click me</Button>
        <Button primary onClick={() => {
            console.log('click primary');
        }}>click me</Button>
        <Button error>click me</Button>
    </Wrapper>
}*/

interface State {
    count: number;
}

 export class Todo extends React.Component<{}, State > {
     constructor(props) {
         super(props);
         this.state = {
             count: 0
         };
         this.handleClick = this.handleClick.bind(this);
     }
     componentWillMount(): void {
         console.log('render...');
     }
    componentDidMount(): void {
         console.log('mount...');
     }
    componentDidUpdate(): void {
         console.log('update..');
     }
     shouldComponentUpdate(nextProps, nextState): boolean {
         console.log(nextProps);
         console.log(nextState);
         return nextState.count % 2 === 0;
     }
     handleClick() {
         console.log('click');
         this.setState((prevState) => ({
             count: prevState.count + 1
         }));
    }
    render() {
         return(
             <>
                 <div>{this.state.count}</div>
                 <button onClick={this.handleClick}>click me</button>
                 <li>
                     <span></span>
                     <button>
                         <b>
                             X
                         </b>
                     </button>
                 </li>
             </>
        )
     }
 }
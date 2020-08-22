//useContext.js
import React from 'react';

const ComponentAContext = React.createContext('ComponentA');
ComponentAContext.displayName = 'ComponentAContext';

const ComponentAContextProvider = ComponentAContext.Provider;
const ComponentAContextConsumer = ComponentAContext.Consumer;

export {ComponentAContextProvider, ComponentAContextConsumer};
export default ComponentAContext;



//ComponentA.js
import React, { Component } from 'react'
import ComponentB from './ComponentB';
import ComponentAContextProvider from './useContext';

class ComponentA extends Component {

    render() {
        return (
            <div>
                <h2>This is from Component A</h2>
                <ComponentAContextProvider value='This is simple message'>
                    <ComponentB />
                </ComponentAContextProvider>
            </div>
        )
    }
}
export default ComponentA



//ComponentB.js
import React, { Component } from 'react'
import ComponentC from './ComponentC'

export class ComponentB extends Component {
    render() {
        return (
            <div>
                <h2>This is from ComponentB</h2>
                <ComponentC/>
            </div>
        )
    }
}
export default ComponentB



//componentC.js
import React from 'react'
import {ComponentAContext} from './useContext';

function ComponentC() {
    return (
        <div>
            <h2>This is from ComponentC</h2>
            {
                ComponentAContext.displayName
            }
            <br></br>
            <ComponentAContext.Consumer>
                {
                    value => {
                        return value;
                    }
                }
            </ComponentAContext.Consumer>
        </div>
    )
}
export default ComponentC

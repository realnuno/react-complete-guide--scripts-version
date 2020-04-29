import React from 'react';

import './Person.css';

const person = ( props ) => {
    console.log(props.children)
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            {/* props.children allows to display text between <Person> </Person> */}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;
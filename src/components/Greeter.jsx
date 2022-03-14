import React from 'react';

/*Props Object
{
phrase: 'Hello there'
name: 'Dalton!'
question: 'How is React going?'
}
*/





const Greeter = props => {
    return (
<div>
<h1>{props.phrase}, {props.name} {props.question}</h1>
</div>
);
};

export default Greeter;
import { useState } from 'react';
import PropTypes from 'prop-types';

const newMessage = {
    nombre: 'Marlon',
    apellido: 'Peralta'
};

const getResult = () => {
    return 4+4;
}

export const FirstApp = ( {title , value} ) =>
{
    const [ counter, setCounter ] = useState( value );

    const handleAdd = () =>{
        setCounter( counter + 1);
        // setCounter( (c) => c + 1 )
    }

    const handleRest = () => setCounter( counter - 1 );

    const handleReset = () => setCounter( value );

    return (
    <>
    <h1> { title }</h1>
    <h1> { counter }</h1>
    {/* <h1> { getResult() }</h1> */}
    {/* <code>{ JSON.stringify(newMessage) }</code> */}

    {/* <p>asdasd</p> */}
    <button onClick={ handleAdd }>
        +1
    </button>

    <button onClick={ handleRest }>
        -1
    </button>

    <button onClick={ handleReset }>
        Reset
    </button>

    </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo'
}

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
        // setCounter( counter + 1);
        setCounter( (c) => c + 1 )
    }

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

    </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo'
}

import PropTypes from 'prop-types';

const newMessage = {
    nombre: 'Marlon',
    apellido: 'Peralta'
};

const getResult = () => {
    return 4+4;
}

export const FirstApp = ( {title , subTitle} ) =>
{
    return (
    <>
    <h1> { title } { subTitle + 1 }</h1>
    {/* <h1> { getResult() }</h1> */}
    {/* <code>{ JSON.stringify(newMessage) }</code> */}

    {/* <p>asdasd</p> */}
    </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}


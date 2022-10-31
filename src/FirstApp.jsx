const newMessage = {
    nombre: 'Marlon',
    apellido: 'Peralta'
};

const getResult = () => {
    return 4+4;
}

export const FirstApp = () =>
{
    return (
    <>
    <h1> Hola mundo</h1>
    <h1> { getResult() }</h1>
    {/* <code>{ JSON.stringify(newMessage) }</code> */}

    <p>asdasd</p>
    </>
    );
};


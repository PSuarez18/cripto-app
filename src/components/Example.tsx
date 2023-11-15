// Ctrl + i (te habre una consola para hablar con la inteligencia artificial y preguntarle cosas);
// /doc genera documentacion de codigo
// /explain que me explique el codigo
// /fix que arregle porciones de codigo
// /test ejecute o cree test

import { useState } from 'react';

function Counter(){

    const [count, setCount] = useState(0);
    
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };
    
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };
    
    return (
        <div>
    <button onClick={handleIncrement}>+</button>
    <span>{count}</span>
    <button onClick={handleDecrement}>-</button>
  </div>
);
}
export default Counter;


function createObjectList(): { name: string, age: number }[] {
    const objectList = [];

    for (let i = 0; i < 10; i++) {
        const object = {
            name: `Object ${i}`,
            age: Math.floor(Math.random() * 100)
        };
        objectList.push(object);
    }

    return objectList;
}

/*
pelotudeces que quiere paolo:
componente menu que sea desplegable de izquierda a derecha,
con opciones de inicio,
con opcion de precio de monedas divisa,
con precio de cripto monedas 
comparacion de criptomonedas en tiempo real, graficos de comparaciones ,
acerca de nosotros 
cada opcion que te envie a su url  */
import React, { useState } from 'react';
import Quotes from '../quotes.json'
import colors from './Colors.js'


const QuoteBox = () => {

    /*
      Funcion para poder sacar un numero random, tomando como 
      base el numero maximo del arreglo que se tome, el cual
      se recibe como parametro.
    */
    const getRandom = (max) => Math.floor(Math.random() * max);


                        //useState
    // obtener la informacion del JSON al azar y almasenarla en el 
    // useState ya que ira cambiando gracias ala funcion random getRandom
    const [quote, setQuote] = useState(Quotes[getRandom(Quotes.length)]);
                                    /*Se manda llamar la informacion al azar
                                      ya que en el indice se pone la funcion random
                                      la cual toma como base del 0 al ultimo indice
                                      ya que como parametro se esta tomando como referencia
                                      el mismo JSON leyendolo con la ayuda de "length"
                                    */

    const clickRandom = () => {      
        const index = getRandom(Quotes.length)
        // solo para abreviar la funcion de abajo.

        setQuote(Quotes[index])
        //se indica que se repite el mismo proceso que se utilizo en
        //useState mandando llamar otra informacion random "al azar"
    }
    

    /*
        Funcion para llamar un color del areglo "colors",
        no es para traerme un indice del areglo, es para
        traerme lo que contiene el indice, ya que la funcion 
        "getRandom" se esta utilizando en donde se indica el indice... "colors[AQUI]"
    */
    const colorRandom = colors[getRandom(colors.length)]
    

    //es para poder poner directamente el color, sin usar "App.css"
    document.body.style = `background: ${colorRandom}`;

    return (
        <div className='quotes'>
            <h1 style={{color: colorRandom}}><i className="fa-solid fa-book-open"></i></h1>
            <p style={{color: colorRandom}}>
                <i style={{color: colorRandom}} className="fa-solid fa-quote-left"></i> {quote.quote} <i className="fa-solid fa-quote-right"></i>
            </p>
            <h3 style={{color: colorRandom}}>{quote.author}</h3>
            <button 
                onClick={clickRandom}
                style={{color: colorRandom}}
            >
                <i 
                    className="fa-solid fa-shuffle"
                >                  
                </i>
            </button>
        </div>
    );
};

export default QuoteBox;
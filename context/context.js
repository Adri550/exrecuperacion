import React, { useState, useEffect, createContext } from 'react';

export const FrasesContext = createContext();

const FrasesProvider = (props) => {

    const [today, settoday] = useState([])
    const [random, setrandom] = useState([])
    const [quotes, setquotes] = useState([])
    useEffect(() => {
        const gettoday = () => {
            fetch('https://zenquotes.io/api/today/')
                .then(data => {
                    return data.json();
                })
                .then(resultado => {
                    settoday(resultado);
                });
        }
        const getrandom = () => {
            fetch('https://zenquotes.io/api/random/')
                .then(data => {
                    return data.json();
                })
                .then(resultado => {
                    setrandom(resultado);
                });
        }
        const getquotes = () => {
            fetch('https://zenquotes.io/api/quotes/')
                .then(data => {
                    return data.json();
                })
                .then(resultado => {
                    setquotes(resultado);
                });
        }
        gettoday()
        getrandom()
        getquotes()
    }, [])

    return (
        <FrasesContext.Provider
            value={{
                today,
                random,
                quotes
            }}>
            {props.children}
        </FrasesContext.Provider>
    )
}
export default FrasesProvider;
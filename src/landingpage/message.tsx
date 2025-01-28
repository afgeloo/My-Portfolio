import { useEffect, useState } from 'react';
import './message.css';

function Message() {
    const [currentWord, setCurrentWord] = useState("Bonjour");

    useEffect(() => {
        const greetings = [
            "Hola",
            "Ciao",
            "Hallo",
            "Hej",
            "你好", 
            "こんにちは", 
            "안녕하세요", 
            "Bonjour",
            "Hello"
        ];
        let index = 0;

        const interval = setInterval(() => {
            setCurrentWord(greetings[index]);
            index++;
            if (index === greetings.length) {
                clearInterval(interval); // Stop the interval at the final word
            }
        }, 130); // Change word every 500ms

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div>
            <p className='message'>{currentWord},</p>
            <p className='message1'><br />I am Angelo!</p>
        </div>
    );
}

export default Message;

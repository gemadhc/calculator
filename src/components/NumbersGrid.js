// JavaScript source code
import React, { useState, useEffect } from 'react'
import '../App.css';


function NumbersGrid() {
    const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    const operations = ["+", "-", "*", "/"];
    const [listener, setListener] = useState(""); 
    const [numberString, setString] = useState(""); 
    const [Operand, setOperand] = useState("");
    const [first, setFirst] = useState(0); 
    const [second, setSecond] = useState(0);

    useEffect(
        () => {
            console.log(first, Operand, second, numberString); 
            let display = document.querySelector(".number");
            display.value = numberString; 
        }, [numberString]);

    useEffect(
        () => {
            if (second != 0) {
                console.log(first, Operand, second);
                let total = 0; 
                if (Operand == "+") {
                    total = parseInt(first) + parseInt(second);
                } else if (Operand == "-") {
                    total = parseInt(first) - parseInt(second);
                } else if (Operand == "*") {
                    total = parseInt(first) * parseInt(second);
                } else if (Operand == "/") {
                    total = parseInt(first) / parseInt(second);
                } else {
                    console.log("operand: ", Operand, "not valid"); 
                }
                console.log("Total: ", total);
                setString(String(total));
            }
        }, [second]);

    function handleClick(num) {
        setString(numberString + num);  
    }

    function result() {
        setSecond(document.querySelector(".number").value);
    }

    function startOperation(op) {
        setFirst(document.querySelector(".number").value);
        setString("");     
        setOperand(op);
    }

    function reset(){
        console.log("gotta reset!");
        document.querySelector(".number").value = "";
        setString("");
        setFirst(0);
        setSecond(0);
        setOperand("");
    }

    function listenup(key) {
        if (operations.includes(key.key)) {
            console.log("an operand typed");
            setOperand(key.key);
            let str = document.querySelector(".number").value
            setFirst(str.slice(0, str.length - 1));
            document.querySelector(".number").value = "";
            setString("");
        } else if (key.key == "Enter") {
            console.log("Enter typed, show result");
            result(); 
        } else {
            console.log("not a special key"); 
        }
    }
    return (
        <div className="content-container">
            <input className="number" type="text" placeholder="0" onKeyUp={
                (key) => { listenup(key); }
            }/>
            <div className="numbers-container">
                <button className="reset-button" onClick={reset}>Reset</button>
                {array.map(number => (<button onClick={
                    () => {
                        handleClick(number); 
                    }
                }>{number}</button>))}
            
                {operations.map(op => (<button onClick={
                    () => {
                        startOperation(op); 
                    }
                }>{op}</button>))}
                <button className="equal-button" onClick={result}>=</button>   
            </div>
        </div>
        );
}

export default NumbersGrid; 
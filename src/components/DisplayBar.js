import { useState } from 'react';

 
function SimpleSum(num1, num2) {
    const [result, setTotal] = useState(0); 
    var firstNumberString = "";
    var secondNumberString = ""; 

    const addition = () => {
        firstNumberString = document.querySelector(".n1").value;
        secondNumberString = document.querySelector(".n2").value;
        console.log("n1: ", firstNumberString, " n2: ", secondNumberString);
        let total = parseInt(firstNumberString) + parseInt(secondNumberString);
        setTotal(total); 
         
    }
    return (
        <div>
            <h1> This is s simple Sum App </h1>
            <input className="n1" type="text" placeholder="Number One"/>
            
            <input className="n2"type="text" placeholder="Number Two" />
            
            <button onClick={addition}>Add</button>
            <h3>Result: {result}</h3>
        </div>
     )
}
export default SimpleSum;
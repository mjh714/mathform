import React, { useState } from 'react';

export default function MathForm () {

    function findMedian(values){
        if(values.length ===0) throw new Error("No inputs");
        values.sort(function(a,b){
          return a-b;
        });
      
        var half = Math.floor(values.length / 2);
        
        if (values.length % 2)
          return values[half];
        
        return (values[half - 1] + values[half]) / 2.0;
      }

    const [input, setInput] = useState();

    const handleInputChange = e => setInput({
        ...input, [e.target.name]: e.target.value
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input["num1"] < 0 || input["num2"] < 0 || input["num3"] < 0){
            alert('Please enter positive values');
        } else {
            const avg = (input['num1'] + input['num2'] + input['num3']) / 3;
            const median = findMedian([input['num1'], input['num2'], input['num3']])
            alert(`Your average is: ${avg} and your median is: ${median}`)
        }
    };

    return (
        <div className="form">
            <h1>Math Form:</h1>
            <p>Please enter three numbers:</p>
            <form onSubmit={handleSubmit}> 
            <lable>Number 1:</lable>
            <input type="number" name="num1" onChange={handleInputChange}/>
            <br/>
            <lable>Number 2:</lable>
            <input type="number" name="num2" onChange={handleInputChange}/>
            <br/>
            <lable>Number 3:</lable>
            <input type="number" name="num3" onChange={handleInputChange}/>
            <br/>
            <input type="submit"/>
        </form>
        </div>
    )
};
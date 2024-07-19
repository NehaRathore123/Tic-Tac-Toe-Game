import React, { useState } from 'react'
import Square from './square'

const Game = () => {

    const [num, setNum]=useState([...Array(9).fill(null)]);
    const [cond,setCond] =useState(true)
    console.log(num);

    const checkWinner = ( ) =>{
        let winner =  [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],


        ]
        for(let i=0;i<winner.length;i++){
           let [a,b,c]= winner[i];  //array destructring array ka name ko custome name se check ker sakte hai 
           if(num[a] != null  && num[a] === num[b] && num[a] === num[c]){
            return num[a]
            
           }
        }
        return false
    }

    let result = checkWinner()

    const handleclick = (index) =>{
        if(num[index]!=null){
            return;
        }
        let copyArray = [...num];
       copyArray[index]= cond? "X" : "O";
       setNum(copyArray)
       console.log(copyArray);
       setCond(!cond)
    }

    const play = () =>{
        setNum([...Array(9).fill(null)])
    }
  return (
    <div className='container'>
        <h1 className='head'>Tic Tac Toe</h1>
        <h1 className='head'>{cond? "X" : "O"} : Your Turn</h1>
        {
            result ? <div className='win'> <h1> {result} : You winner</h1> <button onClick={play}>Play Again </button> </div>: (
                <>
  <div className='row' >
      <Square onClick={()=>handleclick(0)} value={num[0]}    />
      <Square onClick={()=>handleclick(1)} value={num[1]}/>
      <Square onClick={()=>handleclick(2)} value={num[2]}/>

      </div>
     <div className='row'>
      <Square onClick={()=>handleclick(3)} value={num[3]}/>
      <Square onClick={()=>handleclick(4)} value={num[4]}/>
      <Square onClick={()=>handleclick(5)} value={num[5]}/>
     </div>
     <div className='row'>
      <Square onClick={()=>handleclick(6)} value={num[6]}/>
      <Square onClick={()=>handleclick(7)} value={num[7]}/>
      <Square onClick={()=>handleclick(8)} value={num[8]}/>
     </div> 
                </>
            )
        }
  

    </div>
  )
}

export default Game
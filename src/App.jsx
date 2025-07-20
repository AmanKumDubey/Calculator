import { useEffect, useState } from "react"
import './App.css'
function App() {

  const[input,setInput]=useState("");

  // for write the name
  useEffect(()=>{
    setInput("Aman Kumar Dubey");
    const timer=setTimeout(()=>{
      setInput("");
    },1000)
    return ()=>clearTimeout(timer);
  },[])
  // for dispaly
  function Display(value){
    setInput(input+value);
  }
  // for clear on the screen
  function Clear(){
    setInput("");
  }
  // for final calculation 
  function Calculation(){
    let Answer=eval(input);
    setInput(Answer);
  }
  // for toggleSign
  function toggleSign(){
    try{
      const result=eval(input);
      const toggled=-result;
      setInput(toggled.toString());
    } catch(error){
      console.error(error);
      setInput("Error");
    }
  }

  return (
    
    <>
      <div className="flex justify-center items-center min-h-screen">
        <form className="h-[490px] w-[300px] rounded-xl p-5 bg-black">
          <input type="text" readOnly value={input} className='pr-2 text-end text-white font-semibold text-xl h-[45px] w-full bg-[#505050] focus:outline-none  rounded-xl'  />
          <div className="text-white font-semibold grid grid-cols-4 grid-rows-5 text-3xl gap-y-2 my-3 items-center justify-center">
            <span className='h-[65px] w-[60px] rounded-full text-black bg-[#2eda57] flex justify-center items-center cursor-pointer ' onClick={Clear}>C</span>
            <span className='h-[65px] w-[60px] rounded-full text-black bg-[#D4D4D4] flex justify-center items-center cursor-pointer ' onClick={toggleSign}>+/-</span>
            <span className='h-[65px] w-[60px] rounded-full text-black bg-[#D4D4D4] flex justify-center items-center  cursor-pointer' onClick={() => Display("%")}>%</span>
            <span  className='h-[65px] w-[60px] rounded-full bg-[#FF9500] flex justify-center items-center cursor-pointer ' onClick={() => Display("/")}>÷</span>
            <span className='h-[65px] w-[60px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer' onClick={() => Display("7")}>7</span>
            <span className='h-[65px] w-[60px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer' onClick={() => Display("8")}>8</span>
            <span className='h-[65px] w-[60px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer' onClick={() => Display("9")}>9</span>
            <span className='h-[65px] w-[60px] rounded-full bg-[#FF9500] flex justify-center items-center  cursor-pointer' onClick={() => Display("*")}>×</span>
            <span className='h-[65px] w-[60px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer' onClick={() => Display("4")}>4</span>
            <span className='h-[65px] w-[60px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer' onClick={() => Display("5")}>5</span>
            <span className='h-[65px] w-[60px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer' onClick={() => Display("6")}>6</span>
            <span className='h-[65px] w-[60px] rounded-full bg-[#FF9500] flex justify-center items-center  cursor-pointer' onClick={() => Display("-")}>-</span>
            <span className='h-[65px] w-[60px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer' onClick={() => Display("1")}>1</span>
            <span className='h-[65px] w-[60px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer' onClick={() => Display("2")}>2</span>
            <span className='h-[65px] w-[60px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer' onClick={() => Display("3")}>3</span>
            <span className='h-[65px] w-[60px] rounded-full bg-[#FF9500] flex justify-center items-center  cursor-pointer' onClick={() => Display("+")}>+</span>
            <span className='h-[65px]  col-span-2 rounded-full bg-[#1C1C1C] flex justify-start items-center pl-2 cursor-pointer' onClick={() => Display("0")}>0</span>
            <span className='h-[65px] w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer' onClick={() => Display(".")}>.</span>
            <span className='h-[65px] w-[70px] rounded-full bg-[#FF9500] flex justify-center items-center  cursor-pointer' onClick={Calculation}>=</span>
          
          </div>
        </form>
      </div>
    </>
  )
}

export default App
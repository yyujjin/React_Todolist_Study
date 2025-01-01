import "./App.css";
import { useState } from "react";
import H2 from "./components/H2";
import MyButton from "./components/MyButton";
import Buttons from "./components/Buttons";

function App() {
  //let count = 0;
  const hello = () => {
    alert("My name is yujin.");
  };
  const display = () => {
    alert(`현재 count는 ${count}입니당`);
  };
  //count변수 setcount 함수
  const [count, setCount] = useState(0);
  console.log("카운트 : ", count);
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>Counter App</h1>
      <div>
        <H2 count={count}></H2>
        <MyButton name="유진"></MyButton>
        <MyButton name="수현"></MyButton>
        <MyButton name="정숙"></MyButton>
        <div>
          {/* <PlusButton countUp={countUp}></PlusButton>
          <button onClick={countDown}>-</button> */}

          <Buttons name="+" id="countUp" adjustButton={countUp}></Buttons>
          <Buttons name="-" id="countDown" adjustButton={countDown}></Buttons>
        </div>
      </div>
    </>
  );
}

//버튼 컴포넌트를 만들고 플러스와 마이너트 버튼을 버튼 컴포넌트로 교체
//함수도 그냥 props로 보내면됨

export default App;

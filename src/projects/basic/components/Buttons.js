function Buttons({ name, id, adjustButton }) {
  // const adjustButton = () => {
  //   if (id === "countUp") {
  //     console.log("지금찍힌 id", id);
  //     countUp();
  //   } else {
  //     console.log("지금찍힌 id", id);
  //     countDown();
  //   }
  // };

  return (
    <button style={{ color: "blue", fontSize: "20px" }} onClick={adjustButton}>
      {name}
    </button>
  );
}

export default Buttons;

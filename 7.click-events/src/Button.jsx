function Button() {
  const handleClick = (e) => (e.target.textContent = "ouch");

  //   let count = 0;
  //   const handleClick = (name) => {
  //     if (count < 3) {
  //       count++;
  //       console.log(`${name} you clicked me for ${count} time/s`);
  //     } else {
  //       console.log(`${name} stop clicking me `);
  //     }
  //   };

  //   const handleClick2 = (name) => console.log(`${name} please stop clicking me`);

  return <button onClick={(e) => handleClick(e)}>Click me </button>;
}
export default Button;

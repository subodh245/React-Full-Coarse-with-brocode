import Student from "./Student";
function App() {
  return (
    <>
      <Student name="subodh" age={30} isStudent={true} />
      <Student name="sumedh" age={20} isStudent={false} />
      <Student name="sujal" age={50} isStudent={false} />
      <Student name="smit" age={54} isStudent={false} />
    </>
  );
}

export default App;

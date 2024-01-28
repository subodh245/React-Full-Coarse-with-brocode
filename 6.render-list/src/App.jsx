import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 40 },
  ];

  const vegitable = [
    { id: 6, name: "baigan", calories: 95 },
    { id: 7, name: "cauli flower", calories: 45 },
    { id: 8, name: "ladies finger", calories: 105 },
    { id: 9, name: "gobi", calories: 159 },
    { id: 0, name: "brinjal", calories: 40 },
  ];

  return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegitable.length > 0 ? (
        <List items={vegitable} category="vegitable" />
      ) : null}
    </>
  );
}

export default App;

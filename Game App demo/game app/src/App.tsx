//import ListGroup from "./components/ListGroup";
/*
function App() {
  let items = ["New york", "San Francisco", "London", "Tokyo", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
 );
}
*/

import Alert from "./components/alert";
function App() {
  return (
    <div>
      <Alert>
        Hello <span> world</span>
      </Alert>
    </div>
  );
}

export default App;

import TopBar from "./components/top-bar";
import Destination from "./components/destination-card";
import destinations from "./components/destination-cards_data"

function App() {

  const destinationMap = destinations.map(function(item){
    return(
      <Destination 
        id={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="app">
      <TopBar />
      <div className="main--content">
        {destinationMap}
      </div>
    </div>
  );
}

export default App;

import Jello from "./components/Hello";



function App() {
  const seatNumbers = [1,4,7];
  
return (

  <div className="App">

<jello
  message = "Hi There"
  name = "Tiny" 
  emoji = "🐱‍👤" 
  seatNumbers = {seatNumbers}/>
</div>
);
}

export default App;


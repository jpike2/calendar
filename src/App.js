import dayjs from "dayjs";
import "./App.css";
import Calendar from "./Calendar";

function App() {
  const dateString = "03/10/22";
  return (
    <div className="App">
      <Calendar dateString={dateString} />
    </div>
  );
}

export default App;

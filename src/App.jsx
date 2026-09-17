import "./App.css"
import { useEffect, useState } from "react";
import Button from "./component/Button";
import Dailyquote from "./component/Dailyquote";

function App() {
  const [quote, setQuote] = useState({});

 async function getQuote() {
  try {
    const res = await fetch("https://dummyjson.com/quotes/random");

    const data = await res.json();

    setQuote(data);
  } catch (error) {
    
  }
}

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      <Dailyquote quote={quote} />
      <Button getQuote={getQuote} />
    </div>
  );
}

export default App;




import { useEffect, useState } from "react";
import Button from "./component/Button";
import Dailyquote from "./component/Dailyquote";

function App() {
  const [quote, setQuote] = useState({});

  async function getQuote() {
    const res = await fetch("https://zenquotes.io/api/random");
    const data = await res.json();

    setQuote(data[0]);
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      <Dailyquote Dailyquote={quote} />
      <Button getQuote={getQuote} />
    </div>
  );
}

export default App;




import { useEffect, useState } from "react";
import Button from "./component/Button";
import Dailyquote from "./component/Dailyquote";


function App() {
  const [quotes, setQuotes] = useState({});
  const [loading, setLoading] = useState(true);

  const getQuote = async () => {
    setLoading(true);

    const res = await fetch("https://zenquotes.io/api/random");
    const data = await res.json();

    setQuotes(data[0]);
    setLoading(false);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      <Dailyquote quotes={quotes} />

      <Loading loading={loading} />

      <Button setButton={getQuote} />
    </div>
  );
}

export default App;


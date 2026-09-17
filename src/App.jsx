

import { useEffect, useState } from "react";
import Button from "./component/Button";
import Dailyquote from "./component/Dailyquote";

function App() {
  const[quote, setQuote]=useState([])
  useEffect(()=>{


  }, [])
  return(
    <div>
      <Dailyquote Dailyquote={quote}/>
    <Button getQuote={getQuote}/>
    </div>
  )
}
export default App;


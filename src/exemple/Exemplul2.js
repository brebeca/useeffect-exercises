import "./style.css";
import { useState, useEffect } from "react";

// "https://type.fit/api/quotes"
// GET POST PUT DELETE

function Example2() {
  const [quotes, setQuotes] = useState([]);
  const [loadQuotes, setLoadQuotes] = useState(false);

  useEffect(() => {
    if (loadQuotes) {
      fetch("https://type.fit/api/quotes")
        .then((response) => response.json())
        .then((response2) => setQuotes(response2));
    }
  }, [loadQuotes]);

  return (
    <main>
      <h1>Exemplul 2</h1>

      <button onClick={() => setLoadQuotes(true)}>Load Quotes</button>

      {quotes.map((quote) => (
        <section>
          <h3>
            <span>“</span>
            {quote?.text}
          </h3>
          <i>- {quote?.author}</i>
        </section>
      ))}
    </main>
  );
}

export default Example2;

import "./style.css";
import { useState, useEffect } from "react";

// "https://type.fit/api/quotes"

function Example2() {
  const [quotes, setQuotes] = useState([]);

  return (
    <main>
      <h1>Exemplul 2</h1>

      <button>Load Quotes</button>

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

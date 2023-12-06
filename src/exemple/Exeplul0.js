import { useEffect, useState } from "react";
import "./style.css";

// O componenta se rerandeaza (se reexecuta codul din componenta) de cate ori i se schimba state-ul (ex: useState) sau props-urile
function Example0() {
  const [count, setCount] = useState(0); // STATE: count

  return (
    <div>
      <h1>Exemplul 0</h1>
      <button onClick={() => setCount(count + 1)}>
        Buton apasat de <strong>{count}</strong> ori
      </button>
    </div>
  );
}

export default Example0;

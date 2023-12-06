import { useEffect, useState } from "react";

// O componenta se rerandeaza (se reexecuta codul din componenta) de cate ori i se schimba state-ul (ex: useState) sau props-urile
// useEffect: "efect secundar" in functie de array-ul de dependente

// sa intelegem randarile

//console.log('cu array') , console.log('fara array')

// doua butoane => doua useEffects diferite cu dependintele pe butoane + fara array de dependinte

function Example1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Exemplul 1</h1>
      <button onClick={() => setCount(count + 1)}>
        Buton apasat de {count} ori
      </button>
    </div>
  );
}

export default Example1;

import "./css/Style.css";
import { useEffect, useState } from "react";

export default function Empresa() {
  const [contador, setContador] = useState(0);
  const [count, setCount] = useState(0);

  //criando o hook useEffect
  useEffect(() => {
    setTimeout(() => {
      setContador((contador) => contador + 1);
    }, 1000);
  });

  useEffect(()=>{
    document.title = `Clicou ${count}`
  },[count]);

  return (
    <div className="Empresa">
      <h1>Empresa</h1>

      <h1>Inicio Contador {contador}</h1>

    <h1>Cliques: {count}</h1>
      <button onClick={()=> setCount(count + 1)}>Clique</button>
    </div>
  );
}

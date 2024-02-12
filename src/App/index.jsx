import { TodoProvider } from "../context/TodoContext.jsx";
import { AppUI } from "./AppUI.jsx";
import { useEffect, useState } from "react";

function App() {
  //aujstar pantalla
  const [appHeight, setAppHeight] = useState(0);

  useEffect(() => {
    const adjustHeight = () => setAppHeight(window.innerHeight);
    adjustHeight();
    window.addEventListener("resize", adjustHeight);
    return () => window.removeEventListener("resize", adjustHeight);
  }, [appHeight]);

  return (
    <TodoProvider>
      <AppUI appHeight={appHeight} />
    </TodoProvider>
  );
}

export default App;

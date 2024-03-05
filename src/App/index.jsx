import { TodoProvider } from "../context/TodoContext.jsx";
import { AppUI } from "./AppUI.jsx";
import { useEffect, useState } from "react";

function App() {
  // State to track and adjust the app's height
  const [appHeight, setAppHeight] = useState(0);

  // Effect to adjust the app's height on window resize
  useEffect(() => {
    // Function to adjust the app's height
    const adjustHeight = () => setAppHeight(window.innerHeight);

    // Initial adjustment
    adjustHeight();

    // Event listener for window resize
    window.addEventListener("resize", adjustHeight);

    // Cleanup: Remove event listener on component unmount
    return () => window.removeEventListener("resize", adjustHeight);
  }, [appHeight]);

  // Render the TodoProvider with AppUI
  return (
    <TodoProvider>
      <AppUI appHeight={appHeight} />
    </TodoProvider>
  );
}

export default App;

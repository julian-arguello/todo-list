import { useState, useEffect } from "react";
// Custom hook
function useLocalStorage(itemName, initianValue) {
  const [item, setItem] = useState(initianValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      let localStorageItem = localStorage.getItem(itemName);
      setItem(localStorageItem ? JSON.parse(localStorageItem) : initianValue);
      setTimeout(() => {
      setLoading(false);
      }, 500);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, [itemName, initianValue, setItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

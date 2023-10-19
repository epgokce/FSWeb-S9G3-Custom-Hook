import { useState } from "react";
const useLocalStorage = (key, initialValue) => {
  const getLs = () => {
    return JSON.parse(localStorage.getItem(key));
  };
  const [value, setValue] = useState(() => {
    const lsValue = getLs() !== null ? getLs() : initialValue;
    localStorage.setItem(key, JSON.stringify(lsValue));
    return lsValue;
  });
  const setLs = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  return [value, setLs];
};
export default useLocalStorage;
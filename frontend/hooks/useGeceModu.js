import useLocalStorage from "./useLocalStorage";

const useGeceModu = (initialValue) => {
  const [geceModu, setGeceModu] = useLocalStorage("geceModu", initialValue);

  const toggleMode = (e) => {
    e.preventDefault();
    setGeceModu(!geceModu);
  };

  return [geceModu, toggleMode];
};
export default useGeceModu;
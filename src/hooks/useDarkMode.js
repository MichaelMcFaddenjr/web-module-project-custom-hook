import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [ storedValue, setMode ] = useLocalStorage("Dark Mode", false);

  return [storedValue, setMode];
}

export default useDarkMode;
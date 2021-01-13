import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [mode, setMode] = useLocalStorage('mode');
    return [mode, setMode];
}

export default useDarkMode;
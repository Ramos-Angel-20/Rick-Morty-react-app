import { createContext, useState, useEffect } from 'react';

import { ApplicationTheme, ApplicationThemeContextProps } from '../interfaces-types';

export const themeContext = createContext({
    theme: '',
    toggleThemeHandler: () => { }
});


const ThemeContextProvider = (props: any) => {
    
    const [theme, setTheme] = useState<string>('');

    const getInitialTheme = () => {
        const fetchedTheme = localStorage.getItem('application-theme') || 'light-mode';

        if (!fetchedTheme) {
            return 'light-mode';
        }
        
        return fetchedTheme;
    }

    useEffect(() => {
        setTheme(getInitialTheme());
    }, []);

    const toggleThemeHandler = () => {
        if (theme === 'light-mode') {
            setTheme('dark-mode');
        } else {
            setTheme('light-mode');
        }
    }

    const context = {
        theme,
        toggleThemeHandler
    }

    return (
        <themeContext.Provider value={context}>
            {props.children}
        </themeContext.Provider>
    );
}

export default ThemeContextProvider;
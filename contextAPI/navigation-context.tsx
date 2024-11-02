import React, { createContext, useContext, useEffect, useState } from 'react';
let NavigationContext: any = null;

function NavigationProvider({ children }: any) {
    let ref = React.useRef<any>(null);
    const [myRef, setRef] = useState(ref);
    NavigationContext = createContext({
        ref: myRef,
        setRef
        //context: any
        //setThemeF: (isDark: boolean) => { },
    });
    //const [themeValue, setValues] = useState(theme_);

    

    return (
        <NavigationContext.Provider
            value={{
                ref,
                setRef
                //context : NavigationContext
            }}>
            {children}
        </NavigationContext.Provider>
    );
}
const useContextOwn = () => NavigationContext;

export { NavigationProvider, useContextOwn };
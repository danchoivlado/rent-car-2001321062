import { createContext, useState, useContext } from "react";

interface ThemeContextInterface {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

const themeContextProvider = createContext<ThemeContextInterface>({
  darkTheme: false,
  setDarkTheme: undefined,
});

interface Props {
  children?: React.ReactNode;
}

const ThemeContext = ({ children }: Props) => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <themeContextProvider.Provider
      value={{ darkTheme: darkTheme, setDarkTheme: setDarkTheme }}
    >
      {children}
    </themeContextProvider.Provider>
  );
};

export const useThemeContext = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>> | undefined
] => {
  const { darkTheme, setDarkTheme } = useContext(themeContextProvider);
  return [darkTheme, setDarkTheme];
};

export default ThemeContext;

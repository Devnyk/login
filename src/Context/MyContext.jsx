import { createContext, useState } from "react";

export const MyStore = createContext();

export const MyContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const userStoredData = localStorage.getItem("userData");
    try {
      return userStoredData ? JSON.parse(userStoredData) : [];
    } catch (error) {
      console.error("Error parsing userData from localStorage:", error);
      return [];
    }
  });

  const setUserDataAndStore = (data) => {
    setUserData(data);
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const [currentUser, setCurrentUser] = useState(() => {
    const storedCurrentUser = localStorage.getItem("currentUser");
    try {
      return storedCurrentUser ? JSON.parse(storedCurrentUser) : null;
    } catch (error) {
      console.error("Error parsing currentUser from localStorage:", error);
      return null;
    }
  });

  const setCurrentUserAndStore = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };
  const [toggle, settoggle] = useState(true);

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  });
  const setThemeAndStore = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <MyStore.Provider
      value={{
        userData,
        setUserData: setUserDataAndStore,
        currentUser,
        setCurrentUser: setCurrentUserAndStore,
        toggle,
        settoggle,
        theme,
        setTheme: setThemeAndStore,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};

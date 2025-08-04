import { createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const MyContextProvider = ({ children }) => {
  // Store all registered users
  const [userData, setUserData] = useState(() => {
    try {
      const userStoredData = localStorage.getItem("userData");
      return userStoredData ? JSON.parse(userStoredData) : [];
    } catch (error) {
      console.error("Error parsing userData:", error);
      return [];
    }
  });

  const setUserDataAndStore = (data) => {
    setUserData(data);
    localStorage.setItem("userData", JSON.stringify(data));
  };

  // Store current logged-in user
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const storedCurrentUser = localStorage.getItem("currentUser");
      return storedCurrentUser ? JSON.parse(storedCurrentUser) : null;
    } catch (error) {
      console.error("Error parsing currentUser:", error);
      return null;
    }
  });

  const setCurrentUserAndStore = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  // Toggle between Login and Register
  const [toggle, settoggle] = useState(true);

  // Theme (light/dark)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const setThemeAndStore = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply dark/light class to <html> for Tailwind v4
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

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

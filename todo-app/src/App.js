// src/App.js
import React, { useState, useEffect, useMemo } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import "./App.css";

const App = () => {
  const backgroundImages = useMemo(
    () => [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1501594907358-b77f1efbff7f",
      "https://images.unsplash.com/photo-1494790108373-4b9436492c3a",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      "https://images.unsplash.com/photo-1479625041941-78e1c220a1e2",
    ],
    []
  );

  const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0]);

  useEffect(() => {
    const changeBackground = () => {
      const randomImage =
        backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
      setBackgroundImage(randomImage);
    };

    const intervalId = setInterval(changeBackground, 10000); // Change every 10 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [backgroundImages]);

  return (
    <Provider store={store}>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          <h1>ToDo Application</h1>
          <AddTask />
          <ListTask />
        </div>
      </div>
    </Provider>
  );
};

export default App;

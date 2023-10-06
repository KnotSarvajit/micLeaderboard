import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const intialState = {
    name: "",
    image: "",
    services: [],
  };
  
  const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState);
  
    const updateHomePage = () => {
      return dispatch({
        type: "HOME_UPDATE",
        payload: {
          message:"Welcome To",
          name: "MIC Leaderboard",
          image: "./images/hero.svg",
          words:"This is MIC's very own LeaderBoard. A platform for performance monitoring. It provides real-time updates and analytics, simplifying leaderboard management. Say goodbye to manual tracking and welcome efficiency with MIC Leaderboard.",
        },
      });
    };
  
    const updateAboutPage = () => {
      return dispatch({
        type: "ABOUT_UPDATE",
        payload: {
          message:"Our Club",
          name: "Microsoft Innovations Club",
          image: "./images/about1.svg",
          words:"One of India's top engineering schools, VIT equips students with the best exposure to a top-notch education, internship prospects, lucrative job placement opportunities, and infrastructure amenities and being one of the top-most clubs in VIT, MIC stands tall in our campus!",
        },
      });
    };
    return (
        <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
          {children}
        </AppContext.Provider>
      );
};
    
    // gloabal custom hook
    const useGlobalContext = () => {
      return useContext(AppContext);
    };
    
export { AppProvider, useGlobalContext };
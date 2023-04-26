import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "./Database";
const context = createContext();
const Contexts = ({ children }) => {
  const [data, setData] = useState([]);
  const [like, setLike] = useState([]);
  const [later, setLater] = useState([]);
  const fetchingData = async () => {
    const { data } = await fakeFetch("https://example.com/api/videos");
    setData(data.videos);
  };
  //Add to like
  const addToLike = (curElem) => {
    if (!like.includes(curElem)) {
      setLike([...like, curElem]);
    }
  };
  // Add to watch Later
  const addToWatchLater = (curElem) => {
    if (!later.includes(curElem)) {
      setLater([...like, curElem]);
    }
  };
  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <context.Provider value={{ data, addToLike, like, addToWatchLater, later }}>
      {children}
    </context.Provider>
  );
};
//global Hook
const useGlobalHook = () => {
  return useContext(context);
};
export default Contexts;
export { useGlobalHook };

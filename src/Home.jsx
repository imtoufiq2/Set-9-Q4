import { useGlobalHook } from "./Contexts";
import { NavLink } from "react-router-dom";
const Home = () => {
  const { data } = useGlobalHook();
  console.log(data);
  return (
    <div style={{ textAlign: "center", marginTop: "30vh" }}>
      <h1>Welcome to Video Library</h1>
      <h2>
        To browse all videos , click the below button or Go to the video page
      </h2>
      <NavLink to="/video">
        <button>Explore Videos</button>
      </NavLink>
    </div>
  );
};

export default Home;

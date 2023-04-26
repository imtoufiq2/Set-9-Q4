import { useGlobalHook } from "./Contexts";
import { NavLink } from "react-router-dom";
const Video = () => {
  const { data, addToLike, addToWatchLater, like } = useGlobalHook();
  const isLiked = (book) => {
    return like.includes(book);
  };
  return (
    <div className="container">
      <h2>All Videos</h2>
      <div className="grid">
        {data.map((cur) => {
          return (
            <div
              className="card"
              style={{
                border: "2px solid red",
              }}
              key={cur.id}
            >
              <img src={cur.thumbnail} height={"200px"} alt={cur.id} />
              <h2>{cur.title}</h2>
              <NavLink to={`/singleproduct/${cur.id}`}>
                <button>Watch here</button>
              </NavLink>
              <br /> <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {/* <button onClick={() => addToLike(cur)}>Like</button> */}

                {isLiked(cur) ? (
                  <button>Liked</button>
                ) : (
                  <button onClick={() => addToLike(cur)}>Like</button>
                )}

                <button onClick={() => addToWatchLater(cur)}>
                  Add to Watch Later
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Video;

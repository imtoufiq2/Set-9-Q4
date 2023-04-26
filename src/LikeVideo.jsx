import { useGlobalHook } from "./Contexts";

const LikeVideo = () => {
  const { like } = useGlobalHook();
  return (
    <div className="container">
      <h2>Liked Videos</h2>
      <div className="grid">
        {like.map((cur) => {
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
              <br /> <br />
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LikeVideo;

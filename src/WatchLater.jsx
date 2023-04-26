import { useGlobalHook } from "./Contexts";

const WatchLater = () => {
  const { later } = useGlobalHook();
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h2>WatchLater Videos</h2>
      <div className="grid">
        {later.map((cur) => {
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

export default WatchLater;

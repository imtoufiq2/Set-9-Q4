import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Header from "./Header";
import LikeVideo from "./LikeVideo";
import WatchLater from "./WatchLater";
import Error from "./Error";
import SingleProduct from "./SingleProduct";
import Video from "./Video";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/likevideo" element={<LikeVideo />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/video" element={<Video />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

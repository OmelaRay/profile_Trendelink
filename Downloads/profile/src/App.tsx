import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame21 from "./pages/Frame21";
import Frame31 from "./pages/Frame31";
import Frame11 from "./pages/Frame11";
import Frame41 from "./pages/Frame41";
import Frame5 from "./pages/Frame5";
import Frame3 from "./pages/Frame3";
import Frame1 from "./pages/Frame1";
import Frame from "./pages/Frame";
import Frame4 from "./pages/Frame4";
import Frame2 from "./pages/Frame2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/1":
        title = "";
        metaDescription = "";
        break;
      case "/3":
        title = "";
        metaDescription = "";
        break;
      case "/4":
        title = "";
        metaDescription = "";
        break;
      case "/5":
        title = "";
        metaDescription = "";
        break;
      case "/6":
        title = "";
        metaDescription = "";
        break;
      case "/7":
        title = "";
        metaDescription = "";
        break;
      case "/8":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame21 />} />
      <Route path="/" element={<Frame31 />} />
      <Route path="/" element={<Frame11 />} />
      <Route path="/1" element={<Frame41 />} />
      <Route path="/3" element={<Frame5 />} />
      <Route path="/4" element={<Frame3 />} />
      <Route path="/5" element={<Frame1 />} />
      <Route path="/6" element={<Frame />} />
      <Route path="/7" element={<Frame4 />} />
      <Route path="/8" element={<Frame2 />} />
    </Routes>
  );
}
export default App;

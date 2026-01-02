import { Routes, Route } from "react-router-dom";
// import { GridBackground } from "./components/GridBackground";
// import PillNav from "./components/PillNav";
import Home from "./pages/Home";
// import Blog from "./pages/Blog";

function App() {
  // const location = useLocation();

  return (
    <div className="">
      {/* 네비게이션 - 상단 고정 */}
      {/* <div className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full flex justify-center h-16 items-center">
          <PillNav
            logo={""}
            logoAlt="Company Logo"
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Github", href: "https://github.com" },
              { label: "Contact", href: "/contact" },
            ]}
            activeHref={location.pathname}
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
          />
        </div>
      </div> */}

      {/* 라우트 */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </div>
  );
}

export default App;

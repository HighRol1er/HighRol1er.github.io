import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import WritePage from "./pages/WritePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "posts",
        element: <PostPage />,
      },
      {
        path: "posts/write",
        element: <WritePage />,
      },
    ],
  },
]);

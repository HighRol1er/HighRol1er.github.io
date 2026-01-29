import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import MainPage from "@/pages/MainPage";
import PostPage from "@/pages/PostPage";
import PostDetailPage from "@/pages/PostDetailPage";
import CherryPickPage from "@/pages/CherryPickPage";

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
        path: "posts/detail/:fileName",
        element: <PostDetailPage />,
      },
      {
        path: "cherry-pick",
        element: <CherryPickPage />,
      },
    ],
  },
]);

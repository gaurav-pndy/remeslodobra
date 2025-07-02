import React, { useEffect, useRef, useState } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import FullBlog from "./pages/FullBlog";
import BlogCategory from "./pages/BlogCategory";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/category/:categoryId",
          element: <BlogCategory />,
        },
        {
          path: "/category/:categoryId/blog/:blogId",
          element: <FullBlog />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

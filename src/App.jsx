import React, { useEffect, useRef, useState } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import FullBlog from "./pages/FullBlog";

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
          path: "/blog/:blogId",
          element: <FullBlog />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

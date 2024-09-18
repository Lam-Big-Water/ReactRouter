import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Profiles from "./pages/Profiles";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/profiles",
        element: <Profiles />,
        loader: async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const posts = await response.json();
            return {
                posts,
            };
        },
      },
      {
        path: "/profiles/:id",
        element: <Profile />,
        loader: async ({params}) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
            const post = await response.json();
            return {
                id: params.id,
                post,
            }
        },
        action: async ({request}) => {
            const form = await request.formData();

            return {
                id: 1000,
                body: form.get("comment"),
            };
        }
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import {createBrowserRouter,  RouterProvider} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Vans, {loader as vansLoader} from "./pages/Vans/Vans";
import Details, {loader as vansDetailLoader} from "./pages/Vans/Details";

import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import HostVans, {loader as HostVansLoader} from "./pages/Host/HostVans";
import HostVansDetail, {loader as HostVansDetailLoader} from "./pages/Host/HostVansDetail";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";

import Layout from "./components/Layout";
import HostVansInfo from "./pages/Host/HostVansInfo";
import HostVansPrice from "./pages/Host/HostVansPrice";
import HostVansPhoto from "./pages/Host/HostVansPhoto";

import Login from "./pages/Login";
import { requireAuth } from "./utils";

import Error from "./components/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "vans",
        element: <Vans />,
        errorElement: <Error />,
        loader: vansLoader,
      },
      {
        path: "vans/:id",
        element: <Details />,
        loader: vansDetailLoader
      },

      {
        path: "host",
        element: <HostLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: async () => await requireAuth()
          },
          {
            path: "income",
            element: <Income />,
            loader: async () => await requireAuth()

          },
          {
            path: "reviews",
            element: <Reviews />,
            loader: async () => await requireAuth()

          },
          {
            path: "vans",
            element: <HostVans />,
            loader: HostVansLoader,
          },
          {
            path: "vans/:id",
            element: <HostVansDetail />,
            loader: HostVansDetailLoader,
            children: [
              {
                index: true,
                element: <HostVansInfo />,
                loader: async () => await requireAuth()

              },
              {
                path: "pricing",
                element: <HostVansPrice />,
                loader: async () => await requireAuth()

              },
              {
                path: "photos",
                element: <HostVansPhoto />,
                loader: async () => await requireAuth()

              }
            ]
          },
        ]
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ]
  }
])



const App = () => {
  return (
    <RouterProvider router={router} />

    // <div>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="vans" element={<Vans />} />
    //       <Route path="vans/:id" element={<Details />} />

    //       <Route path="host" element={<HostLayout />}>
    //         <Route index element={<Dashboard />} />
    //         <Route path="income" element={<Income />} />
    //         <Route path="reviews" element={<Reviews />} />
    //         <Route path="vans" element={<HostVans />} />
    //         <Route path="vans/:id" element={<HostVansDetail />}>
    //           <Route index element={<HostVansInfo />}/>
    //           <Route path="pricing" element={<HostVansPrice />}/>
    //           <Route path="photos" element={<HostVansPhoto />}/>
    //         </Route>
    //       </Route>
    //       <Route path="*" element={<NotFound />} />
    //     </Route>
    //   </Routes>
    // </div>
  );
};

export default App;

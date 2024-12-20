import { Routes, Route, createBrowserRouter,  RouterProvider} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Vans, {loader as vansLoader} from "./pages/Vans/Vans";
import Details from "./pages/Vans/Details";

import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import HostVans from "./pages/Host/HostVans";
import HostVansDetail from "./pages/Host/HostVansDetail";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";

import Layout from "./components/Layout";
import HostVansInfo from "./pages/Host/HostVansInfo";
import HostVansPrice from "./pages/Host/HostVansPrice";
import HostVansPhoto from "./pages/Host/HostVansPhoto";

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
        path: "vans",
        element: <Vans />,
        errorElement: <Error />,
        loader: vansLoader,
      },
      {
        path: "vans/:id",
        element: <Details />,
      },

      {
        path: "host",
        element: <HostLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "income",
            element: <Income />,
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
          {
            path: "vans",
            element: <HostVans />,
          },
          {
            path: "vans/:id",
            element: <HostVansDetail />,
            children: [
              {
                index: true,
                element: <HostVansInfo />,
              },
              {
                path: "pricing",
                element: <HostVansPrice />,
              },
              {
                path: "photos",
                element: <HostVansPhoto />,
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

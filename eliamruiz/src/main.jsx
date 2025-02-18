import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About_page.jsx";
import Contact from "./pages/Contact_page.jsx";
import {
  Outlet,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
          path: '/about',
          element: <About/>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

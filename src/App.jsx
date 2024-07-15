import { useState } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./component/layout/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import ProductAllDetails from "./pages/ProductAllDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/ProductAllDetails/:id" element={<ProductAllDetails />} />
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

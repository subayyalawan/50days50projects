import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  useNavigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import ChoicePicker from "./pages/ChoicePicker";
import Home from "./pages/Home";

const App = () => {
  // const naviagte = useNavigate();


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="random-choice-picker" element={<ChoicePicker />} />
      </Route>
    )
  );
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;

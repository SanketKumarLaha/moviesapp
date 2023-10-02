import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Home from "./Home";

const App = () => {
  return <RouterProvider router={router} />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movieDetails/:id",
    element: <MovieDetails />,
  },
]);

export default App;

import { render, screen } from "@testing-library/react";
import MoviesList from "../components/MoviesList";
import { RouterProvider } from "react-router-dom";
import { router } from "../App";

const mockSearchedResults = [
  {
    id: "1",
    title: "Harry Potter",
    poster_path:
      "https://pbs.twimg.com/profile_images/1643588285032275968/QR34du3s_400x400.jpg",
  },
  {
    id: "2",
    title: "Oppenheimer",
    poster_path:
      "https://pbs.twimg.com/profile_images/1496208818065268747/CqjUOCbH_400x400.jpg",
  },
];

const MoviesListRouterProvider = ({ mockSearchedResults }) => {
  return (
    <RouterProvider router={router}>
      <MoviesList searchedResults={mockSearchedResults} />
    </RouterProvider>
  );
};

it("checking whether a header is present or not", async () => {
  render(<MoviesListRouterProvider searchedResults={mockSearchedResults} />);
  const heading = await screen.findByRole("heading");
  expect(heading).toBeInTheDocument();
});

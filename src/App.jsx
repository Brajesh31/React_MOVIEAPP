import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import MainLayout from "./layouts/MainLayout";
import SearchResults from "./pages/SearchResults";
import UserWatchList from "./pages/UserWatchList";
import Register from "./pages/Register";
import Login from "./pages/LoginState";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Movies", element: <Movies /> },
      { path: "/Movies/:id", element: <MovieDetails /> },
      { path: "search", element: <SearchResults /> },
      { path: "watchlist", element: <UserWatchList /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

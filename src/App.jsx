import { useState } from "react";
import React from "react";
import Banner from "./components/Banner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Landing";
import './App.css'

import Row from "./components/Row";
import { requestsPath } from "./utils/RequestPath";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: (
        <>
          <Navbar />
          <Banner />
          <Row
            title="NETFLIX ORIGINALS"
            fetchURL={requestsPath.fetchNetflixOriginals}
            isLarge={true}
          />
          <Row title="Trending Now" fetchURL={requestsPath.fetchTrending} />
          <Row title="Top Rated" fetchURL={requestsPath.fetchTopRated} />
          <Row
            title="Action Movies"
            fetchURL={requestsPath.fetchActionMovies}
          />
          <Row
            title="Comedy Movies"
            fetchURL={requestsPath.fetchComedyMovies}
          />
          <Row
            title="Horror Movies"
            fetchURL={requestsPath.fetchHorrorMovies}
          />
          <Row
            title="Romance Movies"
            fetchURL={requestsPath.fetchRomanceMovies}
          />
          <Row
            title="Documentaries"
            fetchURL={requestsPath.fetchDocumentaries}
          />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

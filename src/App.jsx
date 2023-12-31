import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Layout = lazy(() => import('Layout'));
const Home = lazy(() => import('pages/Home'));
const Movie = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

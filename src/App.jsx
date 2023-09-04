import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';

// import hooks
import PageLoader from './hooks/loaders/pageloader/PageLoader';
import SlowLoader from './hooks/loaders/slowloader/SlowLoader';

// import models
import Theme from './models/theme/Theme';

// import pages
import Layout from './layout/Layout';

const About = lazy(() => import('./components/about/About'))
const Library = lazy(() => import('./components/library/Library'))
const FilteredLibrary = lazy(() => import('./components/library/FilteredLibrary'))
const LibraryDetail = lazy(() => import('./components/library/LibraryDetails'))
const Home = lazy(() => import('./components/home/Home'))

function ScrollToTopOnPageChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return null;
}

function App() {
  const queryClient = new QueryClient();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleRoutes = () => {
    return (
      <Routes>
        <Route
          path='/' exact
          element={(
            <React.Suspense fallback={<SlowLoader />}>
              <Home />
            </React.Suspense>
          )}
        />

        <Route
          path="/library/:slug"
          element={(
            <React.Suspense fallback={<SlowLoader />}>
              <LibraryDetail />
            </React.Suspense>
          )}
        />

        <Route
          path="/library"
          element={(
            <React.Suspense fallback={<SlowLoader />}>
              <Library />
            </React.Suspense>
          )}
        />

        <Route
          path="/filtered-library"
          element={(
            <React.Suspense fallback={<SlowLoader />}>
              <FilteredLibrary />
            </React.Suspense>
          )}
        />

        <Route
          path="/about-me"
          element={(
            <React.Suspense fallback={<SlowLoader />}>
              <About />
            </React.Suspense>
          )}
        />
      </Routes>
    );
  };

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTopOnPageChange />
          {isLoading ? (
            <PageLoader />
          ) : (
            <Layout>
              <Theme />
              <Suspense fallback={<PageLoader />}>
                {handleRoutes()}
              </Suspense>
            </Layout>
          )}
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;

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
const Home = lazy(() => import('./components/home/Home'))

function App() {
  const queryClient = new QueryClient();
  const [isLoading, setIsLoading] = useState(true);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, [pathname]);

    return null;
  };

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
          index
          element={(
            <React.Suspense fallback={<SlowLoader />}>
              <Home />
            </React.Suspense>
          )} />
      </Routes>
    );
  };

  return (
    <>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            {isLoading ? (
              <PageLoader />
            ) : (
              <Layout>
                <Theme />
                <ScrollToTop />
                <Suspense fallback={<PageLoader />}>
                  {handleRoutes()}
                </Suspense>
              </Layout>
            )}
          </BrowserRouter>
        </QueryClientProvider>
      </HelmetProvider>
    </>
  )
}

export default App

import React, { useEffect, useState, useRef, lazy, Suspense, startTransition } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

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
  const contentRef = useRef(null);

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

  useEffect(() => {
    if (!isLoading) {
      contentRef.current.classList.add('fade-in');
    }
  }, [isLoading]);

  const handleRoutes = () => {
    startTransition(() => {
    });

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
              <div ref={contentRef} className="content-fade-in">
                <Layout>
                  <Theme />
                  <ScrollToTop />
                  <Suspense fallback={<PageLoader />}>
                    {handleRoutes()}
                  </Suspense>
                </Layout>
              </div>
            )}
          </BrowserRouter>
        </QueryClientProvider>
      </HelmetProvider>
    </>
  )
}

export default App

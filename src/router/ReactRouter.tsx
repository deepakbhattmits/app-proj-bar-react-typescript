/** @format */

import { FC, lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import LoadingSpinner from "../reusable/LoadingSpinner";
// import ErrorBoundary from '../reusable/ErrorBoundary';
const Header = lazy(() => import("../containers/Header"));
const Footer = lazy(() => import("../containers/Footer"));
const MainPage = lazy(() => import("../containers/MainPage"));
const FavoritePage = lazy(() => import("../containers/FavoritePage"));
const NotFound = lazy(() => import("../components/NotFound"));
// const ScrollToTop = lazy(() => import('../components/ScrollToTop'));

const ReactRouter: FC = (): JSX.Element => (
  <Suspense fallback={<LoadingSpinner />}>
    <HashRouter>
      {/* <ScrollToTop> */}
      <div className="main__wrapper">
        <header className="flex items-center sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm px-4">
          <Header />
        </header>

        <main className="main__wrapper--main">
          <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path="/home" element={<MainPage />} />

            <Route path="/favorite" element={<FavoritePage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="main__wrapper--footer sticky bottom-0 z-50 bg-white border-b border-gray-200">
          <Footer />
        </footer>
      </div>
      {/* </ScrollToTop> */}
    </HashRouter>
  </Suspense>
);
export default ReactRouter;

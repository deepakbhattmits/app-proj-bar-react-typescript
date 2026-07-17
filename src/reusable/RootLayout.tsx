import { FC, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
const LoadingSpinner = lazy(() => import("./LoadingSpinner"));
const Footer = lazy(() => import("../containers/Footer"));
const Header = lazy(() => import("../containers/Header"));

const RootLayout: FC = (): JSX.Element => (
  <Suspense fallback={<LoadingSpinner />}>
    <header>
      <Header />
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <Footer />
    </footer>
  </Suspense>
);

export default RootLayout;

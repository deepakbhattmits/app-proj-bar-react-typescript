import { FC, lazy, Suspense } from "react";
import { useRouteError } from "react-router-dom";
const LoadingSpinner = lazy(() => import("./LoadingSpinner"));
const Footer = lazy(() => import("../containers/Footer"));
const Header = lazy(() => import("../containers/Header"));

const ErrorPage: FC = (): JSX.Element => {
  const error: any = useRouteError();

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <header>
        <Header />
      </header>

      <main>
        <h1>An error occurred!</h1>
        <p>{error?.message}</p>
      </main>

      <footer>
        <Footer />
      </footer>
    </Suspense>
  );
};

export default ErrorPage;

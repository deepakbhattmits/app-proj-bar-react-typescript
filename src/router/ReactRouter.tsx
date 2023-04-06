/** @format */
import { FC, lazy, Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// const ErrorPage = lazy(() => import("../reusable/ErrorPage"));
const LoadingSpinner = lazy(() => import("../reusable/LoadingSpinner"));
const RootLayout = lazy(() => import("../reusable/RootLayout"));
const MainPage = lazy(() => import("../containers/MainPage"));
const FavoritePage = lazy(() => import("../containers/FavoritePage"));
const NotFound = lazy(() => import("../components/NotFound"));

// import LoadingSpinner from "../reusable/LoadingSpinner";
// import RootLayout from "../reusable/RootLayout";
// import MainPage from "../containers/MainPage";
// import FavoritePage from "../containers/FavoritePage";
// import NotFound from "../components/NotFound";

// const ScrollToTop = lazy(() => import('../components/ScrollToTop'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainPage />} />

      <Route path="/home" element={<MainPage />} />

      <Route path="/favorite" element={<FavoritePage />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
const ReactRouter: FC = (): JSX.Element => (
  <Suspense fallback={<LoadingSpinner />}>
    {/* <ScrollToTop> */}
    <RouterProvider router={router} />
    {/* </ScrollToTop> */}
  </Suspense>
);
export default ReactRouter;

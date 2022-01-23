/** @format */

import { FC,lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import LoadingSpinner from '../reusable/LoadingSpinner';
// import ErrorBoundary from '../reusable/ErrorBoundary';
const Header = lazy(() => import('../containers/Header'));
const Footer = lazy(() => import('../containers/Footer'));
const MainPage = lazy(() => import('../containers/MainPage'));
const FavoritePage = lazy(() => import('../containers/FavoritePage'));
const NotFound = lazy(() => import('../components/NotFound'));
const ScrollToTop = lazy(() => import('../components/ScrollToTop'));

const ReactRouter:FC = ():JSX.Element =>
		<Suspense fallback={<LoadingSpinner />}>
			<HashRouter>
				{/* <ScrollToTop> */}
					<header>
						<Header />
					</header>

					<article>
						<Routes>
							<Route  path='/' element={<MainPage />}/>
						
							<Route  path='/home' element={<MainPage />}/>
						
							<Route  path='/favorite' element={<FavoritePage />}/>
						
							<Route  path='*' element={<NotFound />}/>
						
						</Routes>
					</article>

					<footer>
						<Footer />
					</footer>
				{/* </ScrollToTop> */}
			</HashRouter>
		</Suspense>
export default ReactRouter;

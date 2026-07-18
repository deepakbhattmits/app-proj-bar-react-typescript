/** @format */
import NavigationComponent from '../components/NavigationComponent';
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Header = () => (
	<>
		<NavigationComponent />
		<ToastContainer autoClose={2000} />
	</>
);

export default Header;

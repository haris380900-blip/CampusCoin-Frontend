import { Link } from "react-router-dom";
const NotFoundPage = () => <section className="py-12 text-center"><p className="text-sm font-bold text-indigo-600">404</p><h1 className="mt-2 text-3xl font-bold">Page not found</h1><Link to="/" className="mt-5 inline-block font-semibold text-indigo-600">Return home</Link></section>;
export default NotFoundPage;

/** @format */
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <footer className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-slate-900 text-white shadow-lg">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
      <div className="text-sm font-semibold uppercase tracking-wide text-slate-100">
        Product Catalog
      </div>
      <div className="flex items-center gap-4">
        <NavLink className="text-sm uppercase text-slate-200 hover:text-white" to="/home">
          home
        </NavLink>
        <NavLink className="text-sm uppercase text-slate-200 hover:text-white" to="/favorite">
          favorite
        </NavLink>
      </div>
    </div>
  </footer>
);

export default Navigation;

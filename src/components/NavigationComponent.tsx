/** @format */

import { Star, BellDot, Store } from "lucide-react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

interface IProp {
  [props: string]: any;
}

interface RootState {
  [props: string]: any;
}

const Navigation: FC<IProp> = () => {
  const favorites = useSelector((state: RootState) => state.productData.favorites || {});
  const favoriteCount = Object.values(favorites).length;

  return (
    <nav className="w-full flex items-center justify-between ">

      <NavLink className="text-lg font-semibold uppercase tracking-wide text-slate-800" to="/">
        Product Catalog
      </NavLink>
      <div className="flex items-center gap-4">
        <NavLink className="flex items-center gap-y-2 text-sm font-medium uppercase text-slate-700 hover:text-blue-600" to="/home">
          <Store /><p>home</p>
        </NavLink>
        <NavLink className="flex items-center gap-y-2 text-sm font-medium uppercase text-slate-700 hover:text-blue-600 relative" to="/favorite">
          <Star /><p>favorite</p>
        </NavLink>
        <div className="inline-block origin-top hover:animate-shake" >
          <BellDot />
        </ div>
        <span className="absolute right-2 top-1 flex items-center justify-center rounded-full bg-blue-600 px-1.5 py-0.5 text-xs font-bold leading-none text-white ring-2 ring-white">
          {favoriteCount}
        </span>
      </div>
    </nav>
  );
};
export default Navigation;

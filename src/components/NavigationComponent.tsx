/** @format */

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
    <div className="ui secondary  menu">
      <div className="item">
        <NavLink className="ui header text-capitalize" to="/">
          Product Catalog
        </NavLink>
      </div>
      <div className="right menu">
        <NavLink className="item text-uppercase" to="/home">
          home
        </NavLink>
        <NavLink className="item text-uppercase" to="/favorite">
          favorite
          <span className="ui mini circular label" style={{ marginLeft: 6 }}>
            {favoriteCount}
          </span>
        </NavLink>
      </div>
    </div>
  );
};
export default Navigation;
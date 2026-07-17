/** @format */

import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface IProp {
  [prop: string]: any;
}

const Favorite: FC<IProp> = ({ fBeers, umarkFav }): JSX.Element => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  const handleRemove = (productId: any) => {
    umarkFav(productId);
  };

  const renderFav = () => {
    if (!!fBeers && Object.values(fBeers).length === 0) {
      return (
        <div className="loading">
          <h1 className="ui header">No favorite items</h1>
          <Link
            to="/home"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            <i className={`icon hand point left ${hover ? "" : "outline"}`} />
            Go Back
          </Link>
        </div>
      );
    }

    return Object.values(fBeers as any[])?.map(
      ({ id, title, thumbnail, price, description }: any, i: number) => (
        <div className="card a" key={id || i}>
          <div className="ui medium image">
            <img
              className="ui medium image"
              src={`${thumbnail}`}
              alt={title}
              style={{ width: 200, height: 200 }}
            />
          </div>
          <div className="content">
            <i
              id={id}
              className="right floated star icon green"
              title="Unmark Favorite"
              onClick={() => handleRemove(id)}
            />
            <div className="header">{title}</div>
            <div className="meta">
              <label>Price: ${price}</label>
            </div>
            <div className="description">{description}</div>
          </div>
        </div>
      )
    );
  };

  return (
    <>
      <div className="item">
        <h3 className="text-capitalize"> favorite page ({Object.values(fBeers || {}).length}) </h3>
      </div>
      <div className="ui link cards favorite">{renderFav()}</div>
    </>
  );
};

export default Favorite;

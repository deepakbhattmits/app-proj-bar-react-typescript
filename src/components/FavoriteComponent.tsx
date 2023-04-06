/** @format */

import { FC, useState } from "react";
import { Link } from "react-router-dom";
interface IProp {
  [prop: string]: any;
}
// interface IMap{
// 	[prop:string]:any
// }
// interface Ibeers{
// 	[prop:string]:any
// }
const Favorite: FC<IProp> = ({ fBeers, umarkFav }): JSX.Element => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };
  const handleRemove = (e: any) => {
    umarkFav(e.target.id);
  };
  const renderFav = () => {
    if (!!fBeers && Object.values(fBeers).length === 0) {
      return (
        <div className="loading">
          <h1 className="ui header">No any favorite items</h1>
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
      (
        {
          id,
          name,
          tagline,
          description,
          image_url,
        }: {
          id: string;
          name: string;
          tagline: string;
          description: string;
          image_url: string;
        },
        i: number
      ) => (
        <div className="card a" key={i}>
          <div className="ui medium image">
            <img
              className="ui medium image"
              src={`${image_url}`}
              alt="img"
              style={{ width: 200, height: 200 }}
            />
          </div>
          <div className="content">
            <i
              id={id}
              className="right floated star icon green"
              title="Unmark Favorite"
              onClick={handleRemove}
            />
            <div className="header">{name}</div>
            <div className="meta">
              <label>{tagline}</label>
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
        <h3 className="text-capitalize"> favorite page </h3>
      </div>
      <div className="ui link cards favorite">{renderFav()}</div>
    </>
  );
};
export default Favorite;

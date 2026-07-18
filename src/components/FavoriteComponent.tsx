/** @format */

import { Star, Undo2 } from "lucide-react";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface IProp {
  [prop: string]: any;
}

const Favorite: FC<IProp> = ({ fProducts, umarkFav }): JSX.Element => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  const handleRemove = (productId: any) => {
    umarkFav(productId);
  };

  const renderFav = () => {
    if (!!fProducts && Object.values(fProducts).length === 0) {
      return (
        <div className="flex min-h-[200px] flex-col items-center justify-center gap-3 px-4 text-center">
          <h1 className="text-lg font-semibold text-slate-700">No favorite items</h1>
          <Link
            to="/home"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            className="inline-flex items-center gap-2 rounded bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
          >
            <span className={`text-base ${hover ? '' : 'opacity-70'}`}><Undo2 /></span>
            Go Back
          </Link>
        </div>
      );
    }

    return Object.values(fProducts as any[])?.map(
      ({ id, title, thumbnail, price, description }: any, i: number) => (
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm" key={id || i}>
          <div className="flex h-52 items-center justify-center bg-slate-50 p-4">
            <img
              className="h-full w-full rounded object-cover"
              src={`${thumbnail}`}
              alt={title}
            />
          </div>
          <div className="space-y-3 p-4">
            <button
              type="button"
              id={id}
              className="float-right text-2xl text-yellow-400"
              title="Unmark Favorite"
              onClick={() => handleRemove(id)}
            >
              <Star />
            </button>
            <div className="text-lg font-semibold text-slate-800">{title}</div>
            <div className="text-sm text-slate-600">
              <label>Price: ${price}</label>
            </div>
            <div className="text-sm text-slate-500">{description}</div>
          </div>
        </div>
      )
    );
  };

  return (
    <>
      <div className="px-4 pt-4">
        <h3 className="text-capitalize text-lg font-semibold text-slate-800">
          favorite page ({Object.values(fProducts || {}).length})
        </h3>
      </div>
      <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {renderFav()}
      </div>
    </>
  );
};

export default Favorite;

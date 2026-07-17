/** @format */
import { FC } from 'react';

interface IProp {
  [prop: string]: any;
}

const MainComponent: FC<IProp> = ({
  beers,
  favorites,
  addToFavorite,
  removeFromfavorite,
}): JSX.Element => {
  const isFavorite = (productId: string | number) =>
    (Object.values(favorites || {}) as any[]).some(
      ({ id }: { id: string | number }) => +id === +productId
    );

  return (
    <>
      {(beers as any[])?.length ? (
        <div className='ui link cards'>
          {(beers as any[])?.map((product: any, i: number) => {
            const { id, title, thumbnail, price, description } = product;
            return (
              <div className='card' key={id || i}>
                <div className='ui medium image'>
                  <img
                    className='medium ui image'
                    src={thumbnail}
                    alt={title}
                    style={{ width: 200, height: 200 }}
                  />
                </div>
                <div className='content'>
                  <i
                    id={id}
                    className={`right floated star icon ${isFavorite(id) ? 'green' : ''}`}
                    onClick={() => {
                      if (isFavorite(id)) {
                        removeFromfavorite(id);
                      } else {
                        addToFavorite(product);
                      }
                    }}
                    title={isFavorite(id) ? 'Unmark Favorite' : 'Mark Favorite'}
                  />
                  <div className='header'>{title}</div>
                  <div className='meta'>
                    <label>Price: ${price}</label>
                  </div>
                  <div className='description'>{description}</div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className='loading'>
          <h1 className='ui header'>No products found with this search, please try again</h1>
        </div>
      )}
    </>
  );
};

export default MainComponent;

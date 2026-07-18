/** @format */
import { Star, StarCheck } from 'lucide-react';
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
        <div className='grid grid-cols-1 gap-5 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {(beers as any[])?.map((product: any, i: number) => {
            const { id, title, thumbnail, price, description } = product;
            return (
              <div
                className='flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:shadow-md'
                key={id || i}
              >
                <div className='flex h-56 items-center justify-center bg-slate-50 p-3'>
                  <img
                    className='h-full w-full rounded-lg object-cover'
                    src={thumbnail}
                    alt={title}
                  />
                </div>
                <div className='flex flex-1 flex-col p-4'>
                  <div className='mb-3 flex items-start justify-between gap-2'>
                    <h3 className='line-clamp-2 text-base font-semibold text-slate-800'>{title}</h3>
                    <button
                      type='button'
                      id={id}
                      className={`text-2xl leading-none ${isFavorite(id) ? 'text-yellow-400' : 'text-slate-300'}`}
                      onClick={() => {
                        if (isFavorite(id)) {
                          removeFromfavorite(id);
                        } else {
                          addToFavorite(product);
                        }
                      }}
                      title={isFavorite(id) ? 'Unmark Favorite' : 'Mark Favorite'}
                    >
                      {isFavorite(id) ? <StarCheck color="green"/> : <Star />}
                    </button>
                  </div>
                  <div className='mt-auto'>
                    <div className='mb-2 text-sm font-medium text-slate-700'>
                      <span className='text-slate-500'>Price:</span> ${price}
                    </div>
                    <p className='line-clamp-3 text-sm text-slate-500'>{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className='flex min-h-[200px] items-center justify-center px-4'>
          <h1 className='text-center text-lg font-semibold text-slate-700'>No products found with this search, please try again</h1>
        </div>
      )}
    </>
  );
};

export default MainComponent;
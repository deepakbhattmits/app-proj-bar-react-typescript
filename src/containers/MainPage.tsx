/** @format */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainComponent from "../components/MainComponent";
import { getProducts, addTofavorites, removeFromfavorites } from "../actions";
import SearchPage from "./SearchPage";

interface RootState {
  [props: string]: any;
}

const MainPage = () => {
  const dispatch: (dispatch: any) => Promise<void> = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const products = useSelector((state: RootState) => state.productData.products || []);
  const favorites = useSelector((state: RootState) => state.productData.favorites || {});

  const addToFavorite = (product: any) => {
    dispatch(addTofavorites(product));
  };

  const removeFromfavorite = (productId: any) => {
    dispatch(removeFromfavorites(productId));
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <SearchPage setIsLoading={setIsLoading} />
      <div className="ui row">
        <MainComponent
          beers={products}
          favorites={favorites}
          addToFavorite={addToFavorite}
          removeFromfavorite={removeFromfavorite}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};
export default MainPage;
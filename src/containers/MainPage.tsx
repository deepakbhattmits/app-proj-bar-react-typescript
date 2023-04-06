/** @format */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainComponent from "../components/MainComponent";
import { getBeers, addTofavorites, removeFromfavorites } from "../actions";
import SearchPage from "./SearchPage";
interface RootState {
  [props: string]: any;
}
const MainPage = () => {
  const dispatch: (dispatch: any) => Promise<void> = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const beers = useSelector((state: RootState) => state.beerData.beers);
  const fbeers = useSelector((state: RootState) => state.beerData.addFbeers);
  const favorites = useSelector((state: RootState) => state.beerData.favorites);
  const getfav = () => {
    return fbeers;
  };

  const addToFavorite = (e: any) => {
    dispatch(addTofavorites(e.target.id));
  };
  const removeFromfavorite = (e: any) => {
    dispatch(removeFromfavorites(e.target.id));
  };
  useEffect(() => {
    // if (!beers) {
    dispatch(getBeers()); //  action call.
    // }
    // }, [beers, dispatch]);
  }, [dispatch]);

  return (
    <>
      <SearchPage setIsLoading={setIsLoading} />
      <div className="ui row">
        <MainComponent
          beers={beers}
          fbeers={getfav()}
          addToFavorite={addToFavorite}
          removeFromfavorite={removeFromfavorite}
          className={favorites}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};
export default MainPage;

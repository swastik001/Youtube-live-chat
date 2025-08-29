import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API, YOUTUBE_LOGO_URL } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const toggleMeniuHandler = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    if (searchQuery.length === 0) {
      setSuggestions([]);
      return;
    }
    // if (cachedSearch.current?.[searchQuery]) {
    //   console.log("from cache", cachedSearch[searchQuery]);
    //   setSuggestions(cachedSearch?.current?.[searchQuery]);
    //   return;
    // }
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json?.products);
    dispatch(cacheResults({ [searchQuery]: json?.products }));
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMeniuHandler()}
          className="h-10 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />

        <img className="h-10 mx-2" alt="youtube-logo" src={YOUTUBE_LOGO_URL} />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full px-5"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute  bg-white w-1/2  shadow-lg rounded-lg py-2 px-5  border border-gray-100">
            <ul>
              {suggestions?.map((s) => (
                <li
                  key={s.id}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  🔍 {s.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="h-12"
          alt="user"
          src="https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg"
        />
      </div>
    </div>
  );
};

export default Head;

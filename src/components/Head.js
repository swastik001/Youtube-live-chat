import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  // const cachedSearch = useRef({});
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

        <img
          className="h-10 mx-2"
          alt="youtube-logo"
          src="data:image/png;base64,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"
        />
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

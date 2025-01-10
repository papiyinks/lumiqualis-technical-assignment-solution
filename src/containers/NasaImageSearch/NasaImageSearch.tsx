import React, { useState } from "react";
import axios from "axios";

import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";

const NasaImageSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [queryResults, setQueryResult] = useState<[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const inputQueryChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    setQuery(value);
  };

  let displayedResult = <h1>NASA Image Gallery</h1>;

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query === "") {
      return;
    }

    setLoading(true);

    const SEARCH_QUERY_API = `https://images-api.nasa.gov/search?q=${query}`;

    const { data } = await axios.get(SEARCH_QUERY_API);

    const filteredData = data.collection.items.filter(
      (item: { links: [] }) => item.links !== undefined
    );
    const filtered = filteredData.splice(0, 15);

    setQueryResult(filtered);
    setLoading(false);
  };

  if (queryResults) {
    displayedResult = (
      <div className="grid lg:grid-cols-5 md:grid-cols-2 xl:gap-12 gap-8 px-4">
        {queryResults.map(
          (result: { href: string; links: { href: string }[] }) => (
            <Card key={result?.href} image={result?.links[0].href} />
          )
        )}
      </div>
    );
  }

  if (queryResults?.length === 0) {
    displayedResult = (
      <h1>
        Sorry, but nothing matched your criteria. Please try again with some
        different keywords
      </h1>
    );
  }

  return (
    <div className="py-4">
      <div className="pt-16 md:pl-10 px-4">
        <form onSubmit={submitHandler} className="flex">
          <label className="block w-96 mr-4">
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Search for... (e.g Orion)"
              onChange={inputQueryChangeHandler}
            />
          </label>
          <button
            className="relative py-2 px-8 rounded-md bg-blue-600 hover:bg-blue-500 focus:outline-none"
            type="submit"
          >
            <span className="text-white">Search</span>
            {loading && <Spinner />}
          </button>
        </form>
      </div>

      <div className="pt-16 md:pl-10 px-4">{displayedResult}</div>
    </div>
  );
};

export default NasaImageSearch;

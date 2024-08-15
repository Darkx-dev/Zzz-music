"use client";
import React from "react";
import { useState } from "react";
import { searchGlobal, searchSongs } from "@/services/api";
import { useSearch } from "@/context/SearchContext";
import { useRouter } from "next/navigation";

const SearchBar = ({ className }: { className: string }) => {
  const router = useRouter();
  const { setSearchResults, setSongSearchResults } = useSearch();
  const [query, setQuery] = useState("");
  const handleSearch = async (e: any) => {
    e.preventDefault();
    if (query.trim().length < 1) return
    const response1 = await searchGlobal(query);
    const response2 = await searchSongs(query);
    console.log(response2)
    setSongSearchResults(response2)
    setSearchResults(response1);
  };
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="black"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <form action="#" onSubmit={(e) => handleSearch(e)} className="w-full">
        <input
          aria-label="searchbar"
          className="w-full bg-inherit py-2 pl-2 pr-2 text-black outline-none"
          placeholder="Search the rhythm"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="search"
        />
      </form>
    </div>
  );
};

export default SearchBar;

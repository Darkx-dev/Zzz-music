"use client";
import SearchBar from "@/components/SearchBar";
import React, { useState } from "react";
import SearchList from "@/components/SearchList";

const Search = () => {
  return (
    <>
      <div className="relative flex h-28 items-center justify-end">
        <h2 className="absolute left-0 top-0 text-3xl font-medium">
          Listen <br />
          the <br /> rhythm
        </h2>
        <SearchBar className="relative flex w-5/6 items-center rounded-l-full bg-white pl-2" />
      </div>
      <SearchList />
    </>
  );
};

export default Search;

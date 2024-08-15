"use client";
import SearchBar from "@/components/SearchBar";
import React, { useState } from "react";
import SearchList from "@/components/SearchList";

const Search = () => {
  return (
    <>
      <div className="relative flex h-28 items-center justify-end">
        <h2 className="text-3xl font-medium pl-2 w-16">
          Listen <br />
          the <br /> rhythm
        </h2>
        <SearchBar className="relative flex w-full items-center rounded-l-full bg-white pl-2" />
      </div>
      <SearchList />
    </>
  );
};

export default Search;

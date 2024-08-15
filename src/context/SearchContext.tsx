"use client";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { SearchResponse } from "@/types/api";

interface SearchContextType extends SearchResponse {
  searchResults: any;
  songSearchResults: any;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setSearchResults: (results: []) => void;
  setSongSearchResults: (results: []) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [songSearchResults, setSongSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   console.log(searchResults);
  // }, [searchResults]);

  return (
    <SearchContext.Provider
      value={{
        loading,
        searchResults,
        songSearchResults,
        setLoading,
        setSearchResults,
        setSongSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error("useSearch must be withing SearchProvider");
  return context;
};

export default SearchProvider;

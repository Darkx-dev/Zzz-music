import React from "react";
import { useSearch } from "@/context/SearchContext";
import { Song } from "@/types/api";
import SongCard from "./SongCard";

const SearchList: React.FC = () => {
  const { searchResults, songSearchResults } = useSearch();

  return (
    <div className="grid h-full gap-2 px-2 pb-16">
      <h1>Top results</h1>
      {searchResults.data?.songs?.results.map((song: Song) => (
        <SongCard key={song.id} song={song} />
      ))}
      <h1>All results</h1>
      {songSearchResults.data?.results.map((song: Song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SearchList;

import React from "react";
import { useSearch } from "@/context/SearchContext";
import { Song } from "@/types/api";
import SongCard from "./SongCard";

const SearchList: React.FC = () => {
  const { searchResults, songSearchResults, loading } = useSearch();

  return (
    <div className="grid h-full gap-2 px-2 pb-36">
      {loading && (
        <div className="flex w-full translate-y-20 items-center justify-center gap-x-2">
          <div className="h-5 w-5 animate-bounce rounded-full bg-[#d991c2]"></div>
          <div className="h-5 w-5 animate-bounce rounded-full bg-[#9869b8]"></div>
          <div className="h-5 w-5 animate-bounce rounded-full bg-[#6756cc]"></div>
        </div>
      )}

      {searchResults.data?.songs?.results && <h1>Top results</h1>}
      {searchResults.data?.songs?.results.map((song: Song) => (
        <SongCard key={song.id} song={song} />
      ))}
      {songSearchResults.data?.results && <h1>All results</h1>}
      {songSearchResults.data?.results.map((song: Song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SearchList;

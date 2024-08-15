export interface SearchResponse {
  success?: boolean;
  data?: {
    albums: { results: Album[]; position: number };
    artists: { results: Artist[]; position: number };
    playlists: { results: Playlist[]; position: number };
    songs: { results: Song[]; position: number };
    topQuery: { results: any[]; position: number };
  };
}

export interface Song {
  id: string;
  name: string;
  title: string;
  artists?: {
    primary: [
      {
        name: string;
        id: string;
      },
    ];
    all: any[];
    featured: any[];
  };
  artist: string;
  image: any[];
  primaryArtists?: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
}

export interface Artist {
  id: string;
  name: string;
  // Add other properties
}

export interface Playlist {
  id: string;
  name: string;
  // Add other properties
}

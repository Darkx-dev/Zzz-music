const BASE_URL = "https://saavn.dev/api";

const searchGlobal = (query: string) =>
  fetch(`${BASE_URL}/search?query=${query}`).then((res) => res.json());

const searchSongs = (query: string, limit: number = 10, page: number = 1) =>
  fetch(`${BASE_URL}/search/songs?query=${query}`).then((res) => res.json());

const searchAlbums = (query: string) =>
  fetch(`${BASE_URL}/albums/search?q=${query}`).then((res) => res.json());

const searchArtists = (query: string) =>
  fetch(`${BASE_URL}/artists/search?q=${query}`).then((res) => res.json());

const searchPlaylists = (query: string) =>
  fetch(`${BASE_URL}/playlists/search?q=${query}`).then((res) => res.json());

const getSongById = (id: string) =>
  fetch(`${BASE_URL}/songs/${id}`).then((res) => res.json());

const getSongLyrics = (id: string) =>
  fetch(`${BASE_URL}/songs/${id}/lyrics`).then((res) => res.json());

const getSongSuggestions = (id: string) =>
  fetch(`${BASE_URL}/songs/${id}/suggestions`).then((res) => res.json());

const getAlbumById = (id: string) =>
  fetch(`${BASE_URL}/albums/${id}`).then((res) => res.json());

const getArtistById = (id: string) =>
  fetch(`${BASE_URL}/artists/${id}`).then((res) => res.json());

const getArtistSongs = (id: string) =>
  fetch(`${BASE_URL}/artists/${id}/songs`).then((res) => res.json());

const getArtistAlbums = (id: string) =>
  fetch(`${BASE_URL}/artists/${id}/albums`).then((res) => res.json());

const getPlaylistById = (id: string) =>
  fetch(`${BASE_URL}/playlists/${id}`).then((res) => res.json());

export {
  searchGlobal,
  searchSongs,
  searchAlbums,
  searchArtists,
  searchPlaylists,
  getSongById,
  getSongLyrics,
  getSongSuggestions,
  getAlbumById,
  getArtistById,
  getArtistSongs,
  getArtistAlbums,
  getPlaylistById,
};

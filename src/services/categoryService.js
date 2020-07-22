export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Lens" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Camera Body" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Flash" }
];

export function getGenres() {
  return genres.filter(g => g);
}

export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://aktienow-assignment.ronie.dev/api";

import axios from "axios";

export async function loadApod() {
  const data = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API}`
  );
  return data;
}

export async function loadPosts() {
  const data = await axios.get("/post");
  data = res;
  return data;
}

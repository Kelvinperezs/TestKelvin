const baseUrl = "http://localhost:3000/people";

export async function getPeoplesBySearch(q) {
  const response = await fetch(`${baseUrl}`);
  const responseJson = await response.json();
  return responseJson;
}

export default {
  getPeoplesByPopular,
  getPeoplesBySearch
};

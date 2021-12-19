const getData = () => {
  // const URL = "http://localhost:3000/goods";
  const URL = "https://test-45cff-default-rtdb.firebaseio.com/goods.json";

  return fetch(URL).then((response) => response.json());
};

export default getData;

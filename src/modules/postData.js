const postData = () => {
  // const URL = "http://localhost:3000/goods";
  const URL = "https://test-45cff-default-rtdb.firebaseio.com/goods.json";

  return fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      title: "Ведьмак 3: Дикая Охота (PlayStation 4)",
      price: 2550,
      sale: true,
      img: "https://cdn1.ozone.ru/multimedia/wc1200/1015447871.jpg",
      category: "Игры и софт"
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

export default postData;

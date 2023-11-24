var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("http://localhost:4000/api/rocket/", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

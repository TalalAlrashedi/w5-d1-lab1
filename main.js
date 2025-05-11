let container = document.getElementById("container");

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.results.map((element) => {
      let card = document.createElement("div");
      card.classList.add("card");

      let cardDetails = document.createElement("div");
      cardDetails.classList.add("card-details");

      let char = document.createElement("h3");

      let image = document.createElement("img");
      image.src = element.image;
      char.innerText = element.name;

      cardDetails.appendChild(char);
      cardDetails.appendChild(image);
      card.appendChild(cardDetails);
      container.appendChild(card);
    });
  });

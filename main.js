let container = document.getElementById("container");

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.results.map((element) => {
        let result = element.image
        console.log(result);

        let char = document.createElement("h3")
        
        let image = document.createElement("img")
        image.src = element.image
        char.innerText = element.name

        container.appendChild(char)
        container.appendChild(image)

    });

  });

// let container = document.getElementById("container");

// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     data.results.map((element) => {
//       let result = element.image;
//       console.log(result);

//       let char = document.createElement("h3");
//       let image = document.createElement("img");
//       image.src = element.image;
//       char.innerText = element.name;

//       container.appendChild(char);
//       container.appendChild(image);
//     });
//   });

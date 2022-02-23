const countriesContainer = document.querySelector(".countries-list");
const searchInput = document.querySelector(".search");

searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value;

  fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then((r) => r.json())
    .then((countries) => {
      countriesContainer.innerHTML = "";
      countries.forEach(({ name, flags }) => {
        const div = document.createElement("div");
        const li = document.createElement("li");
        li.textContent = name.common;
        const img = document.createElement("img");
        img.style.width = "30px";
        img.src = flags.png;
        div.append(li);
        div.append(img);
        countriesContainer.append(div);
      });
    });
});

fetch("https://restcountries.com/v3.1/all")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((countries) => {
    console.log(countries);
    countries.forEach(({ name, flags }) => {
      const div = document.createElement("div");
      const li = document.createElement("li");
      li.textContent = name.common;
      const img = document.createElement("img");
      img.style.width = "30px";
      img.src = flags.png;
      div.append(li);
      div.append(img);
      countriesContainer.append(div);
    });
  })
  .catch((err) => {
    console.log("ERROR", err);
  });

let container = document.getElementById("infiniteScroll");
let page = 1;
const firstLaod = () => {
  fetch(`http://localhost:3001/names?_page=${page}&_limit=15`)
    .then((d) => d.json())
    .then((res) => {
      console.log(res);
      showNames(res);
    });
};
firstLaod();
function showNames(names) {
  names.forEach((d) => {
    let name = document.createElement("h1");
    name.textContent = d.title;
    container.append(name);
  });
}

const showMore = () => {
  setTimeout(() => {
    page++;
    firstLaod();
  }, 400);
};
window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    showMore();
  }
});

const card = document.getElementById('card');

const getData = async () => {
  try {
    const data = await fetch(
      'https://api.nasa.gov/planetary/apod?api_key=XprCFtMrDi8ZGtVbPIVUJbCtormSVc6eTE9pmQPo'
    );
    const res = await data.json();
    card.innerHTML += `
    <img class="card__image" src="${res.url}" alt="" />
   
    <div class="card__body">
      <p class="card__date">${res.date}</p>
      <h1 class="card__title">${res.title}</h1>
      <p class="card__desc">${res.explanation}</p>
    </div>
  `;
  } catch (err) {
    console.log(err);
    alert('Refresh the page');
  }
};
getData();

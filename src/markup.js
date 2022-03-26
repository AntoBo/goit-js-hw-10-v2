import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptions } from './notifyOptions';

const refs = {
  list: document.querySelector('.country-list'),
  card: document.querySelector('.country-info'),
};

export function draw(data) {
  //check whether data too long
  if (data.length > 10) {
    Notify.info('Too many matches found. Please keep typing', notifyOptions);
    return;
  }

  //draw card
  if (data.length === 1) {
    const { flags, name, capital, population, languages } = data[0];
    let markup = `<h1 class="card__title"><img width="70" height="50"src='${
      flags.svg
    }' class="card__flag"></span>${name.common}</h1>
<p class="card__text"><span class="card__text-title">Capital:</span> ${capital}</p>
<p class="card__text"><span class="card__text-title">Population:</span> ${population}</p>
<p class="card__text"><span class="card__text-title">Languages:</span> 
${Object.values(languages).join(', ')}
</p>`;
    refs.card.insertAdjacentHTML('afterbegin', markup);
  } else {
    //draw list
    let markup = '';
    data.forEach(country => {
      markup += `<li class="item"><img width="45" height="30"src='${country.flags.svg}'class="item__flag"><span class="item__name">${country.name.common}</span></li>`;
    });
    refs.list.insertAdjacentHTML('afterbegin', markup);
  }
}

export function clear() {
  refs.card.innerHTML = '';
  refs.list.innerHTML = '';
}

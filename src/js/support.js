import Swiper from 'swiper';
import 'swiper/css';
const supportList = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: new URL('../img/colorpng/savechildren.png', import.meta.url),
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: new URL('../img/colorpng/projecthope.png', import.meta.url),
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: new URL('../img/colorpng/united24.png', import.meta.url),
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: new URL('../img/colorpng/medicalcorp.png', import.meta.url),
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: new URL('../img/colorpng/medicinsans.png', import.meta.url),
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: new URL('../img/colorpng/razom.png', import.meta.url),
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: new URL('../img/colorpng/action-against.png', import.meta.url),
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: new URL('../img/colorpng/worldvision.png', import.meta.url),
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: new URL('../img/colorpng/pritula.png', import.meta.url),
  },
];

const supportListElem = document.querySelector('.js-support-list');
const nextButton = document.querySelector('.swiper-button-next');

nextButton.addEventListener('click', () => {
  swiper.slideNext();
});
function supportTemplate(obj, i) {
  return `<div class="swiper-slide supports-item">
   <a href="${obj.url}" target="_blank">
   <img src="${obj.img}" class="support-img"/>
   </a>
   </div>`;
}
function supportMarkup(array) {
  return array.map(supportTemplate).join('');
}
function renderSupport() {
  const markup = supportMarkup(supportList);
  supportListElem.innerHTML = markup;
}
renderSupport();

const swiper = new Swiper('.mySwiper', {
  direction: 'vertical',
  spaceBetween: 20,
  loop: true,
  slidesPerView: 6,
  plugins: { scrollContainer: true },
  rewind: true,
});

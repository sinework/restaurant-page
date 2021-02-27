/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
import containerCleaner from '../util/containerCleaner';
import navBar from '../nav/navBar';

const menuPageLoader = () => {
  menuLanding(containerCleaner());
};

const menuLanding = (container) => {
  const firstImageSection = document.createElement('div');
  firstImageSection.classList.add('img1-menu');

  const greatSpot = document.createElement('div');
  greatSpot.classList.add('ptext');

  const greatSpotSpan = document.createElement('span');
  greatSpotSpan.classList.add('header-span-menu', 'mt-5');
  greatSpotSpan.innerText = 'Here is what we have for you on our menu today';

  const greatSpotSpanSub = document.createElement('span');
  greatSpotSpanSub.classList.add('section-heading-lower');
  greatSpot.append(greatSpotSpan);
  greatSpot.append(greatSpotSpanSub);
  firstImageSection.append(greatSpot);
  container.append(navBar(firstImageSection, 'nav-bg-menu'));
  menuList(container);
};

const menuList = (container) => {
  const foodList = [
    {
      foodName: 'Tibs',
      price: '10$',
    },
    {
      foodName: 'Stake',
      price: '15$',
    },
    {
      foodName: 'Kitfo',
      price: '30$',
    },
    {
      foodName: 'Dulet',
      price: '12$',
    },
    {
      foodName: 'Misir',
      price: '20$',
    },
  ];
  const foodItem = [];
  const priceItem = [];


  const menuCardHolder = document.createElement('div');
  menuCardHolder.classList.add('card', 'menu-card-holder', 'd-flex', 'section-card');

  foodList.forEach((element) => {
    foodItem.push(element.foodName);
    priceItem.push(element.price);
  });
  for (let i = 0; i < foodItem.length; i++) {
    const menuCard = document.createElement('div');
    menuCard.classList.add('card', 'menu-card', 'd-flex', 'flex-column');

    const menuCardFood = document.createElement('h6');
    menuCardFood.classList.add('menu-food');

    const menuCardPrice = document.createElement('p');
    menuCardPrice.classList.add('menu-price');
    menuCardFood.append(foodItem[i]);
    menuCardPrice.append(priceItem[i]);
    menuCard.append(menuCardFood);
    menuCard.append(menuCardPrice);
    menuCardHolder.append(menuCard);
  }


  container.append(menuCardHolder);
};

export default menuPageLoader;
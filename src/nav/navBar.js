/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable import/no-cycle */
import home from '../landing/home';
import about from '../about/about';
import menuPageLoader from '../menu/menu';


const navBar = (firstSection, navClass) => {
  // <nav>
  const navDiv = document.createElement('div');
  navDiv.classList.add('nav', 'navbar', 'navbar-expand-sm', 'py-lg-2', navClass);

  // <div class="container">
  const navContainer = document.createElement('div');
  navContainer.classList.add('container');
  navContainer.setAttribute('id', 'mainNav');

  //  id = navbarResponsive
  const resposniveDiv = document.createElement('div');
  resposniveDiv.classList.add('w-100');
  resposniveDiv.setAttribute('id', 'navbarResponsive');

  // ul
  const ulElement = document.createElement('ul');
  ulElement.classList.add('navbar-nav', 'mx-auto', 'd-flex', 'flex-row', 'justify-content-around');


  const liElements = createNavElements();


  for (const i in liElements) {
    ulElement.append(liElements[i]);
  }


  // appending elements
  resposniveDiv.append(ulElement);
  navContainer.append(resposniveDiv);
  navDiv.append(navContainer);

  firstSection.append(navDiv);


  return firstSection;
};

const pageOpner = (index) => {
  const pages = [home, menuPageLoader, about];

  return pages[index];
};
const linkGenerator = (...linkTags) => {
  const links = ['Home', 'Menu', 'About'];


  for (const i in linkTags) {
    if (linkTags[i] === undefined) {
      linkTags[i] = document.createElement('li');
      linkTags[i].classList.add('navbar-nav', 'mx-auto');


      const aTag = document.createElement('a');
      aTag.classList.add('nav-link', 'text-uppercase', 'text-expanded');
      aTag.href = '#';


      aTag.append(links[i]);
      aTag.addEventListener('click', () => {
        pageOpner(i)();
      });


      linkTags[i].append(aTag);
    }
  }

  return linkTags;
};

const createNavElements = () => {
  let [home, menu, about] = [];
  [home, menu, about] = linkGenerator(home, menu, about);
  return {
    home,
    menu,
    about,
  };
};

export default navBar;
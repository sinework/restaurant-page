import containerCleaner from "../util/containerCleaner";
 import navBar from "../nav/navBar";

const about=()=>{
    aboutLanding(containerCleaner());
}


   
   const aboutLanding=(container)=>{
       const firstImageSection= document.createElement('div');
       firstImageSection.classList.add("img1");
   
       const aboutSection=document.createElement('div');
       aboutSection.classList.add("about-card", "card");

       const cardBody= document.createElement('div');
       cardBody.classList.add('card-body');

       const headerText = document.createElement('h5');
       headerText.classList.add("display-5", 'headerT')
       headerText.innerHTML="About us";

       const cardParagraph = document.createElement('p');
       cardParagraph.classList.add("about-paragraph");

       cardParagraph.innerText="Welcome to FoodTopia Family Restaurant, we are proud of our freshly prepared food, warm welcome and relaxing atmosphere. It’s the ideal place for those that seek genuine value, whether for a family meal, a relaxing drink or a bite to eat with friends.Playland American Italiano Family Restaurant is a newly established Restaurant located on the eastern coast of Guyana in South America. It is owned and operated by an American trained Chef with over 25 years of culinary experience. All our meals are prepared in the traditional uncompromising style, with fresh imported ingredients and cooked to perfection. We have available a wide assortment of local beverages and a list of hand selected wines and champagne  from around the world to compliment our unique cuisine. we know that at times you may have that special bottle that you would like to share with friends and family to celebrate a special occasion, bring it along with you, your own wines are welcomed."

       cardBody.append(headerText);
       cardBody.append(cardParagraph);
       aboutSection.append(cardBody);
       navBar(firstImageSection,'nav-bg-menu')
       firstImageSection.append(aboutSection)
   
    //    const greatSpotSpan = document.createElement('span');
    //    greatSpotSpan.classList.add("header-span-menu", "mt-5");
    //    greatSpotSpan.innerText="Here is what we have for you on our menu today";
   
    //    const greatSpotSpanSub= document.createElement('span');
    //    greatSpotSpanSub.classList.add('section-heading-lower')
    //    greatSpot.append(greatSpotSpan);
    //    greatSpot.append(greatSpotSpanSub);
    //    firstImageSection.append(greatSpot);

    container.append( firstImageSection);
       
   }

export default about;
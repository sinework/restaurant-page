import containerCleaner from "../util/containerCleaner";
import navBar from "../nav/navBar";
import item1 from "../assets/images/item1.jpg";
import item2 from "../assets/images/item2.jpg";
import item4 from "../assets/images/item4.jpg";
import item3 from "../assets/images/item3.jpg";
import item5 from "../assets/images/item5.jpg";

const homePage=()=>{
    landingSection(containerCleaner());
}

const landingSection=(container)=>{
    const firstImageSection= document.createElement('div');
    firstImageSection.classList.add("img1", "overlay");

    const greatSpot=document.createElement('div');
    greatSpot.classList.add("ptext");

    const greatSpotSpan = document.createElement('span');
    greatSpotSpan.classList.add("header-span");
    greatSpotSpan.innerText="FoodTopia";

    const greatSpotSpanSub= document.createElement('span');
    greatSpotSpanSub.classList.add('section-heading-lower')
    greatSpot.append(greatSpotSpan);
    greatSpot.append(greatSpotSpanSub);
    firstImageSection.append(greatSpot);
    container.append(navBar(firstImageSection,'nav-bg'));
    landingSectionDesc(container);

}

const landingSectionDesc=(container)=>{
    
const descSection = document.createElement('div');
descSection.classList.add("section", "section-dark", "d-flex", "flex-row");

const cardDiv = document.createElement('div');
cardDiv.classList.add("intro-text", "card-section", "left-0", "text-center", "bg-faded", "p-5", "rounded");

const headerT= document.createElement('h2');
headerT.classList.add("section-heading", "mb-4");

const textSpanUpper = document.createElement('span');
textSpanUpper.classList.add("section-heading-upper");
textSpanUpper.append("Family vibes");

const textSpanLower = document.createElement('span');
textSpanLower.classList.add("section-heading-lower");
textSpanLower.append("A spot to bring your loved ones");

const cardParagraph= document.createElement('p');
cardParagraph.classList.add("mb-3", "section-p");
cardParagraph.append("Our restaurant feels like a home away from home. It is the perfect spot to bring your loved ones. Great service that will make you feel like you're being served by a relative.");

const cardImage = document.createElement('img');

cardImage.src=item5;

cardImage.alt="coffee";
cardImage.classList.add("section-img");

// appending elements
headerT.append(textSpanUpper);
headerT.append(textSpanLower);

cardDiv.append(headerT);
cardDiv.append(cardParagraph);

descSection.append(cardDiv);
descSection.append(cardImage);

container.append(descSection);

secondSection(container)
}
// /////////////////////////////////////////////////////////////////////////////////////////
// second section
const secondSection=(container)=>{
    const secondImageSection= document.createElement('div');
    secondImageSection.classList.add("img2", "overlay");

    const secondTitle=document.createElement('div');
    secondTitle.classList.add("ptext");

    const secondTitleSpan = document.createElement('span');
    secondTitleSpan.classList.add("header-span");
    secondTitleSpan.innerText="Great cuisne";
    secondTitle.append(secondTitleSpan);

    secondImageSection.append(secondTitle);
    container.append(secondImageSection);
  
     secondSectionDesc(container);

}

const secondSectionDesc=(container)=>{
    
    const seconddescSection = document.createElement('div');
    seconddescSection.classList.add("section", "section-dark", "d-flex", "flex-row");
    
    const secondcardDiv = document.createElement('div');
    secondcardDiv.classList.add("intro-text", "card-section", "left-0", "text-center", "bg-faded", "p-5", "rounded");
    
    const secondHeaderT= document.createElement('h2');
    secondHeaderT.classList.add("section-heading", "mb-4");
    
    const secondTextSpanUpper = document.createElement('span');
    secondTextSpanUpper.classList.add("section-heading-upper");
    secondTextSpanUpper.append("Delecious Couisen");
    
    const secondTextSpanLower = document.createElement('span');
    secondTextSpanLower.classList.add("section-heading-lower");
    secondTextSpanLower.append("Plenty for sharing");
    
    const secondCardParagraph= document.createElement('p');
    secondCardParagraph.classList.add("mb-3", "section-p");
    secondCardParagraph.append("Our world renoun chefs will serve you with with that will leave you wanting more. The ingredients we use are fresh and of the highest quality. From a deliious stake to vegetarian dishes, we have a plate ready to serve every taste.");
    
    const secondCardImage = document.createElement('img');
    
    secondCardImage.src=item4;
    
    secondCardImage.alt="coffee";
    secondCardImage.classList.add("section-img");
    
    // appending elements
    secondHeaderT.append(secondTextSpanUpper);
    secondHeaderT.append(secondTextSpanLower);
    
    secondcardDiv.append(secondHeaderT);
    secondcardDiv.append(secondCardParagraph);
    
    seconddescSection.append(secondCardImage);
    seconddescSection.append(secondcardDiv);
    
    container.append(seconddescSection);
    
     thirdSection(container)
    }
// ////////////////////////////////////////////////////////////////
    
//  third section
const thirdSection=(container)=>{
    const thirdImageSection= document.createElement('div');
    thirdImageSection.classList.add("img3", "overlay");

    const thirdTitle=document.createElement('div');
    thirdTitle.classList.add("ptext");

    const thirdTitleSpan = document.createElement('span');
    thirdTitleSpan.classList.add("header-span");
    thirdTitleSpan.innerText="Great coffee";
    thirdTitle.append(thirdTitleSpan);

    thirdImageSection.append(thirdTitle);
    container.append(thirdImageSection);
  
    thirdSectionDesc(container);

}

const thirdSectionDesc=(container)=>{
    
    const thirdDescSection = document.createElement('div');
    thirdDescSection.classList.add("section", "section-dark", "d-flex", "flex-row");
    
    const secondcardDiv = document.createElement('div');
    secondcardDiv.classList.add("intro-text", "card-section", "left-0", "text-center", "bg-faded", "p-5", "rounded");
    
    const secondHeaderT= document.createElement('h2');
    secondHeaderT.classList.add("section-heading", "mb-4");
    
    const secondTextSpanUpper = document.createElement('span');
    secondTextSpanUpper.classList.add("section-heading-upper");
    secondTextSpanUpper.append("Fresh Beverages");
    
    const secondTextSpanLower = document.createElement('span');
    secondTextSpanLower.classList.add("section-heading-lower");
    secondTextSpanLower.append("Worth Drinking");
    
    const secondCardParagraph= document.createElement('p');
    secondCardParagraph.classList.add("mb-3", "section-p");
    secondCardParagraph.append("Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!");
    
    const secondCardImage = document.createElement('img');
    
    secondCardImage.src=item3;
    
    secondCardImage.alt="coffee";
    secondCardImage.classList.add("section-img");
    
    // appending elements
    secondHeaderT.append(secondTextSpanUpper);
    secondHeaderT.append(secondTextSpanLower);
    
    secondcardDiv.append(secondHeaderT);
    secondcardDiv.append(secondCardParagraph);
    
    thirdDescSection.append(secondcardDiv);
    thirdDescSection.append(secondCardImage);
    
    container.append(thirdDescSection);
    
    lastLandingSection(container)
    }

    // landing last
    
const lastLandingSection=(container)=>{
    const firstImageSection= document.createElement('div');
    firstImageSection.classList.add("img1", "overlay");

    const greatSpot=document.createElement('div');
    greatSpot.classList.add("ptext");

    const greatSpotSpan = document.createElement('span');
    greatSpotSpan.classList.add("header-span");
    greatSpotSpan.innerText="My restaurant";
    greatSpot.append(greatSpotSpan);

    firstImageSection.append(greatSpot);
    container.append(navBar(firstImageSection,'nav-bg'));
 

}

export default homePage;
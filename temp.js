// second section
const secondSection=(container)=>{
    const secondImageSection= document.createElement('div');
    secondImageSection.classList.add("img2", "overlay");

    const secondTitle=document.createElement('div');
    secondTitle.classList.add("ptext");

    const secondTitleSpan = document.createElement('span');
    secondTitleSpan.classList.add("header-span");
    secondTitleSpan.innerText="Great family spot";
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
    secondTextSpanUpper.append("Fresh Beverages");
    
    const secondTextSpanLower = document.createElement('span');
    secondTextSpanLower.classList.add("section-heading-lower");
    secondTextSpanLower.append("Worth Drinking");
    
    const secondCardParagraph= document.createElement('p');
    secondCardParagraph.classList.add("mb-3", "section-p");
    secondCardParagraph.append("Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!");
    
    const secondCardImage = document.createElement('img');
    
    secondCardImage.src=item5;
    
    secondCardImage.alt="coffee";
    secondCardImage.classList.add("section-img");
    
    // appending elements
    secondHeaderT.append(secondTextSpanUpper);
    secondHeaderT.append(secondTextSpanLower);
    
    secondcardDiv.append(secondHeaderT);
    secondcardDiv.append(secondCardParagraph);
    
    seconddescSection.append(secondcardDiv);
    seconddescSection.append(secondCardImage);
    
    container.append(seconddescSection);
    
    thirdSection(container)
    }
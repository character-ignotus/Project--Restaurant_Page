export default function menuPageLoader() {
    const element = document.createElement('div');
    const topElement = document.createElement('div');
    const paragraphOne = document.createElement('p');
    const paragraphTwo = document.createElement('p');
    const itemElementOne = document.createElement('div');
    const itemTextSection = document.createElement('div');
    const subTextSectionOne = document.createElement('div');
    const subTextSectionTwo = document.createElement('div');
    const itemImageSection = document.createElement('div');

    // Second Item Creaton //
    const itemElementTwo = document.createElement('div');
    const itemTextSectionTwo = document.createElement('div');
    const secondSubTextSectionOne = document.createElement('div');
    const secondSubTextSectionTwo = document.createElement('div');
    const itemImageSectionTwo = document.createElement('div');
    // Second Item Creaton //

    // Third Item Creaton //
    const itemElementThree = document.createElement('div');
    const itemTextSectionThree = document.createElement('div');
    const thirdSubTextSectionOne = document.createElement('div');
    const thirdSubTextSectionTwo = document.createElement('div');
    const itemImageSectionThree = document.createElement('div');
    // Third Item Creaton //

    paragraphOne.textContent = 'Menu Page';
    paragraphTwo.textContent = 'Scroll through our menu';

    subTextSectionOne.textContent = 'Sushi';
    subTextSectionTwo.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    // Second Item Text Content //
    secondSubTextSectionOne.textContent = 'Ramen';
    secondSubTextSectionTwo.textContent = `2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    // Second Item Text Content //

    // Third Item Text Content //
    thirdSubTextSectionOne.textContent = 'Hot Sake';
    thirdSubTextSectionTwo.textContent = `3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    // Third Item Text Content //

    topElement.classList.add('top-section');
    itemElementOne.classList.add('item');
    itemTextSection.classList.add('item-text-section');
    itemImageSection.classList.add('item-img-section');

    // Second Item Styling //
    itemElementTwo.classList.add('item');
    itemElementTwo.classList.add('item-reverse');
    itemTextSectionTwo.classList.add('item-text-section');
    itemImageSectionTwo.classList.add('item-img-section');
    itemImageSectionTwo.classList.add('img-two');
    // Second Item Styling //

    // Third Item Styling //
    itemElementThree.classList.add('item');
    itemTextSectionThree.classList.add('item-text-section');
    itemImageSectionThree.classList.add('item-img-section');
    itemImageSectionThree.classList.add('img-three');
    // Third Item Styling //

    topElement.appendChild(paragraphOne);
    topElement.appendChild(paragraphTwo);

    itemTextSection.appendChild(subTextSectionOne);
    itemTextSection.appendChild(subTextSectionTwo);

    // Second Item Text Appending//
    itemTextSectionTwo.appendChild(secondSubTextSectionOne);
    itemTextSectionTwo.appendChild(secondSubTextSectionTwo);
    // Second Item Text Appending//

    // Third Item Text Appending//
    itemTextSectionThree.appendChild(thirdSubTextSectionOne);
    itemTextSectionThree.appendChild(thirdSubTextSectionTwo);
    // Third Item Text Appending//

    itemElementOne.appendChild(itemTextSection);
    itemElementOne.appendChild(itemImageSection);

    // Second Item Section Appending//
    itemElementTwo.appendChild(itemImageSectionTwo);
    itemElementTwo.appendChild(itemTextSectionTwo);
    // Second Item Section Appending//

    // Third Item Section Appending//
    itemElementThree.appendChild(itemTextSectionThree);
    itemElementThree.appendChild(itemImageSectionThree);
    // Third Item Section Appending//

    element.appendChild(topElement);
    element.appendChild(itemElementOne);
    
    // Second Item Element Appending//
    element.appendChild(itemElementTwo);
    // Second Item Element Appending//

    // Third Item Element Appending//
    element.appendChild(itemElementThree);
    // Third Item Element Appending//

    return element
}
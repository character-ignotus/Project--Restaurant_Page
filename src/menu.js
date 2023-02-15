function menuItemGenerator(title, description, order, img, element) {
    const item = document.createElement('div');
    const descriptionSection = document.createElement('div');
    const descriptiontitle = document.createElement('div');
    const itemDescription = document.createElement('div');
    const imageSection = document.createElement('div');

    descriptiontitle.textContent = `${title}`;
    itemDescription.textContent = `${description}`;

    item.classList.add('item');
    descriptionSection.classList.add('item-text-section');
    imageSection.classList.add('item-img-section');

    if(order > 1) {
        imageSection.classList.add(`${img}`)
    }
    
    descriptionSection.appendChild(descriptiontitle);
    descriptionSection.appendChild(itemDescription);

    if(order%2 === 0) {
        item.classList.add('item-reverse');
        item.appendChild(imageSection);
        item.appendChild(descriptionSection);
    } else {
        item.appendChild(descriptionSection);
        item.appendChild(imageSection);
    }

    element.appendChild(item);
};

export default function menuPageLoader() {
    const element = document.createElement('div');
    const topElement = document.createElement('div');
    const paragraphOne = document.createElement('p');
    const paragraphTwo = document.createElement('p');

    paragraphOne.textContent = 'Menu Page';
    paragraphTwo.textContent = 'Scroll through our menu';

    topElement.classList.add('top-section');

    topElement.appendChild(paragraphOne);
    topElement.appendChild(paragraphTwo);
    element.appendChild(topElement);

    menuItemGenerator('Sushi', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, 1, 'nothing', element);
    menuItemGenerator('Ramen', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, 2, 'img-two', element);
    menuItemGenerator('Sake', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, 3, 'img-three', element);

    return element
}


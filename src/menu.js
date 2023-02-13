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

    paragraphOne.textContent = 'Menu Page';
    paragraphTwo.textContent = 'Scroll through our menu';

    subTextSectionOne.textContent = 'Ramen';
    subTextSectionTwo.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    topElement.classList.add('top-section');
    itemElementOne.classList.add('item');
    itemTextSection.classList.add('item-text-section');
    itemImageSection.classList.add('item-img-section');

    topElement.appendChild(paragraphOne);
    topElement.appendChild(paragraphTwo);

    itemTextSection.appendChild(subTextSectionOne);
    itemTextSection.appendChild(subTextSectionTwo);

    itemElementOne.appendChild(itemTextSection);
    itemElementOne.appendChild(itemImageSection);

    element.appendChild(topElement);
    element.appendChild(itemElementOne);
    
    return element
}
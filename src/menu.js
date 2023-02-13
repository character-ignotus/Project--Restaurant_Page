export default function menuPageLoad() {
    const sections = document.createElement('div');

    const topElement = document.createElement('div');
    topElement.classList.add('top-section');

    const subTopElement = document.createElement('div');
    const paragraphOne = document.createElement('p');
    paragraphOne.textContent = 'Menu Page';
    const paragraphTwo = document.createElement('p');
    paragraphTwo.textContent = 'Scroll through our menu';

    subTopElement.appendChild(paragraphOne);
    subTopElement.appendChild(paragraphTwo);
    topElement.appendChild(subTopElement);

    const itemOne = document.createElement('div');
    itemOne.classList.add('item');

    const itemTextSection = document.createElement('div');
    itemTextSection.classList.add('item-text-section');

    const subTextSectionOne = document.createElement('div');
    subTextSectionOne.textContent = 'Ramen';
    const subTextSectionTwo = document.createElement('div');
    subTextSectionTwo.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    const itemImageSection = document.createElement('div');
    itemImageSection.classList.add('item-img-section');

    itemTextSection.appendChild(subTextSectionOne);
    itemTextSection.appendChild(subTextSectionTwo);

    itemOne.appendChild(itemTextSection);
    itemOne.appendChild(itemImageSection);

    sections.appendChild(topElement);
    sections.appendChild(itemOne);

    return sections
}
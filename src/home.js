export default function homePageLoader() {
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
    
    return element
}
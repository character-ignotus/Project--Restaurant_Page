export default function homePageLoader() {
    const element = document.createElement('div');
    const imgSection = document.createElement('div');
    const textSection = document.createElement('div');
    const text = document.createElement('div');
    const button = document.createElement('button');
    
    element.classList.add('home-page');

    textSection.appendChild(text);
    textSection.appendChild(button);

    element.appendChild(textSection);
    element.appendChild(imgSection);


    return element
}
export default function homePageLoader() {
    const element = document.createElement('div');
    const imgSection = document.createElement('div');
    const textSection = document.createElement('div');
    const text = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const button = document.createElement('button');
    
    p1.textContent = 'Come.';
    p2.textContent = 'Sit.';
    p3.textContent = 'Dine.';
    button.textContent = 'Book A Table';

    element.classList.add('home-page');

    text.appendChild(p1);
    text.appendChild(p2);
    text.appendChild(p3);

    textSection.appendChild(text);
    textSection.appendChild(button);

    element.appendChild(textSection);
    element.appendChild(imgSection);


    return element
}
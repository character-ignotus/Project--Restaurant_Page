export default function footerLoader() {
    const footer = document.createElement('footer');
    const paragraph = document.createElement('p');
    const img = document.createElement('div');

    paragraph.textContent = 'Copyright © 2023 character-ignotus';

    footer.appendChild(paragraph);
    footer.appendChild(img)

    return footer
}
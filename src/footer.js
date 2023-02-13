export default function footerLoader() {
    const footer = document.createElement('footer');
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Footer text content';
    
    footer.appendChild(paragraph);

    return footer
}
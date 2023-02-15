export default function headerLoader() {
    const header = document.createElement('header');
    const logo = document.createElement('div');
    const logoTitle = document.createElement('div');
    const logoImg = document.createElement('div');
    const navigation = document.createElement('nav');
    const uL = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contacts = document.createElement('li');

    logoTitle.textContent = 'Oishii';

    home.textContent = 'Home';
    home.setAttribute('id', 'home');
    home.classList.add('tab');
    menu.textContent = 'Menu';
    menu.setAttribute('id', 'menu')
    menu.classList.add('tab');
    contacts.textContent = 'Contacts';
    contacts.setAttribute('id', 'contacts');
    contacts.classList.add('tab');

    logo.appendChild(logoTitle);
    logo.appendChild(logoImg);

    uL.appendChild(home);
    uL.appendChild(menu);
    uL.appendChild(contacts);

    navigation.appendChild(uL);

    header.appendChild(logo);
    header.appendChild(navigation);

    return header
}
export default function headerLoader() {
    const header = document.createElement('header');
    const logo = document.createElement('div');
    const navigation = document.createElement('nav');
    const uL = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contacts = document.createElement('li');

    logo.textContent = 'Logo';

    home.textContent = 'Home';
    home.setAttribute('id', 'home');
    menu.textContent = 'Menu';
    menu.setAttribute('id', 'menu')
    contacts.textContent = 'Contacts';
    contacts.setAttribute('id', 'contacts');

    uL.appendChild(home);
    uL.appendChild(menu);
    uL.appendChild(contacts);

    navigation.appendChild(uL);

    header.appendChild(logo);
    header.appendChild(navigation);

    return header
}
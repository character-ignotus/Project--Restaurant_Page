import headerLoader from './header';
import footerLoader from './footer';
import homePageLoader from './home';
import menuPageLoader from './menu';
import contactsPageLoader from './contacts';
import './styles/style.css'

document.body.insertBefore(headerLoader(), document.querySelector('#content'));
document.querySelector('#content').appendChild(homePageLoader());
document.body.appendChild(footerLoader());

document.getElementById('home').style.textDecoration = 'underline';
document.getElementById('home').style.textDecorationColor = '#c68e61';

const removeContent = () => {
    const content = document.querySelector('#content');
    content.removeChild(content.firstElementChild);
};

const switchTabs = (() => {
    const tabs = Array.from(document.getElementsByClassName('tab'));

    tabs.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            document.getElementById('home').style.textDecoration = 'none';
            document.getElementById('menu').style.textDecoration = 'none';
            document.getElementById('contacts').style.textDecoration = 'none';
            e.target.style.textDecoration = 'underline';
            e.target.style.textDecorationColor = '#c68e61';

            removeContent();
            if(e.target.getAttribute('id') == 'home') {
                document.querySelector('#content').appendChild(homePageLoader());
            } else if(e.target.getAttribute('id') == 'menu') {
                document.querySelector('#content').appendChild(menuPageLoader());
            } else {
                document.querySelector('#content').appendChild(contactsPageLoader());
            }
        })
    })
})();



import headerLoader from './header';
import footerLoader from './footer';
import menuPageLoad from './menu';
import './styles/style.css'

document.body.insertBefore(headerLoader(), document.querySelector('#content'));
document.querySelector('#content').appendChild(menuPageLoad());
document.body.appendChild(footerLoader());



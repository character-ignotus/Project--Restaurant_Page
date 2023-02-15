export default function contactsPageLoader() {
    const element = document.createElement('div');
    const phoneSection = document.createElement('div');
    const phoneLable = document.createElement('div');
    const phoneNumber = document.createElement('div');
    const emailSection = document.createElement('div');
    const emailLable = document.createElement('div');
    const emailAddress = document.createElement('div');
    const socialMediaSection = document.createElement('div');
    const socialMediaLable = document.createElement('div');
    const socialMediaAddress = document.createElement('div');

    phoneLable.textContent = 'Phone Number:';
    phoneNumber.textContent = '0987654321';
    emailLable.textContent = 'E-Mail:';
    emailAddress.textContent = 'sample00@mail.com';
    socialMediaLable.textContent = 'Twitter:';
    socialMediaAddress.textContent = '@example';

    element.classList.add('contacts')
    phoneSection.classList.add('contact-boxes');
    emailSection.classList.add('contact-boxes');
    socialMediaSection.classList.add('contact-boxes');

    phoneSection.appendChild(phoneLable);
    phoneSection.appendChild(phoneNumber);
    emailSection.appendChild(emailLable);
    emailSection.appendChild(emailAddress);
    socialMediaSection.appendChild(socialMediaLable);
    socialMediaSection.appendChild(socialMediaAddress);

    element.appendChild(phoneSection);
    element.appendChild(emailSection);
    element.appendChild(socialMediaSection);

    return element
}
const contactsAccordion = () => {
    const button = document.querySelector('.header-contacts__arrow'),
        contactAccordionBlock = document.querySelector('.header-contacts__phone-number-accord'),
        contactAccordion = contactAccordionBlock.querySelector('.header-contacts__phone-number');
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        contactAccordion.classList.toggle('active');
        contactAccordionBlock.classList.toggle('active');
    });
};
export default contactsAccordion;
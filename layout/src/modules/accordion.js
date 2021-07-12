const accordion = () => {
    const accordionBlock = document.querySelector('.accordion');

    accordionBlock.querySelectorAll('.msg-active').forEach(item => item.classList.remove('msg-active'));
    accordionBlock.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.title_block')) {
            target.classList.toggle('msg-active');
        }
    });
};
export default accordion;
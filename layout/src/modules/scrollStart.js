import scrollIntoView from "./scrollIntoView";

const scrollStart = () => {
    const scrollStartButton = document.querySelector('.button-footer');
    scrollStartButton.addEventListener('click', (event) => {
        event.preventDefault();
        scrollIntoView(scrollStartButton.querySelector('a'));
    });
};
export default scrollStart;
const accordion = () => {
    document.querySelectorAll('.msg-active').forEach(item => item.classList.remove('msg-active'));
};
export default accordion;
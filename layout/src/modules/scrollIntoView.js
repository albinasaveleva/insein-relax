const scrollIntoView = (item) => {
    document
        .querySelector(`${item.getAttribute('href')}`)
        .scrollIntoView({behavior: 'smooth', block: 'start'});
};
export default scrollIntoView;
const clearForm = (form) => {
    let inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
    if (form.querySelector('input[type="checkbox"]')) {
        let checkbox = form.querySelectorAll('input[type="checkbox"]');
        checkbox.forEach(item => item.checked = false);
    }
};
export default clearForm;
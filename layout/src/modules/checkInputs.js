import MaskPhone from "../maskPhone";

const checkInputs = () => {
    const checkInput = (item, regExp) => {
        let checkExp = regExp;
        if (checkExp.test(item)) {
            item.value = item.value.replace(checkExp, '');
        }
    };
    document.querySelectorAll('input[required]').forEach(input => input.removeAttribute('required'));
    const checkPhone = () => {
        const inputsPhone = document.querySelectorAll('input[name="phone"]');
        const maskPhone = new MaskPhone({
            selector: 'input[name="phone"]',
            masked:  '+7 (___)___-__-__'
        });
        maskPhone.start();

        inputsPhone.forEach( input => {
            input.addEventListener('blur', (event) => {
                let target = event.target;
                if (target === input) {
                    input.value = input.value.replace(/[^0-9\(\)\+\- ]/, '');
                    if (!/^\+7\ \(\d{3}\)\d{3}\-\d{2}\-\d{2}$/.test(input.value)) {
                        input.value = input.value.replace(input.value, '');
                    }}
                }
            );
        });
    };
    const checkName = () => {
        const inputsName = document.querySelectorAll('input[name="name"]');
        inputsName.forEach( input => {
            input.addEventListener('focus', () => input.style.border = '');
            input.addEventListener('input', () => checkInput(input, /[^а-яё]/i));
            input.addEventListener('blur', (event) => {
                let target = event.target;
                if (target === input) {
                    input.value = input.value
                        .replace(/[^а-яё]+/i, '');
                    if (input.value) {
                        input.value = `${input.value.slice(0, 1)
                            .toUpperCase()}${input.value
                            .slice(1)
                            .toLowerCase()}`;
                        } else {
                            input.value = input.value.replace(input.value, '');
                        } 
                }
            });
        });
    };
    checkPhone();
    checkName();
};

export default checkInputs;

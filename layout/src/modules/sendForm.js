import clearForm from "./clearForm";
// import handlerPopupThank from "./handlerPopupThank";
import closePopup from "./closePopup";
import openPopup from "./openPopup";
// import handlerPopupError from "./handlerPopupError";

const sendForm = () => {
    const preloader = document.createElement('section'),
        errorSection = document.createElement('section');

    preloader.insertAdjacentHTML('beforeend', `
        <div class="preloader-wrapper">
            <span class="preloader"></span>
        </div>       
    `);
    errorSection.insertAdjacentHTML('beforeend', `
        <div class="error-wrapper">
            <div class="close">
                <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M21.673.327a1.118 1.118 0 0 0-1.581 0L11 9.42 1.909.327A1.118 1.118 0 0 0 .327 1.91L9.42 11 .327 20.091a1.118 1.118 0 1 0 1.582 1.581L11 12.582l9.091 9.09a1.118 1.118 0 1 0 1.581-1.58L12.582 11l9.09-9.091a1.118 1.118 0 0 0 0-1.582z"
                    fill="rgba(255, 255, 255)" fill-opacity=".5"></path>
                </svg>
            </div>
            <span class="error-message">Упс...Что-то пошло не так</span>
        </div>   
    `)
    let loader = document.createElement('div');
    loader.classList.add('popup', 'popup-loader');

    const checkEmptyObject = (obj) => {
        for (let key in obj) {
            if (obj[key]) {
                return true;
            }
            return false;
        }
        return false;
    };
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let button = form.querySelector('button');
            let inputs = form.querySelectorAll('input');
            let checkbox = form.querySelector('input[type="checkbox"]');

            const formData = new FormData(form);
            let body = {};
            formData.forEach((value, key) => {
                body[key] = value;
            });

            inputs.forEach(input => {
                input.addEventListener('change', () => button.disabled = false);
            });
            checkbox.addEventListener('change', () => checkbox.nextElementSibling.style.border = '');

            if (checkEmptyObject(body)) {
                if (checkbox.checked) {
                    loader.textContent = '';
                    loader.append(preloader);
                    document.body.append(loader);
                    openPopup(loader);
                    postData(body)
                        .then((response) => {
                            if (response.status !== 200) {
                                throw new Error('status network not 200');
                            }
                            closePopup(loader);
                            // handlerPopupThank();
                            clearForm(form);
                            if (document.querySelector('.popup-consultation').style.visibility === 'visible') {
                                closePopup(document.querySelector('.popup-consultation')); 
                            }
                        })
                        .catch((error) => {
                            loader.textContent = '';
                            loader.append(errorSection);
                            // handlerPopupError();
                            clearForm(form);
                            console.log(error);
                        });
                }
                else {
                    button.disabled = true;
                    checkbox.nextElementSibling.style.border = '1px solid #ff0000';
                }
            } else {
                button.disabled = true;
            }
        });
    });
};
export default sendForm;
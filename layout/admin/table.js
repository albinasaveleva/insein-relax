'use strict';

class Administration {
    constructor() {
        this.repairList = [];
        // this.repairTypes = new Set();
        this.form = document.querySelector('form');
        this.modal = document.querySelector('#modal');
        this.inputs = this.form.querySelectorAll('input');
    }
    init() {
        if (this.getCookie("correctAutorize") && this.getCookie("correctAutorize") === 'true') {
            this.getRepairs();
            this.checkInputs();
            this.listeners();
        } 
        else {
            window.location = window.location.href.replace(/table/, 'index' );
        }
    }
    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURI(matches[1]) : undefined;
    }
    getRepairs() {
        return fetch('http://localhost:3000/api/items')
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                } else {
                    return response.json();
                }
            })
            .then(result => {
                this.repairList = result;
                this.repairTypes = new Set();
                result.forEach(element => {
                    this.repairTypes.add(element.type);
                });
                this.clearRepairList();
                this.showRepairTypes();
            })
            .catch(error => console.log(error));
    }
    showRepairTypes() {
        const select = document.querySelector('#typeItem');
        this.clearRepaitTypes();
        let option = document.createElement('option');
        option.value = 'Все услуги';
        option.textContent = 'Все услуги';
        select.append(option);
        [...this.repairTypes].forEach((item) => {
            let option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            select.append(option);
            this.showRepairs(item);
        });
        this.filterRepairs();
    }
    clearRepaitTypes() {
        document.querySelector('#typeItem').textContent = '';
    }
    showRepairs(typeItem) {
        const tbody = document.querySelector('#tbody');
        this.repairList.forEach((item) => {
            if (item.type === typeItem) {
                let tr = document.createElement('tr');
                tr.classList.add('table__row');
                tr.innerHTML = `
                    <td class="table__id table__cell">${item.id}</td>
                    <td class="table-type table__cell">${item.type}</td>
                    <td class="table-name table__cell">${item.name}</td>
                    <td class="table-units table__cell">${item.units}</td>
                    <td class="table-cost table__cell">${item.cost}</td>
                    <td>
                        <div class="table__actions table__cell">
                            <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
                            </button>
                            <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
                            </button>
                        </div>
                    </td>
                `;
                tbody.append(tr);
            }
        });       
    }
    clearRepairList() {
        document.querySelector('#tbody').textContent = '';
    }
    filterRepairs() {
        const filter = document.querySelector('#typeItem');
        filter.addEventListener('change', () => {
            this.clearRepairList();
            if (filter.value === 'Все услуги') {
                [...this.repairTypes].forEach((item, index) => {
                    this.showRepairs(item, index);
                });
            }
            this.showRepairs(filter.value);
        });
    }
    addRepair(form) {
        if ([...this.inputs].every(input => input.value.trim())) {
            let body = {};
            this.inputs.forEach(input => {
                if (input.matches('#type')) {
                    body.type = input.value;
                } else if (input.matches('#name')) {
                    body.name = input.value;
                } else if (input.matches('#units')) {
                    body.units = input.value;
                } else if (input.matches('#cost')) {
                    body.cost = input.value;
                }
            });
            this.postData('http://localhost:3000/api/items', body, 'POST')
                .then(response => {
                    if (response.status !== 201) {
                        throw new Error('status network not 201');
                    } 
                })
                .then(() => {
                    this.getRepairs();
                    this.toggleModal('');
                })
                .catch(error => console.log(error));
        } else {
            form.querySelector('.button-ui_firm').style.opacity = '0.5';
        }
    }
    editRepair() {
        let body = {};
        this.inputs.forEach(input => {
            if (input.matches('#type')) {
                body.type = input.value;
            } else if (input.matches('#name')) {
                body.name = input.value;
            } else if (input.matches('#units')) {
                body.units = input.value;
            } else if (input.matches('#cost')) {
                body.cost = input.value;
            }
        });

        this.postData(`http://localhost:3000/api/items/${this.modal.dataset.idItem}`, body, 'PATCH')
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                } 
            })
            .then(() => {
                this.getRepairs();
                this.toggleModal('');
                this.cancel();
                this.modal.querySelector('h3').textContent = 'Добавение новой услуги';
            })
            .catch(error => console.log(error));

    }
    showEditModal(item) {
        this.modal.setAttribute('data-type-submit', 'edit');
        while (!item.matches('.table__row')) {
            item = item.parentElement;
        }
        this.inputs.forEach(input => {
            if (input.matches('#type')) {
                input.value = item.querySelector('.table-type').textContent;
            } else if (input.matches('#name')) {
                input.value = item.querySelector('.table-name').textContent;
            } else if (input.matches('#units')) {
                input.value = item.querySelector('.table-units').textContent;
            } else if (input.matches('#cost')) {
                input.value = item.querySelector('.table-cost').textContent;
            }
        });
        this.modal.setAttribute('data-id-item', `${item.querySelector('.table__id').textContent}`);
        this.toggleModal('flex');
    }
    hideEditModal() {
        this.modal.querySelector('h3').textContent = 'Добавение новой услуги';
        this.modal.removeAttribute('data-id-item');
        this.modal.removeAttribute('data-type-submit');
    }
    removeRepair(item) {
        while (!item.matches('.table__row')) {
            item = item.parentElement;
        }
        this.deleteData(`http://localhost:3000/api/items/${item.querySelector('.table__id').textContent}`)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
            })
            .then(() => {
                this.getRepairs();
            })
            .catch(error => console.log(error));
    }
    clearForm() {
        this.inputs.forEach(input => input.value = '');
    }
    cancel() {
        this.clearForm();
        this.hideEditModal();
    }
    toggleModal(style) {
        if (this.modal.dataset.typeSubmit) {
            this.modal.querySelector('h3').textContent = 'Изменение услуги';
        } else {
            this.modal.querySelector('h3').textContent = 'Добавение новой услуги';
        }
        this.modal.style.display = style;
    }
    checkInputs() {
        const checkInput = (item, regExp) => {
            let checkExp = regExp;
            if (checkExp.test(item)) {
                item.value = item.value.replace(checkExp, '');
            }
        };
        this.inputs.forEach(input => {
            input.addEventListener('input', (event) => {
                let target = event.target;
                if (target.matches('#type, #name')) {
                    checkInput(input, /[^а-яёa-z\:\;\,\-\.\(\)\*\" ]/i);
                } else if (target.matches('#units')) {
                    checkInput(input, /[^а-яёa-z0-9-\:\,\-\.\(\)\*\" ]/i);
                } else if (target.matches('#cost')) {
                    checkInput(input, /[^0-9\,\.]/);
                }
            });
            input.addEventListener('blur', (event) => {
                let target = event.target;
                if (target.matches('#type, #name')) {
                    input.value = input.value
                        .replace(/[^а-яёa-z\:\,\-\.\(\)\*\" ]+/i, '')
                        .replace(/\:+/, ':')
                        .replace(/\;+/, ';')
                        .replace(/\,+/, ',')
                        .replace(/\-+/, '-')
                        .replace(/\.+/, '.')
                        .replace(/\(+/, '(')
                        .replace(/\)+/, ')')
                        .replace(/\*+/, '*')
                        .replace(/\"+/, '"')
                        .replace(/ +/, ' ')
                        .replace(/^\:|\:$/, '')
                        .replace(/^\;|\;$/, '')
                        .replace(/^\,|\,$/, '')
                        .replace(/^\.|\.$/, '')
                        .replace(/^\-|\-$/, '')
                        .replace(/^ | $/, '');
                    input.value = `${input.value.slice(0, 1)
                        .toUpperCase()}${input.value
                        .slice(1)
                        .toLowerCase()}`;
                } else if (target.matches('#units')) {
                    input.value = input.value
                        .replace(/[^а-яёa-z0-9-\:\,\-\.\(\)\*\" ]+/i, '')
                        .replace(/\:+/, ':')
                        .replace(/\,+/, ',')
                        .replace(/\-+/, '-')
                        .replace(/\.+/, '.')
                        .replace(/\(+/, '(')
                        .replace(/\)+/, ')')
                        .replace(/\*+/, '*')
                        .replace(/\"+/, '"')
                        .replace(/ +/, ' ')
                        .replace(/^\:|\:$/, '')
                        .replace(/^\,|\,$/, '')
                        .replace(/^\.|\.$/, '')
                        .replace(/^\-|\-$/, '')
                        .replace(/^ | $/, '');
                }
            });
            input.addEventListener('focus', () => this.form.querySelector('.button-ui_firm').style.opacity = '');
        });
    }
    listeners() {
        document.body.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            if (target.matches('.btn-addItem') || target.closest('.btn-addItem')) {
                this.toggleModal('flex');
            } else if (target.matches('.icon__close') || target.matches('.modal__overlay')) {
                this.toggleModal('');
                    this.modal.removeAttribute('data-type-submit');
                this.clearForm();
            } else if (target.matches('.button-ui_firm') || target.closest('.button-ui_firm')) {
                if (this.modal.dataset.typeSubmit) {
                    this.editRepair();
                } else {
                    this.addRepair(this.form);
                }
            } else if (target.matches('.cancel-button') || target.closest('.cancel-button')) {
                this.cancel();
                this.toggleModal('');
                this.hideEditModal();
            } else if (target.matches('.action-change') || target.closest('.action-change')) {
                this.showEditModal(target);
            } else if (target.matches('.action-remove') || target.closest('.action-remove')) {
                this.removeRepair(target);
            } else {
                console.log(target)
            }
        });
    }
    postData(url, body, method) {
        return fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }
    deleteData(url) {
        return fetch(url, {
            method: 'DELETE'
        });
    }
}

const administration = new Administration();
administration.init();
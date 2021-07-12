import MaskPhone from "../maskPhone";

const checkPhone = () => {
    const maskPhone = new MaskPhone({
        selector: 'input[name="phone"]',
        masked:  '+7 (___)___-__-__'
    });
    maskPhone.start();
};
export default checkPhone;

//Test JS to test my W04 Learning Activities question 1 code. Linked to button on Index-old.html for verification

function test() {
    let esomeprazole = {
        'id': 'mnb78932',
        'amount': 23145,
        'amountType': 'ct',
        'expDate': '10/01/2021'
    };
    let dose = esomeprazole.amount;
    console.log("esomeprazole.amount ",dose);
    dose = esomeprazole['amount'];
    console.log("esomeprazole['amount']", dose);

}
document.querySelector('#test').addEventListener('click', test);
const calculateTip = () => {
    const billAmount = document.querySelector("#billAmount").value;
    const tipPercentage = document.querySelector("#tipPercentage").value;

    const tipAmount = billAmount * tipPercentage;
    const totalAmount = parseFloat(billAmount) + parseFloat(tipAmount);

    document.querySelector("#cash").textContent = `${totalAmount.toFixed(2)}`;
};
document.querySelector("#calculateBtn").addEventListener('click', calculateTip);
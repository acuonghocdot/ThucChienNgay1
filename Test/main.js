
function MyFunction() {
    var ValueMoney = document.getElementById("MyText")
    var Opption_Sale = document.getElementById("naan").value
    var People_Share_bil = document.getElementById("Number_Poeple");
    let Value = eval(ValueMoney.value * Opption_Sale / 100);
    Value = eval(Value / People_Share_bil.value);
    var TextMoney = document.getElementById("View_Money");
    if (ValueMoney.value == "") {
        alert("Nhập Lại")
    } else {
        TextMoney.textContent = String(Value)
    }





}


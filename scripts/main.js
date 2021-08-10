if (sessionStorage.getItem('valueMoney') == null) {

    let request = new XMLHttpRequest()
    request.open("GET", "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL", false)
    request.send()

    let valueRequest = request.responseText

    sessionStorage.setItem('valueMoney', valueRequest)

    valueGet(JSON.parse(sessionStorage.getItem('valueMoney')))

} else {

    valueGet(JSON.parse(sessionStorage.getItem('valueMoney')))

}



function valueGet(valueMoney) {

    let setEuro = document.getElementById('euro')
    let setDolar = document.getElementById('dolar')

    let dolar = parseFloat(valueMoney.USDBRL.bid)
    let euro = parseFloat(valueMoney.EURBRL.bid)

    setDolar.innerHTML = `${"R$ " + dolar.toFixed(2)}`

    setEuro.innerHTML = `${"R$ " + euro.toFixed(2)}`


}


function calcValue(selectCoin, valueCalc) {


    let valueMoney = JSON.parse(sessionStorage.getItem('valueMoney'))

   let selectedValue = document.getElementById(selectCoin)
   let value = selectedValue.options[selectedValue.selectedIndex].value
   let valueInput = document.getElementById(valueCalc).value
   let valueReturn = document.getElementById('value')
   let calcValue

   if (value == "euro") {

    calcValue = valueInput * parseFloat(valueMoney.EURBRL.bid)

    valueReturn.innerHTML = "R$ " + calcValue.toFixed(2)

   } else if (value == "dolar") {

    calcValue = valueInput * parseFloat(valueMoney.USDBRL.bid)

    valueReturn.innerHTML = "R$ " + calcValue.toFixed(2)
   }


}
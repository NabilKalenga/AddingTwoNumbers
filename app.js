function reset(){
  document.getElementById("txtNum1").value="0"
  document.getElementById("txtNum2").value="0"
  document.getElementById("txtTotal").value="0"
}

function add(){
    let num1 = Number(document.getElementById("txtNum1").value)
    let num2 = Number(document.getElementById("txtNum2").value)

    let sum= num1+num2
    //alert(sum)
    console.log(sum)
    document.getElementById("txtTotal").value=String(sum)
}
function subtract(){
    let num1 = Number(document.getElementById("txtNum1").value)
    let num2 = Number(document.getElementById("txtNum2").value)

    let sub= num1-num2
    //alert(sub)
    console.log(sub)
    document.getElementById("txtTotal").value=String(sub)
}



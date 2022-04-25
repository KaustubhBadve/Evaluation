// Store the wallet amount to your local storage with key "amount"



var allbalance=localStorage.getItem("amount")|| 0
document.getElementById("wallet").innerText=allbalance

function  addtowallet(){
    let input=document.querySelector("#amount").value

    allbalance=parseInt(allbalance)+parseInt(input)

    localStorage.setItem("amount",allbalance)

    document.getElementById("wallet").innerText=allbalance

    input.innerText=null
}
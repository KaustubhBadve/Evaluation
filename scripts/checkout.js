// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let checkoutwallet=localStorage.getItem("amount")

document.getElementById("wallet").innerText=checkoutwallet

let bookingmovie=JSON.parse(localStorage.getItem("movie"))

console.log("Hii",bookingmovie)
showmovie()

function showmovie()
{
    document.getElementById("movie").innerHTML=null

    let title=document.createElement("div")
       title.innerText=bookingmovie[0].Title

    let divimg=document.createElement("div")
    
    let imagee=document.createElement("img")
    imagee.src=bookingmovie[0].Poster

    divimg.append(imagee)

    document.getElementById("movie").append(title,divimg)
}


function confirmfun(){
    let seat=document.getElementById("number_of_seats").value
    let walletbal=document.getElementById("wallet").innerText

    console.log(seat)
    console.log(walletbal)

    var X=seat*100
    console.log(X)
    if(X>walletbal)
    {
        alert("Insufficient Balance!")
    }
    else{
        alert("Booking successful!")
        document.getElementById("wallet").innerText=walletbal-X

        checkoutwallet=walletbal-X
        localStorage.setItem("amount",checkoutwallet)
    }
}

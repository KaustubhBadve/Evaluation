// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


let walletbalanceonmovie=localStorage.getItem("amount")

document.getElementById("wallet").innerText=walletbalanceonmovie

async function Searchmovie(){
try{
   let search=document.getElementById("search").value

   let url=`https://www.omdbapi.com/?s=${search}&apikey=d56f268c`

    let res=await fetch(url)

    let data=await res.json()

    return data
   
}catch(err){
    console.log("err",err)
}
}

function appendata(data){
    let data1=data.Search
    document.getElementById("movies").innerHTML=null
    data1.forEach(function(elem){
    const main=document.createElement("div")
    main.setAttribute("id","main")

    const imgdiv=document.createElement("div")
    imgdiv.setAttribute("id","imgdiv")

    const img=document.createElement("img")
    img.src=elem.Poster

    imgdiv.append(img)

    const name=document.createElement("div")
    name.innerText=elem.Title

    const button=document.createElement("button")
    button.setAttribute("class","book_now")
    button.innerText="Book Now"

    button.addEventListener("click",function(){
        booknow(elem)
    })

    main.append(imgdiv,name,button)

    document.getElementById("movies").append(main)

})
}

var booking=[]

function booknow(elem){
   booking.push(elem)
   localStorage.setItem("movie",JSON.stringify(booking))
   window.location.href="checkout.html"
}



async function combine(){
    let dataa=await Searchmovie()
      if(dataa===undefined)
      {
          return false
      }

    appendata(dataa)
}


let id;
function Debouncing(func,delay)
{
if(id){
    clearTimeout(id)
}
id=setTimeout(function(){
    func()
},delay)
}


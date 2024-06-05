//to display the block
var popupoverlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".pop-up-box")
var popupbutton=document.getElementById("pop-up-button")
popupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
//for cancel the popup
var cancelpopup=document.getElementById("cancel-book")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
//for adding
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookAuthorinput=document.getElementById("book-Author-input")
var ShortDescriptioninput=document.getElementById("Short-Description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
 var div=document.createElement("div")
 div.setAttribute("class","book-container")
 div.innerHTML=`<h2>${booktitleinput.value}</h2>
 <h5>${bookAuthorinput.value}</h5>
 <p>${ShortDescriptioninput.value}</p>
 <button onclick="deletebook(event)">Delete</button>`
 container.append(div)
 popupoverlay.style.display="none"
 popupbox.style.display="none"
})


function deletebook(event)
{
    event.target.parentElement.remove()
}


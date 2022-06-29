const nav1 = (document.getElementsByTagName("li")[0]);
const nav2 = (document.getElementsByTagName("li")[1]);
const nav3 = (document.getElementsByTagName("li")[2]);
nav1.addEventListener("click", function(){
    console.log("Popular places was clicked") 
});

nav2.addEventListener('click', function(){
    console.log("Travel outside was clicked")
});

nav2.addEventListener('click', function(){
    console.log("Services was clicked")
});
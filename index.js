grade =prompt("Enter your grade please :");

const App = document.querySelector("#app");


if(grade >= 50){

    App.innerHTML= `Passed`
}else{
    App.innerHTML="Failed"
}




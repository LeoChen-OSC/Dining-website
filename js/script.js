function show(){
    document.getElementById("green").classList.toggle("show");
    //activates the class "show" with the elemend id green

}
window.onclick = function(event){
//detects if the user clicks on the window and triggers the function
    if(!event.target.matches('.toggle-menu')){ //if the user clicks outside of the dropdown button
        var dropdowns = document.getElementsByClassName("menu-content");
        //this stores the elemnts in menu-content class in a variable called dropdowns
        var i;
        for(i=0; i<dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            //this looks checks if the dropdown menu is open by checking if it has the class "show"
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        //
        }
        
       
    }
}
function redirectlogin(){
    window.location.href = "login.html";
}
function redirectcart(){
    window.location.href = "cart.html";
}
onbeforeunload = function() {
    this.alert("Are you sure you want to leave? Your cart will be cleared.");
}

new Swiper("#swiper1",{
//creates a new swiper using #swiper1

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});
user = document.getElementById("username");
pass =  document.getElementById("password")
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $(".side-nav .collapse").on("hide.bs.collapse", function() {                   
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
    });
    $('.side-nav .collapse').on("show.bs.collapse", function() {                        
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");        
    });
})    
function logIn() {
    // get user input
    var user = user.value;
    var pass = pass.value;
  
    // check if username and password are correct
   
    if (user === "1" && pass === "1") {
      window.location.href = "http://127.0.0.1:5500/asm.html";
    } else if (user === "worker" && pass === "password") {
      // go to worker mode page
      window.location.href = "http://127.0.0.1:5500/asm.html";
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  }
  
  function openPopup() {
    // Create a new window
    var popupWindow = window.open("", "popup", "width=300,height=150");
  
    // Add a text box to the window
    var textbox = document.createElement("input");
    textbox.type = "text";
    textbox.style.width = "100%";
    popupWindow.document.body.appendChild(textbox);
  }
  
  // Add an onclick event listener to the link
  document.querySelector(".links_name").onclick = openPopup;



var theme = getCookie("theme");

//alert(theme);
if (theme == "" || theme == "light") {
  document.documentElement.setAttribute("data-bs-theme", "light");
  changeBtnTheme("dark")
  document.cookie = "theme=light;path=/";
} else {
  document.documentElement.setAttribute("data-bs-theme", "dark");
  changeBtnTheme("light")
  document.cookie = "theme=dark;path=/";
}

try {
    document.getElementById("theme_btn").addEventListener("click", changeTheme);
} catch (error) {  }

function changeTheme(){
    theme = getCookie("theme");
    
    if (theme == "" || theme == "light") {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        changeBtnTheme("light")
        document.cookie = "theme=dark;path=/";
    } 
    else {
        document.documentElement.setAttribute("data-bs-theme", "light");
        changeBtnTheme("dark")
        document.cookie = "theme=light;path=/";
    }
}


function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function changeBtnTheme(theme){
    var themeBtnClassArray = document.getElementById('theme_btn').className.split(" ");
    var newThemeBtnClass = "";
    if(theme == "light" || theme == ""){
        themeBtnClassArray.forEach(element =>{
            if(element == "btn-secondary"){
                newThemeBtnClass = newThemeBtnClass + " btn-light";
            }
            else {
                newThemeBtnClass = newThemeBtnClass + " " + element;
            }
            document.getElementById('theme_btn').className = newThemeBtnClass;
            document.getElementById('theme_btn').innerText = "light☀️"
        })
    }
    else{
        themeBtnClassArray.forEach(element =>{
            if(element == "btn-light"){
                newThemeBtnClass = newThemeBtnClass + " btn-secondary";
            }
            else if(element == ""){
                
            }
            else {
                newThemeBtnClass = newThemeBtnClass + " " + element;
            }
            document.getElementById('theme_btn').className = newThemeBtnClass;
            document.getElementById('theme_btn').innerText = "dark🌙"

        })
    }
}
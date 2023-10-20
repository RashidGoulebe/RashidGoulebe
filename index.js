var theme = ""; // Eventuell über Cookies


document.getElementById('theme_btn').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light');
        theme = 'light';
    }
    else {
        theme = document.documentElement.setAttribute('data-bs-theme','dark');
        theme = 'dark';
    }
    console.log(document.documentElement.getAttribute('data.bs-theme'))
})

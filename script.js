function jump(li) {
    id = li.getAttribute("value") + "-container";
    document.getElementById(id).scrollIntoView();
}

const element = document.getElementById('todaysYear');
element.innerText = new Date().getFullYear();

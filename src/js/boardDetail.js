const currentURL = window.location.href;
const pathArray = window.location.pathname.split('/');
const postId = pathArray[pathArray.length - 1];

const title = document.querySelector("#title");
const content = document.querySelector("#content");
const count = document.querySelector("#count");
const deleteButton = document.querySelector("#delete");
const updateButton = document.querySelector("#update");

fetch(`/boardList/${postId}/api`)
.then(response => response.json())
.then(data => {
    const dataTitle = data.title;
    const dataContent = data.content;
    const dataCount = data.count;
    title.innerHTML = dataTitle;
    content.innerHTML = dataContent;
    count.innerHTML = dataCount;
});

deleteButton.addEventListener("click", () => {
    fetch(`/delete/${postId}`)
    .then(response => {
        if(response.ok) {
            return response.text();
        }
    })
    .then((data)=> {
        alert(data);
        if(data === "success"){
            window.location.href = "/boardList";
        }
    })  
});

updateButton.addEventListener("click", () => {
    window.location.href = `/boardUpdate/${postId}`;
});
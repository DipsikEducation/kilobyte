import { fetchSelectedCategory } from "./fetchAPI";
import { seeMoreBtn, categoriesList } from "./homeRender";
import iziToast from "izitoast";
const listForRender = document.querySelector(".home-categories-list");
const sectionTitle = document.querySelector(".main-category-title");

export function LoadHomeCategory(data) {
    const categoryTitle = data;
    console.log(data);
    fetchSelectedCategory(categoryTitle)
    .then((category) => {
        if(Object.keys(category.data).length !== 0 ){
            categoriesList.innerHTML = "";
            renderCategoryBooks(category.data, categoryTitle);
        }
        else {
            listForRender.innerHTML = "";
            iziToast.error({
                message: "Sorry, there are no books to render",
                position: `topRight`,
            });
        }
    })
    .catch((error) =>{
        console.log('Error loading data:', error)
        iziToast.info({
            message: "Sorry, there are no books to render",
            position: `topRight`,
            timeout: 3000,
            progressBar: false,
            title: 'Error',
            // ...optionsIziToastError
        });
    })
}
function renderCategoryBooks(category, listName){
    const markupCategoryBooks = category
    .map((book) => {
        return `
        <li class="home-books-item" id="${book._id}">
            <div class="home-book-wrapper">
                <img class="book-image" src="${book.book_image}" alt="${book.title}">
            </div>
            <div class="image-overlay"><p class="image-overlay-text">QUICK VIEW</p></div>
            <div class="book-info">
                <p class="book-info-title">${book.title}</p>
                <p class="book-info-author">${book.author}</p>
            </div>
        </li>`
    })
    .join("");
    listForRender.insertAdjacentHTML("beforeend", markupCategoryBooks);
    const titleArr = listName.split(" ")
    if(titleArr.length > 3){
        const middleWord = titleArr[Math.round((titleArr.length - 1) / 2)]
        let forTitle = listName.split(middleWord).join(" ");
        forTitle = forTitle.replace(titleArr[titleArr.length-1], `<span class="main-category-title-span">${titleArr[titleArr.length-1]}</span>`)
        sectionTitle.innerHTML = forTitle
    }
    else{
        listName = listName.replace(titleArr[titleArr.length-1], `<span class="main-category-title-span">${titleArr[titleArr.length-1]}</span>`)
        sectionTitle.innerHTML = listName
    }
}
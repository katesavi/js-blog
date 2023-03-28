'use strict';
console.log('test1');
function titleClickHandler(event){
  const clickedElement = this;
  for(let activeLink of activeLinks) { 
    activeLink.classList.add('active');
    event.preventDefault();
  }
  
  
``
}
  console.log('Link was clicked!');

  

  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}
console.log('clickedElement:', clickedElement);
  /* add class 'active' to the clicked link */

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll(' .titles a.active');
  console.log(activeArticles)

for(let activeArticle of activeArticles){
  activeLink.classList.remove('active');
}

  /* get 'href' attribute from the clicked link */
const articleSelector = clickedElement.getAttribute('#article-1')




  /* find the correct article using the selector (value of 'href' attribute) */
const targetArticle = document.querySelector('#article-2');
console.log('article-2');
  /* add class 'active' to the correct article */


const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
console.log('articleSelector');
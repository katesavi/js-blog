'use strict';
console.log('test1');
function titleClickHandler(event){
}
  console.log('Link was clicked!');

  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');

}

  /* add class 'active' to the clicked link */

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll(' .titles a.active');
  console.log(activeArticles)

for(let activeArticle of activeArticles){
  activeLink.classList.remove('active');
}

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */


const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
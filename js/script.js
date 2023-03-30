'use strict';
const links = document.querySelectorAll('.titles a');
const articles = document.querySelectorAll('.post');

// dodaje listener do wszystkich linków (aby uruchamiała się funkcja titleClickHandler po kliknięciu)
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

function titleClickHandler(event){
  // blokujemy domyślne zachowanie przeglądarki (zmiana adresu url)
  event.preventDefault();

  // usuń klasę active ze wszystkich linków na liście tytułów,
  for(let activeLink of links){
    activeLink.classList.remove('active');
  }

  // dodaj klasę active do klikniętego linka,
  const clickedElement = this;
  clickedElement.classList.add('active');

  // ukryj wszystkie artykuły:
  // usuń klasę active ze wszystkich artykułów,
  for(let article of articles) {
    article.classList.remove('active');
  }

  // znajdź artykuł do wyświetlenia:
  // z klikniętego linka weź zawartość atrybutu href, np. #article-2,
  const articleId = clickedElement.getAttribute('href')

  // znajdź na stronie element pasujący do selektora takiego, jak wartość atrybutu href, np. #article-2 – czyli szukamy elementu o id="article-2",
  const targetArticle = document.querySelector(articleId);

  // wyświetl znaleziony artykuł:
  // dodaj klasę active do znalezionego artykułu.
  targetArticle.classList.add('active');
}


const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks(){
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles) {
    const id = article.getAttribute('id');
    console.log(id);
    const title = article.querySelector('.post-title').innerHTML;
    const linkHTML = '<li><a href="#' + id + '"><span>' + title + '</span></a></li>';
    console.log(linkHTML);
    titleList.innerHTML = titleList.innerHTML + linkHTML;

  }

  /* get the article id */

  /* find the title element */

  /* get the title from the title element */

  /* create HTML of the link */

  /* insert link into titleList */

}

generateTitleLinks();
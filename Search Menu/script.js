const search = document.querySelector('.search');
const li = document.querySelectorAll('.item');

search.addEventListener('keyup', () => {
  let filter = search.value.toUpperCase();
  for (let i = 0; i < li.length; i++) {
    a = li[i].querySelectorAll('a')[0];

    // if value of 'a' and 'filter' doesn't match it returns -1; 
    if (a.innerText.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = ''
    } else {
      li[i].style.display = 'none'
    }
  }
})
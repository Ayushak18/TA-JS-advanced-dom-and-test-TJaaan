let count = 0;

function fet() {
  for (let i = 0; i <= 10; i++) {
    let para = document.createElement('p');
    let paraAuth = document.createElement('p');
    para.innerText = quotes[count].quoteText;
    paraAuth.innerText = quotes[count].quoteAuthor;
    document.body.append(para, paraAuth);
    count = count + 1;
  }
}

fet();

document.addEventListener('scroll', () => {
  let scrollTop = document.documentElement.scrollTop;
  let clientHeight = document.documentElement.clientHeight;
  let scrollHeight = document.documentElement.scrollHeight;
  if (scrollTop + clientHeight >= scrollHeight && count < quotes.length) {
    fet();
    console.log(scrollTop, clientHeight, scrollHeight);
  }
});

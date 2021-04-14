for (let i = 0; i <= 10; i++) {
  let para = document.createElement('p');
  let paraAuth = document.createElement('p');
  para.innerText = quotes[i].quoteText;
  paraAuth.innerText = quotes[i].quoteAuthor;
  document.body.append(para, paraAuth);
}

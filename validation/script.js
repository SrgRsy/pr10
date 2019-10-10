const testForm = document.querySelector('.test');
regex = /[А-Я]{1,1}[а-я]+\-?\W+/;
text = "Анна-Мария";
console.log(text.match(regex));
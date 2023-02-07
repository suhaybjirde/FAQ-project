let articles = document.querySelectorAll('.wrapper');
let questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', (e)=> {
        let targetParent = e.target.parentElement.parentElement;
        e.preventDefault()
        if (!(targetParent.classList.contains('expended') || targetParent.parentElement.classList.contains('expended'))) {
            articles.forEach(article => article.classList.remove('expended'));  
        }
        question.parentElement.classList.toggle('expended')
        console.log(e.target.parentElement)
    })
})
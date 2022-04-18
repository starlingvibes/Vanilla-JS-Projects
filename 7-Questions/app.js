// Method of traversing the dom
// const showAnswer = document.querySelectorAll('.question-btn');

// showAnswer.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const selected = e.currentTarget.parentElement.parentElement;
//     selected.classList.toggle('show-text');
//   });
// });

// Method of using selectors inside the element
const question = document.querySelectorAll('.question');

question.forEach(function (item) {
  const btns = item.querySelector('.question-btn');
  btns.addEventListener('click', function () {
    question.forEach(function (quiz) {
      if (quiz !== item) {
        quiz.classList.remove('show-text');
      }
    });
    item.classList.toggle('show-text');
  });
});

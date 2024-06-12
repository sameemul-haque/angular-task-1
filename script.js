document.addEventListener('DOMContentLoaded', function () {
    const questionNumbers = document.querySelectorAll('.question-number');

    questionNumbers.forEach(qn => {
        qn.addEventListener('click', function () {
            document.querySelector('.question-number.selected').classList.remove('selected');
            this.classList.add('selected');
        });
    });
});

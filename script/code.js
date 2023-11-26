document.getElementById('btnSubmit').addEventListener('click', function(){

    let input = document.querySelector('[data-input]').value;
    let seconds = input * 60; document.querySelector('[data-output]').textContent = seconds;

});

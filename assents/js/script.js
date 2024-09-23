function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/images/menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/images/close.svg";
    }
}



const form = document.getElementById('form');


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let descricao = '';

    value.classList.add('atencao');

    document.getElementById('infos').classList.remove('hidden');

    if ( imc < 18.5 ) {
        descricao = 'Cuidado! Você está abaixo do peso ideal! :(';
    } else if ( imc >= 18.5 && imc <=25 ) {
        descricao = 'Você está no peso ideal! :)';
        value.classList.remove('atencao');
        value.classList.add('normal');
    } else if ( imc >= 25 && imc <=30) {
        descricao = 'Cuidado! Você está com sobrepeso! :(';
    } else if ( imc >= 30 && imc <=35 ) {
        descricao = 'Cuidado! Você está com obesidade moderada! :(';
    } else if ( imc >= 35 && imc <=40 ) {
        descricao = 'Cuidado! Você está com obesidade severa! :(';
    } else {
        descricao = 'Cuidado! Você está com obesidade morbida! :('
    }

    value.textContent = imc.replace('.', ',');
    document.getElementById('descricao').textContent = descricao;
});
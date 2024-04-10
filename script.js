const button = document.querySelector('button')
const degree1 = document.querySelector('#degree1')
const degree2 = document.querySelector('#degree2')
const temperature1 = document.querySelector('#temperature1')
const temperature2 = document.querySelector('#temperature2')
const Container = document.querySelector('#Container')
const Result = document.querySelector('#Result')

button.onclick = () => {
    const input = Number(document.querySelector('input').value)
    const select = document.querySelector('select').value

    if(input == '') {
        alert('Digite um valor!')
    } else if(select == 'Selecione a temperatura'){
        alert('Escolha uma temperatura!')
    } else if(select == 'Celsius'){
        ConverterCelsius()
        ExpandirContainer()
        ExibirResultado()
    } else if(select == 'Fahrenheit'){
        ConverterFahrenheit()
        ExpandirContainer()
        ExibirResultado()
    } else if(select == 'Kelvin'){
        ConverterKelvin()
        ExpandirContainer()
        ExibirResultado()
    }

    function ConverterCelsius(){
        Result.innerHTML = `<h1>Resultado:</h1>
        <div class="result">
            <p id="temperature1">Fahrenheit</p>
            <p class="Degree" id="degree1">${input * 1.8 + 32}</p>
        </div>
        <div class="result">
            <p id="temperature2">Kelvin</p>
            <p class="Degree" id="degree2">${input + 273.15}</p>
        </div>`
    }
    function ConverterFahrenheit(){
        Result.innerHTML = `<h1>Resultado:</h1>
        <div class="result">
            <p id="temperature1">Graus celsius</p>
            <p class="Degree" id="degree1">${(input - 32) / 1.8}</p>
        </div>
        <div class="result">
            <p id="temperature2">Kelvin</p>
            <p class="Degree" id="degree2">${(input - 32) * 5/9 + 273.15}</p>
        </div>`
    }
    function ConverterKelvin(){
        Result.innerHTML = `<h1>Resultado:</h1>
        <div class="result">
            <p id="temperature1">Graus celsius</p>
            <p class="Degree" id="degree1">${input - 273.15}</p>
        </div>
        <div class="result">
            <p id="temperature2">Fahrenheit</p>
            <p class="Degree" id="degree2">${(input - 273.15) * 1.8 + 32}</p>
        </div>`
    }
    
    function ExpandirContainer (){
        Container.style.height = '400px';
        Container.style.transition = '0.3s'
    }
    
    function ExibirResultado(){
        Result.style.height = '150px';
    }   
}
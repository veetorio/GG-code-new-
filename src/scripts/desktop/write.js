const helloWorld = `
    def main() : 
        nome = input("qual seu nome ? :");
        print('seu nome é ' + nome)
    
    if __name__ == "__main__":
        main();
    
`
const php = `
<?php
    // Declaração de variáveis
    $nome = "João"; 

    // Definição de função
    function saudacao($nome) {
    echo " Seu nome è $nome!";
    }

    // Chamada de função
    saudacao($nome);
?>

`
let value;
const span = document.getElementById('out')
const up = document.getElementById('upload')
const inp = document.getElementById('reader')
const read = document.getElementById('read')
const text = document.querySelector('textarea')
let count = 0;
const init = (lang) => {
    let position_element = text.getBoundingClientRect()
    let x = position_element.bottom
    let y = position_element.top
    let dif = (x <= innerHeight && y <= innerHeight)
    if (dif) timer(lang);
    removeEventListener('scroll', () => {
        console.log(1)
    }, false)


}
const tela = window.addEventListener('scroll', () => {
    const title = document.title
    switch (title) {
        case 'python':
            init(helloWorld);
            break
        case 'php':
            init(php);
            break
    }
})


function timer(lang) {
    let pointer = setInterval(() => {
        if (count < lang.length) {
            text.textContent += lang[count]
            count++;
        } else {
            up.textContent = '  C: Users\GG-Code\projects > python main.py'
            read.style.display = 'block'
            clearInterval(pointer)
        }
    }, 500)
}

document.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        value = inp.value;
        span.textContent = '    seu nome é ' + value
    }
})
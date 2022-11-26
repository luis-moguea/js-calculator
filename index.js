const container = document.querySelector("#main")

let element = /*html*/`
<div class="main__calc">
    <div class="hero">
        <div class="hero__title">
            <p class="hero__title--text">CALC</p>
        </div>
        <div class="hero__themes">
            <p class="hero__themes--text">V-</p>
            <p class="hero__themes--text">1.0</p>
        </div>
    </div>
    <div class="main__buttons--display">
        <div class="main__buttons--display--result"></div>
        <div class="main__buttons--display--values"></div>
    </div>
    <div class="main__buttons">
        <button class="main__buttons--number">7</button>
        <button class="main__buttons--number">8</button>
        <button class="main__buttons--number">9</button>
        <button class="main__buttons--blue">&larr;</button>
        <button class="main__buttons--number">4</button>
        <button class="main__buttons--number">5</button>
        <button class="main__buttons--number">6</button>
        <button class="main__buttons--operator">+</button>
        <button class="main__buttons--number">1</button>
        <button class="main__buttons--number">2</button>
        <button class="main__buttons--number">3</button>
        <button class="main__buttons--operator">-</button>
        <button class="main__buttons--number">.</button>
        <button class="main__buttons--number">0</button>
        <button class="main__buttons--operator">/</button>
        <button class="main__buttons--operator">x</button>
        <button class="main__buttons--operator--blue--colums">RESET</button>
        <button class="main__buttons--operator--orange--colums">=</button>
    </div>
</div>`

container.innerHTML += element

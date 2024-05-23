'use strict';

document.addEventListener('DOMContentLoaded', () => {
    class Card {
        constructor (imgsrc, alt, title, description, cardClass, parentSelector) {
            this.imgsrc = imgsrc;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.cardClass = cardClass;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const block = document.createElement('div');
            block.classList.add(`card`);
            block.classList.add(this.cardClass);
            block.innerHTML = `
                <img src='${this.imgsrc}' alt='${this.alt}' class="img smaller">
                <div class="decor-shape"></div>
                <div class="text--block">
                    <span class="title">${this.title}</span>
                    <p class="text">${this.description}</p>
                </div> `;

            this.parent.append(block);
        }
    }

    function addBlocks() {
        new Card(
            "./img/headphones.png",
            'Headphones Image',
            'SIMPLICITY',
            'Innovative headphones that deliver superior sound quality with noise-cancellation technology. Perfect for music lovers and professionals needing high-fidelity audio.',
            'card-1',
            '.cards__container'
        ).render();

        new Card(
            "./img/gamepad.png",
            'Gamepad Image',
            'DESIGN',
            'Sleek and ergonomic gamepad designed for ultimate comfort and control. Enhances your gaming experience with responsive buttons and a durable build.',
            'card-2',
            '.cards__container'
        ).render();

        new Card(
            "./img/gpu.png",
            'GPU Image',
            'CLARITY',
            'High-performance GPU engineered for intensive gaming and graphic design. Provides exceptional rendering speeds and supports the latest graphics technologies.',
            'card-3',
            '.cards__container'
        ).render();
    }

    addBlocks();
})
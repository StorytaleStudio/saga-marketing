const cardTemplateIllusion = document.querySelector('[data-user-template="illusion"]')

fetch('./spells.json')
    .then(res => res.json())
    .then(data => {
        const card = cardTemplateIllusion.textContent.cloneNode(true).children[0]
        console.log(card)
    });



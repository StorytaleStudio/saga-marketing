const cardTemplateIllusion = document.querySelector('[data-user-template="illusion"]')

fetch('../../../js/spells.json')
    .then(res => res.json())
    .then(data => {
        const card = cardTemplateIllusion.textContent.cloneNode(true).children[0]
        console.log(card)
    });



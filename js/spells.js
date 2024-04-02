const cardTemplateIllusion = document.querySelector('[data-user-template="illusion"]')
const spellList = document.querySelector("[data-spell-cards]")

fetch('../../../js/spells.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(spell => {
            const card = cardTemplateIllusion.content.cloneNode(true).children[0];
            const name = card.querySelector("[data-name]")
            const school = card.querySelector("[data-school]")
            const level = card.querySelector("[data-level]")
            const teaser = card.querySelector("[data-teaser]")
            name.textContent = spell.spell_name;
            school.textContent = spell.school;
            level.textContent = spell.level;
            teaser.textContent = spell.teaser;
            spellList.append(card)
            console.log(card)
        })
    });



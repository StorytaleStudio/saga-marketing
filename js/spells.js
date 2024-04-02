const cardTemplateIllusion = document.querySelector('[data-user-template="illusion"]')
const cardTemplateEvocation = document.querySelector('[data-user-template="evocation"]')
const cardTemplateAbjuration = document.querySelector('[data-user-template="abjuration"]')
const cardTemplateDivination = document.querySelector('[data-user-template="divination"]')
const cardTemplateEnchantment = document.querySelector('[data-user-template="enchantment"]')
const cardTemplateTransmutation = document.querySelector('[data-user-template="transmutation"]')
const cardTemplateConjuration = document.querySelector('[data-user-template="conjuration"]')
const cardTemplateNecromancy = document.querySelector('[data-user-template="necromancy"]')

const spellList = document.querySelector("[data-spell-cards]")
const searchInput = document.querySelector("[data-search]");

let spells = [];

searchInput.addEventListener("input", e=> {
    const value = e.target.value;
    console.log(value)
})


fetch('../../../js/spells.json')
    .then(res => res.json())
    .then(data => {
        spells = data.map(spell => {
            if (spell.school.toLowerCase() == "illusion") {
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
            } else if (spell.school.toLowerCase() == 'evocation') {
                const card = cardTemplateEvocation.content.cloneNode(true).children[0];
                const name = card.querySelector("[data-name]")
                const school = card.querySelector("[data-school]")
                const level = card.querySelector("[data-level]")
                const teaser = card.querySelector("[data-teaser]")
                name.textContent = spell.spell_name;
                school.textContent = spell.school;
                level.textContent = spell.level;
                teaser.textContent = spell.teaser;
                spellList.append(card)
            } else if (spell.school.toLowerCase() == 'abjuration') {
                const card = cardTemplateAbjuration.content.cloneNode(true).children[0];
                const name = card.querySelector("[data-name]")
                const school = card.querySelector("[data-school]")
                const level = card.querySelector("[data-level]")
                const teaser = card.querySelector("[data-teaser]")
                name.textContent = spell.spell_name;
                school.textContent = spell.school;
                level.textContent = spell.level;
                teaser.textContent = spell.teaser;
                spellList.append(card)
            } else if (spell.school.toLowerCase() == 'divination') {
                const card = cardTemplateDivination.content.cloneNode(true).children[0];
                const name = card.querySelector("[data-name]")
                const school = card.querySelector("[data-school]")
                const level = card.querySelector("[data-level]")
                const teaser = card.querySelector("[data-teaser]")
                name.textContent = spell.spell_name;
                school.textContent = spell.school;
                level.textContent = spell.level;
                teaser.textContent = spell.teaser;
                spellList.append(card)
            } else if (spell.school.toLowerCase() == 'enchantment') {
                const card = cardTemplateEnchantment.content.cloneNode(true).children[0];
                const name = card.querySelector("[data-name]")
                const school = card.querySelector("[data-school]")
                const level = card.querySelector("[data-level]")
                const teaser = card.querySelector("[data-teaser]")
                name.textContent = spell.spell_name;
                school.textContent = spell.school;
                level.textContent = spell.level;
                teaser.textContent = spell.teaser;
                spellList.append(card)
            } else if (spell.school.toLowerCase() == 'transmutation') {
                const card = cardTemplateTransmutation.content.cloneNode(true).children[0];
                const name = card.querySelector("[data-name]")
                const school = card.querySelector("[data-school]")
                const level = card.querySelector("[data-level]")
                const teaser = card.querySelector("[data-teaser]")
                name.textContent = spell.spell_name;
                school.textContent = spell.school;
                level.textContent = spell.level;
                teaser.textContent = spell.teaser;
                spellList.append(card)
            } else if (spell.school.toLowerCase() == 'conjuration') {
                const card = cardTemplateConjuration.content.cloneNode(true).children[0];
                const name = card.querySelector("[data-name]")
                const school = card.querySelector("[data-school]")
                const level = card.querySelector("[data-level]")
                const teaser = card.querySelector("[data-teaser]")
                name.textContent = spell.spell_name;
                school.textContent = spell.school;
                level.textContent = spell.level;
                teaser.textContent = spell.teaser;
                spellList.append(card)
            } else {
                const card = cardTemplateNecromancy.content.cloneNode(true).children[0];
                const name = card.querySelector("[data-name]")
                const school = card.querySelector("[data-school]")
                const level = card.querySelector("[data-level]")
                const teaser = card.querySelector("[data-teaser]")
                name.textContent = spell.spell_name;
                school.textContent = spell.school;
                level.textContent = spell.level;
                teaser.textContent = spell.teaser;
                spellList.append(card)
                return {name: spell.spell_name, element: card}
            }
            

        })
    });



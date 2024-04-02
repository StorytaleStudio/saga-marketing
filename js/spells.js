const cardTemplateIllusion = document.querySelector('[data-user-template="illusion"]')
const cardTemplateEvocation = document.querySelector('[data-user-template="evocation"]')
const cardTemplateAbjuration = document.querySelector('[data-user-template="abjuration"]')
const cardTemplateDivination = document.querySelector('[data-user-template="divination"]')
const cardTemplateEnchantment = document.querySelector('[data-user-template="enchantment"]')
const cardTemplateTransmutation = document.querySelector('[data-user-template="transmutation"]')
const cardTemplateConjuration = document.querySelector('[data-user-template="conjuration"]')
const cardTemplateNecromancy = document.querySelector('[data-user-template="necromancy"]')

const spellList = document.querySelector("[data-spell-cards]")

fetch('../../../js/spells.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(spell => {
            const card = '';
            if (spell.school == "illusion") {
                card = cardTemplateIllusion.content.cloneNode(true).children[0];
            } else if (spell.school == 'evocation') {
                card = cardTemplateEvocation.content.cloneNode(true).children[0];
            } else if (spell.school == 'abjuration') {
                card = cardTemplateAbjuration.content.cloneNode(true).children[0];
            } else if (spell.school == 'divination') {
                card = cardTemplateDivination.content.cloneNode(true).children[0];
            } else if (spell.school == 'enchantment') {
                card = cardTemplateEnchantment.content.cloneNode(true).children[0];
            } else if (spell.school == 'transmutation') {
                card = cardTemplateTransmutation.content.cloneNode(true).children[0];
            } else if (spell.school == 'conjuration') {
                card = cardTemplateConjuration.content.cloneNode(true).children[0];
            } else {
                card = cardTemplateNecromancy.content.cloneNode(true).children[0];
            }
            
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



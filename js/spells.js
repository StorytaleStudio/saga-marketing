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
    const value = e.target.value.toLowerCase();
    spells.forEach(spell => {
        const isVisible = spell.name.toLowerCase().includes(value);
        spell.element.classList.toggle("hide", !isVisible)
    })
})


var allCheckboxes = document.querySelectorAll('[data-checkbox]');
var checked = {};

allCheckboxes.forEach(e => {
    e.addEventListener("click", () => {
        const checkVal = e.querySelector("[type='checkbox']").getAttribute("id");
        console.log(checkVal)
    })
})


const kebabCase = string => string
    .toLowerCase()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

    
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
                // link.setAttribute('href', kebabCase(spell.spell_name));
                card.setAttribute('href', kebabCase(spell.spell_name)); 
                name.textContent = spell.spell_name;
                school.textContent = spell.school;
                level.textContent = spell.level;
                teaser.textContent = spell.teaser;
                spellList.append(card)
                return {name: spell.spell_name, school: spell.school, level: spell.level, ritual: spell.ritual, concentration: spell.concentration, classes: spell.classes, category: spell.category, element: card}
            } else if (spell.school.toLowerCase() == 'evocation') {
                const card = cardTemplateEvocation.content.cloneNode(true).children[0];
                const name = card.querySelector("[data-name]")
                const school = card.querySelector("[data-school]")
                const level = card.querySelector("[data-level]")
                const teaser = card.querySelector("[data-teaser]")
                // const link = card.querySelector("[data-link]")
                // link.setAttribute('href', kebabCase(spell.spell_name)); 
                card.setAttribute('href', kebabCase(spell.spell_name));
                name.textContent = spell.spell_name;
                school.textContent = spell.school;
                level.textContent = spell.level;
                teaser.textContent = spell.teaser;
                spellList.append(card)
                                return {name: spell.spell_name, school: spell.school, level: spell.level, ritual: spell.ritual, concentration: spell.concentration, classes: spell.classes, category: spell.category, element: card}

            } else if (spell.school.toLowerCase() == 'abjuration') {
                const card = cardTemplateAbjuration.content.cloneNode(true).children[0];
                const name = card.querySelector("[data-name]")
                const school = card.querySelector("[data-school]")
                const level = card.querySelector("[data-level]")
                const teaser = card.querySelector("[data-teaser]")
                // const link = card.querySelector("[data-link]")
                // link.setAttribute('href', kebabCase(spell.spell_name)); 
                card.setAttribute('href', kebabCase(spell.spell_name));
                name.textContent = spell.spell_name;
                school.textContent = spell.school;
                level.textContent = spell.level;
                teaser.textContent = spell.teaser;
                spellList.append(card)
                                return {name: spell.spell_name, school: spell.school, level: spell.level, ritual: spell.ritual, concentration: spell.concentration, classes: spell.classes, category: spell.category, element: card}

            } else if (spell.school.toLowerCase() == 'divination') {
                const card = cardTemplateDivination.content.cloneNode(true).children[0];
                const name = card.querySelector("[data-name]")
                const school = card.querySelector("[data-school]")
                const level = card.querySelector("[data-level]")
                const teaser = card.querySelector("[data-teaser]")
                // const link = card.querySelector("[data-link]")
                // link.setAttribute('href', kebabCase(spell.spell_name));
                card.setAttribute('href', kebabCase(spell.spell_name)); 
                name.textContent = spell.spell_name;
                school.textContent = spell.school;
                level.textContent = spell.level;
                teaser.textContent = spell.teaser;
                spellList.append(card)
                                return {name: spell.spell_name, school: spell.school, level: spell.level, ritual: spell.ritual, concentration: spell.concentration, classes: spell.classes, category: spell.category, element: card}

            } else if (spell.school.toLowerCase() == 'enchantment') {
                const card = cardTemplateEnchantment.content.cloneNode(true).children[0];
                const name = card.querySelector("[data-name]")
                const school = card.querySelector("[data-school]")
                const level = card.querySelector("[data-level]")
                const teaser = card.querySelector("[data-teaser]")
                // const link = card.querySelector("[data-link]")
                // link.setAttribute('href', kebabCase(spell.spell_name));
                card.setAttribute('href', kebabCase(spell.spell_name)); 
                name.textContent = spell.spell_name;
                school.textContent = spell.school;
                level.textContent = spell.level;
                teaser.textContent = spell.teaser;
                spellList.append(card)
                                return {name: spell.spell_name, school: spell.school, level: spell.level, ritual: spell.ritual, concentration: spell.concentration, classes: spell.classes, category: spell.category, element: card}

            } else if (spell.school.toLowerCase() == 'transmutation') {
                const card = cardTemplateTransmutation.content.cloneNode(true).children[0];
                const name = card.querySelector("[data-name]")
                const school = card.querySelector("[data-school]")
                const level = card.querySelector("[data-level]")
                const teaser = card.querySelector("[data-teaser]")
                // const link = card.querySelector("[data-link]")
                // link.setAttribute('href', kebabCase(spell.spell_name)); 
                card.setAttribute('href', kebabCase(spell.spell_name));
                name.textContent = spell.spell_name;
                school.textContent = spell.school;
                level.textContent = spell.level;
                teaser.textContent = spell.teaser;
                spellList.append(card)
                                return {name: spell.spell_name, school: spell.school, level: spell.level, ritual: spell.ritual, concentration: spell.concentration, classes: spell.classes, category: spell.category, element: card}

            } else if (spell.school.toLowerCase() == 'conjuration') {
                const card = cardTemplateConjuration.content.cloneNode(true).children[0];
                const name = card.querySelector("[data-name]")
                const school = card.querySelector("[data-school]")
                const level = card.querySelector("[data-level]")
                const teaser = card.querySelector("[data-teaser]")
                // const link = card.querySelector("[data-link]")
                // link.setAttribute('href', kebabCase(spell.spell_name));
                card.setAttribute('href', kebabCase(spell.spell_name)); 
                name.textContent = spell.spell_name;
                school.textContent = spell.school;
                level.textContent = spell.level;
                teaser.textContent = spell.teaser;
                spellList.append(card)
                                return {name: spell.spell_name, school: spell.school, level: spell.level, ritual: spell.ritual, concentration: spell.concentration, classes: spell.classes, category: spell.category, element: card}

            } else {
                const card = cardTemplateNecromancy.content.cloneNode(true).children[0];
                const name = card.querySelector("[data-name]")
                const school = card.querySelector("[data-school]")
                const level = card.querySelector("[data-level]")
                const teaser = card.querySelector("[data-teaser]")
                // const link = card.querySelector("[data-link]")
                card.setAttribute('href', kebabCase(spell.spell_name));
                
                name.textContent = spell.spell_name;
                school.textContent = spell.school;
                level.textContent = spell.level;
                teaser.textContent = spell.teaser;
                spellList.append(card)
                                return {name: spell.spell_name, school: spell.school, level: spell.level, ritual: spell.ritual, concentration: spell.concentration, classes: spell.classes, category: spell.category, element: card}

            }
            

        })
    });



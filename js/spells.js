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


var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var checked = {};

function getChecked(name) {
    checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
      return el.value;
    });
  }

  Array.prototype.forEach.call(allCheckboxes, function (el) {
    el.addEventListener('change', toggleCheckbox);
  });
  
  function toggleCheckbox(e) {
    getChecked(e.target.name);
    setVisibility();
  }

  getChecked('level')

  function setVisibility() {
    spells.map(function (el) {
      var level = checked.level.length ? _.intersection(Array.from(el.classList), checked.level).length : true;
      var classes = checked.classes.length ? _.intersection(Array.from(el.classList), checked.classes).length : true;
      var ritual = checked.rital.length ? _.intersection(Array.from(el.classList), checked.ritual).length : true;
      var concentration = checked.concentration.length ? _.intersection(Array.from(el.classList), checked.concentration).length : true;
      var category = checked.category.length ? _.intersection(Array.from(el.classList), checked.category).length : true;
      if (level && classes && ritual && concentration && category) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
  }


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



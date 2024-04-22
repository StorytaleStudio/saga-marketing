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
    // console.log(spells)
    spells.forEach(spell => {
        const isVisible = spell.name.toLowerCase().includes(value);
        spell.element.classList.toggle("hide", !isVisible)
    })
})



// allCheckboxes.forEach(e => {
//     e.addEventListener("click", (target) => {
//         const checkVal = target.querySelector("[type='checkbox']");
//         console.log(checkVal)
//     })
// })
function change() {
    var levelCbs = document.querySelectorAll(".level-wrapper input[type='checkbox']");
    var classCbs = document.querySelectorAll(".class-wrapper input[type='checkbox']");
    var typeCbs = document.querySelectorAll(".type-wrapper input[type='checkbox']");
    var filters = {
      level: getClassOfCheckedCheckboxes(levelCbs),
      class: getClassOfCheckedCheckboxes(classCbs),
      type: getClassOfCheckedCheckboxes(typeCbs)

    };
  
    filterResults(filters);
  }
  
  function getClassOfCheckedCheckboxes(checkboxes) {
    var classes = [];
  
    if (checkboxes && checkboxes.length > 0) {
      for (var i = 0; i < checkboxes.length; i++) {
        var cb = checkboxes[i];
  
        if (cb.checked) {
          classes.push(cb.getAttribute("data-name"));
        }
      }
    }
  
    return classes;
  }
  
  function filterResults(filters) {
    var rElems = document.querySelectorAll("[data-spell-cards] .spell-item-wrapper");;
    var hiddenElems = [];
  
    if (!rElems || rElems.length <= 0) {
      return;
    }
  
    for (var i = 0; i < rElems.length; i++) {
      var el = rElems[i];
      // console.log(el)
  
      if (filters.class.length > 0) {
        var isHidden = true;
  
        for (var j = 0; j < filters.class.length; j++) {
          var filter = filters.class[j];
  
          if (el.getAttribute("data-filter").includes(filter)) {
            isHidden = false;
            break;
          }
        }
  
        if (isHidden) {
          hiddenElems.push(el);
        }
      }
  
      if (filters.level.length > 0) {
        var isHidden = true;
  
        for (var j = 0; j < filters.level.length; j++) {
          var filter = filters.level[j];
  
          if (el.getAttribute("data-filter").includes(filter)) {
            isHidden = false;
            break;
          }
        }
  
        if (isHidden) {
          hiddenElems.push(el);
        }
      }


      if (filters.type.length > 0) {
        var isHidden = true;
  
        for (var j = 0; j < filters.type.length; j++) {
          var filter = filters.level[j];
  
          if (el.getAttribute("data-filter").includes(filter)) {
            isHidden = false;
            break;
          }
        }
  
        if (isHidden) {
          hiddenElems.push(el);
        }
      }
    }
  
    for (var i = 0; i < rElems.length; i++) {
      rElems[i].style.display = "block";
    }
  
    if (hiddenElems.length <= 0) {
      return;
    }
  
    for (var i = 0; i < hiddenElems.length; i++) {
      hiddenElems[i].style.display = "none";
    }
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
                const border = card.querySelector(".gradient-border")
                const bgBlur = card.querySelector(".background-blur")
                // link.setAttribute('href', kebabCase(spell.spell_name));
                border.innerHTML = `<svg id="eALyGup1cVD1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0 0 1280 720" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" style="">
                <defs>
                  <lineargradient id="ill-fill-${kebabCase(spell.spell_name)}" x1="0" y1="0.5" x2="1" y2="0.5" spreadmethod="pad" gradientunits="objectBoundingBox" gradienttransform="translate(0 0)">
                    <stop id="eALyGup1cVD2-fill-0" offset="0%" stop-color="#AB40FF"></stop>
                    <stop id="eALyGup1cVD2-fill-1" offset="100%" stop-color="#00F0FF"></stop>
                  </lineargradient>
                </defs>
                <g id="eALyGup1cVD2_to" transform="translate(640,360)">
                  <rect width="2492.099859" height="2223.719874" rx="0" ry="0" transform="scale(0.820545,1) translate(-1246.049942,-1111.859937)" fill="url(#ill-fill-${kebabCase(spell.spell_name)})" stroke-width="0"></rect>
                </g>
              </svg>`
              bgBlur.innerHTML = `<svg id="eALyGup1cVD1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0 0 1280 720" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" style="">
                <defs>
                  <lineargradient id="ill-fill-${kebabCase(spell.spell_name)}" x1="0" y1="0.5" x2="1" y2="0.5" spreadmethod="pad" gradientunits="objectBoundingBox" gradienttransform="translate(0 0)">
                    <stop id="eALyGup1cVD2-fill-0" offset="0%" stop-color="#AB40FF"></stop>
                    <stop id="eALyGup1cVD2-fill-1" offset="100%" stop-color="#00F0FF"></stop>
                  </lineargradient>
                </defs>
                <g id="eALyGup1cVD2_to" transform="translate(640,360)">
                  <rect width="2492.099859" height="2223.719874" rx="0" ry="0" transform="scale(0.820545,1) translate(-1246.049942,-1111.859937)" fill="url(#ill-fill-${kebabCase(spell.spell_name)})" stroke-width="0"></rect>
                </g>
              </svg>`


                card.setAttribute('href', kebabCase(spell.spell_name)); 
                const ritualYes = spell.ritual == true ? "Ritual" : " "; 
                const conYes = spell.concentration == true ? "Concentration" : " "; 
                card.setAttribute('data-filter', `${ritualYes} ${conYes} ${spell.level} ${spell.classes} ${spell.category}`)
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
                const ritualYes = spell.ritual == true ? "Ritual" : " "; 
                const conYes = spell.concentration == true ? "Concentration" : " "; 
                card.setAttribute('data-filter', `${ritualYes} ${conYes} ${spell.level} ${spell.classes} ${spell.category}`)
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
                const ritualYes = spell.ritual == true ? "Ritual" : " "; 
                const conYes = spell.concentration == true ? "Concentration" : " "; 
                card.setAttribute('data-filter', `${ritualYes} ${conYes} ${spell.level} ${spell.classes} ${spell.category}`)
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
                const ritualYes = spell.ritual == true ? "Ritual" : " "; 
                const conYes = spell.concentration == true ? "Concentration" : " "; 
                card.setAttribute('data-filter', `${ritualYes} ${conYes} ${spell.level} ${spell.classes} ${spell.category}`)
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
                const ritualYes = spell.ritual == true ? "Ritual" : " "; 
                const conYes = spell.concentration == true ? "Concentration" : " "; 
                card.setAttribute('data-filter', `${ritualYes} ${conYes} ${spell.level} ${spell.classes} ${spell.category}`)
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
                const ritualYes = spell.ritual == true ? "Ritual" : " "; 
                const conYes = spell.concentration == true ? "Concentration" : " "; 
                card.setAttribute('data-filter', `${ritualYes} ${conYes} ${spell.level} ${spell.classes} ${spell.category}`)
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
                const ritualYes = spell.ritual == true ? "Ritual" : " "; 
                const conYes = spell.concentration == true ? "Concentration" : " "; 
                card.setAttribute('data-filter', `${ritualYes} ${conYes} ${spell.level} ${spell.classes} ${spell.category}`)
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
                const ritualYes = spell.ritual == true ? "Ritual" : " "; 
                const conYes = spell.concentration == true ? "Concentration" : " "; 
                card.setAttribute('data-filter', `${ritualYes} ${conYes} ${spell.level} ${spell.classes} ${spell.category}`)
                
                name.textContent = spell.spell_name;
                school.textContent = spell.school;
                level.textContent = spell.level;
                teaser.textContent = spell.teaser;
                spellList.append(card)
                                return {name: spell.spell_name, school: spell.school, level: spell.level, ritual: spell.ritual, concentration: spell.concentration, classes: spell.classes, category: spell.category, element: card}

            }
            

        })
    });



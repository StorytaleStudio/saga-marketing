let styleValue = '';

function clickFunction(style) {
  const medievalCard = document.querySelector(".medieval");
  const wildWestCard = document.querySelector(".wild-west");
  const cyberpunkCard = document.querySelector(".cyberpunk");
  const modernCard = document.querySelector(".modern");

  if(style == 'Medieval') {
    wildWestCard.classList.remove("active");
    cyberpunkCard.classList.remove("active");
    modernCard.classList.remove("active");
    medievalCard.classList.toggle("active");
  } else if (style == 'Wild-West') {
    cyberpunkCard.classList.remove("active");
    modernCard.classList.remove("active");
    medievalCard.classList.remove("active");
    wildWestCard.classList.toggle("active");
  } else if (style == 'Cyberpunk' ){
    wildWestCard.classList.remove("active");
    modernCard.classList.remove("active");
    medievalCard.classList.remove("active");
    cyberpunkCard.classList.toggle("active");
  } else if (style == 'Modern') {
    wildWestCard.classList.remove("active");
    cyberpunkCard.classList.remove("active");
    medievalCard.classList.remove("active");
    modernCard.classList.toggle("active");
  }

  // perform some operation on click
  if (style == 'Modern' && modernCard.classList.contains('active')){
    styleValue = style;
  } else if (style == 'Wild-West' && wildWestCard.classList.contains('active')) {
    styleValue = style;
  } else if (style == 'Cyberpunk' && cyberpunkCard.classList.contains('active')) {
    styleValue = style;
  } else if (style == 'Medieval' && medievalCard.classList.contains('active')){
    styleValue = style;
  } else {
    styleValue = '';
  }
  return styleValue;
}

function generateName() {
    // Fetch the name
    const character = document.querySelector("#character");
    const characterName = document.querySelector("#name");
    const characterInfo = document.querySelector("#info");
    var g = document.getElementById("gender-select");
    var genderValue = g.value;
    var c = document.getElementById("culture-select");
    var cultureValue = c.value;
    var p = document.getElementById("profession-select");
    var professionValue = p.value;
    
    const genderResult = genderValue || pickRandom(['Feminine', 'Masculine', 'Non-Binary']);
    const cultureResult = cultureValue || pickRandom(['English', "Japanese", "Polynesian"]);
    const professionResult = professionValue || pickRandom(['Warrior', 'Mage', 'Commoner']);
    const artStyle = styleValue || pickRandom(['Cyberpunk', 'Medieval', 'Modern', 'Wild-West'])
   
    const firstNames = fetchNames(cultureResult, genderResult);
    const lastNames = fetchNames(cultureResult, 'surnames');
   

    // Pick a random name from each list
    const firstName = pickRandom(firstNames.data);
    const lastName = pickRandom(lastNames.data);
    
    const groupName = artStyle === 'Cyberpunk'  ? 'Data Runnerz' :
                      artStyle === 'Medieval'  ? 'Kingdom of Halena' :
                      artStyle === 'Wild-West'  ? 'Town of Longfields' :
                      artStyle === 'Modern'  ? 'League of Subtle Spheres' :
                      'Your Imagination'
    ;
  
    const imageResult = `https://res.cloudinary.com/dy4kfy1on/image/upload/v1684722347/saga/${cultureResult}_${genderResult}_${professionResult}_${artStyle}.png`;
  
    // Use a template literal to format the full name
    character.style.backgroundColor = `rgba(0,0,0,0.2)`;
    character.style.backgroundImage = `url(${imageResult})`;
    character.style.backgroundBlendMode = "overlay";
    characterName.innerHTML = `${firstName} ${lastName}`;
    characterInfo.innerHTML = `${cultureResult} ${genderResult} - ${professionResult} from the ${groupName}`

  }
  function fetchNames(cultureType, nameType) {
    let names = [];
  
    switch(cultureType) {
      case 'English':
        switch(nameType) {
          case 'Feminine':
          names = ["Hattie","Vinnie","Sigrid","Zena","Jettie","Zada","Octavia","Lenora","Adelina","Beula","Amy","Edythe","Josie","Veda","Isa","Dixie","Gertie","Donie","Faith","Adelle","Cathryn","Magdalena","Sophia","Mercedes","Norine","Eulah","Winnifred","Rossie","Elena","Arline","Hildur","Goldia","Chloe","Rosalee","Antonette","Alberta","Frieda","Muriel","Melissa","Lonie","Teresa","Paula","Pansy","Norma","Lacy","Lilah","Queen","Wilhelmina","Margaret","Lela","Janette","Roberta","Ethelyn","Janet","Onie","Leah","Georgianna","Inez","Mariah","Evie","Eve","Amabilia","Serenity","Riana","Leslie","Georgitte","Honey","Kirsten","Brookes","Ashlee","Meriel","Isotta","Aldercy","Daisey","Billie","Ela","Eugenie","Aylin","Mignon","Erica","Lavernia","Krimhild","Rose","Milena","Shayla","Ellen","Lucilla","Marley","Wilona","Isabeau","Ulitta","Jineen","Kali","Francille","Minda","Maja","Orlande","Marvela","Katja","Loella","Svana","Dortje","Albertyna","Slainie","Sigfreda","Jolantha","Molly","Tori","Manon","Isalda","Alisia","Luzia","Clara","Desiree","Ginette","Lovie","Charmine","Diamanta","Anka","Chloris","Heather","Damiana","Delaney","Anissa","Cheryl","Salma","Hannele","Cilia","Maxime","Annique","Trudchen","Bojena","Maike","Ilse","Hallie","Lotye","Chelsey","Tatjana","Simone","Antoinette","Lioba","Adelynn","Josefa","Locke","Charlot","Charmayne","Heaven","Miette","Trudi","Vroni","Gloriosa","Kaela","Ursula","Palmira","Adriene","Celestyn","Laurine","Bryna","Maliya","Gwendys","Tesha","Heiley","Dorthy","Madeleine","Lyndia","Emilya","Sanah","Ranel","Lexia","Mysa","Sophey","Darna","Eyla","Riyana","Salna","Abrey","Beylee","Gianas","Neina","Sava","Annarel","Annyte","Liliyana","Jaslin","Catlyn","Kina","Giya","Lauryn","Anabes","Rila","Nyra","Alissa","Cercilia","Haylise","Amyra","Julienna","Selsa","Lauris","Alessa","Mariela","Maycey","Lenda","Melarie","Ensley","Milah","Mary","Helen","Gwen","Helga","Lily","Catherine","Sara","Megan","Vivian","Elizabeth","Margot","Freya","Penelope","Emily","Alice","Judith","Hildga","Gulla","Astvildr","Ridga","Eryn","Ennell","Joane","Audreyn","Cece","Kather","Gerhilda","Rudise","Sueda","Mara","Aelith","Sidwe","Fira","Donna","Finda","Lena","Asthes","Lastha","Elix","Adelaide","Aleida","Alexia","Alianor","Alys","Amelia","Amity","Anastas","Angmar","Anne","Arabella","Ariana","Ariel","Atheena","Avery","Ayleth","Beatrix","Benevolence","Bertha","Bess","Beverly","Brangian","Brunhild","Catrain","Cedany","Cristiana","Diana","Dimia","Duraina","Eleanor","Eliose","Ella","Ellyn","Emeline","Emma","Enndolynn","Esme","Evelyn","Farfelee","Fay","Gith","Gloriana","Godiva","Guinevere","Gussalen","Gwendolyn","Harley","Helena","Helewys","Hildegard","Idla","Isabel","Isolde","Ivy","Jacquelyn","Jade","Jasmine","Jetta","Josselyn","Juliana","Katelyn","Katrina","Kaylein","Krea","Laila","Lindsey","Loreena","Luanda","Maerwynn","Malkyn","Maria","Marigold","Matilda","Millicent","Mirabelle","Peronell","Phrowenia","Rainydayas","Rosa","Ryia","Seraphina","Susanna","Sybbyl","Thea","Velma","Victoria","Wendy","Winifred"];
          break;
          case 'Masculine':
            names = ["Lind","Flori","Hajo","Drake","Kyree","Eckehart","Nikhil","Denton","Hutton","Devin","Wladimir","Ruppert","Kippy","Baron","Antonius","Jamie","Edwardo","Sandy","Albert","Robbie","Bronwen","Raleigh","Karl","Emile","Caden","Thorald","Rudy","Toni","Dylon","Alvan","Wirt","Urija","Carlos","Gunter","Pablo","Dominikus","Jair","Osbaldo","Sidwell","Wim","Zander","Siegfried","Herrick","Deverick","Vicq","Holdger","Damiano","Francis","Demetrius","Wilfer","Algrenon","Aldrych","Prewitt","Ripley","Roddrick","Cordalles","Masselin","Eaton","Shelley","Wylie","Fritz","Ashley","Shannon","Durante","Liam","Derrick","Dominik","Hulburd","Tyrell","Malwin","Gratianus","Hanibal","Raffi","Dempster","Caio","Stanwick","Phillip","Jan-Martin","Raffaello","Sinjin","Callixtus","Julian","Teddic","Beppo","Klaus","Ramiro","Rushkin","Jamir","Wyn","Moriz","Watt","Silvius","Aramis","Baptist","Lafayette","Ferrand","Brayden","Griswold","Hillier","Chaney","Eloy","Simon","Dextran","Lanard","Bronden","Donovar","Grasson","Sabas","Jovarn","Eliar","Jorrel","Melvan","Connin","Corbus","Jarden","Rylon","Clarrik","Jarson","Landar","Billon","Nestar","Codin","Grahar","Gidden","Carrel","Darvin","Kyllan","Chandren","Roberd","Trovion","Trytas","Preytan","Carron","Pranar","Arnol","Erock","Stanler","Dovan","Khort","Byrron","Corban","Arton","Branton","Russal","Greysor","Jaddon","Arren","Karden","Fernar","Ando","Chris","Keith","Llewellyn","Ira","McKinley","Armand","Bernie","Maude","Dock","Fitzhugh","Edgar","Orval","Louise","Bradley","Benjaman","Hyman","Urban","Aron","Norbert","Lee","Steven","Carroll","Loy","Madison","Orie","Jeff","Homer","Bert","Linwood","Ferdinand","Melton","Burl","Will","Eldridge","Mitchel","Hillard","Ward","Abel","Dayton","Laverne","Hazel","Newell","Eldon","Wilfred","Josiah","Mildred","Harrison","Tim","Garret","John","Avey","David","Martin","Mikael","Sam","Fredrick","Henry","Rollo","Sven","Sebastian","Harold","Jeffery","Lars","Vyncent","Gileon","Anthohn","Hori","Finnri","Gyliam","Gery","Riffin","Aethelm","Thamond","Reyny","Arcan","James","Gyles","Symond","Nolfi","Ofeim","Loge","Odorn","Plo","Bjorn","Visla","Jack","Bobet","Jacob","Althalos","Asher","Barda","Benedict","Berinon","Borin","Brom","Bryce","Carac","Cassius","Cedric","Charles","Clifton","Dain","Destrian","Donald","Doran","Edmund","Falk","Favian","Fendrel","Forthwind","Frederick","Gavin","Geoffrey","Gorvenal","Gregory","Hadrian","Janshai","Jarin","Joseph","Justice","Kelvin","Leo","Leofrick","Letholdus","Lief","Merek","Oliver","Peter","Peyton","Quinn","Robin","Roger","Ronald","Rowan","Rulf","Sadon","Terrowin","Terryn","Thomas","Tristan","Ulric","Walter","William","Xalvador","Zane"];
            break;
          case 'Non-Binary':
            names = ["Lind","Flori","Hajo","Drake","Kyree","Eckehart","Nikhil","Denton","Hutton","Devin","Wladimir","Ruppert","Kippy","Baron","Antonius","Jamie","Edwardo","Sandy","Albert","Robbie","Bronwen","Raleigh","Karl","Emile","Caden","Thorald","Rudy","Toni","Dylon","Alvan","Wirt","Urija","Carlos","Gunter","Pablo","Dominikus","Jair","Osbaldo","Sidwell","Wim","Zander","Siegfried","Herrick","Deverick","Vicq","Holdger","Damiano","Francis","Demetrius","Wilfer","Algrenon","Aldrych","Prewitt","Ripley","Roddrick","Cordalles","Masselin","Eaton","Shelley","Wylie","Fritz","Ashley","Shannon","Durante","Liam","Derrick","Dominik","Hulburd","Tyrell","Malwin","Gratianus","Hanibal","Raffi","Dempster","Caio","Stanwick","Phillip","Jan-Martin","Raffaello","Sinjin","Callixtus","Julian","Teddic","Beppo","Klaus","Ramiro","Rushkin","Jamir","Wyn","Moriz","Watt","Silvius","Aramis","Baptist","Lafayette","Ferrand","Brayden","Griswold","Hillier","Chaney","Eloy","Simon","Dextran","Lanard","Bronden","Donovar","Grasson","Sabas","Jovarn","Eliar","Jorrel","Melvan","Connin","Corbus","Jarden","Rylon","Clarrik","Jarson","Landar","Billon","Nestar","Codin","Grahar","Gidden","Carrel","Darvin","Kyllan","Chandren","Roberd","Trovion","Trytas","Preytan","Carron","Pranar","Arnol","Erock","Stanler","Dovan","Khort","Byrron","Corban","Arton","Branton","Russal","Greysor","Jaddon","Arren","Karden","Fernar","Ando","Chris","Keith","Llewellyn","Ira","McKinley","Armand","Bernie","Maude","Dock","Fitzhugh","Edgar","Orval","Louise","Bradley","Benjaman","Hyman","Urban","Aron","Norbert","Lee","Steven","Carroll","Loy","Madison","Orie","Jeff","Homer","Bert","Linwood","Ferdinand","Melton","Burl","Will","Eldridge","Mitchel","Hillard","Ward","Abel","Dayton","Laverne","Hazel","Newell","Eldon","Wilfred","Josiah","Mildred","Harrison","Tim","Garret","John","Avey","David","Martin","Mikael","Sam","Fredrick","Henry","Rollo","Sven","Sebastian","Harold","Jeffery","Lars","Vyncent","Gileon","Anthohn","Hori","Finnri","Gyliam","Gery","Riffin","Aethelm","Thamond","Reyny","Arcan","James","Gyles","Symond","Nolfi","Ofeim","Loge","Odorn","Plo","Bjorn","Visla","Jack","Bobet","Jacob","Althalos","Asher","Barda","Benedict","Berinon","Borin","Brom","Bryce","Carac","Cassius","Cedric","Charles","Clifton","Dain","Destrian","Donald","Doran","Edmund","Falk","Favian","Fendrel","Forthwind","Frederick","Gavin","Geoffrey","Gorvenal","Gregory","Hadrian","Janshai","Jarin","Joseph","Justice","Kelvin","Leo","Leofrick","Letholdus","Lief","Merek","Oliver","Peter","Peyton","Quinn","Robin","Roger","Ronald","Rowan","Rulf","Sadon","Terrowin","Terryn","Thomas","Tristan","Ulric","Walter","William","Xalvador","Zane","Hattie","Vinnie","Sigrid","Zena","Jettie","Zada","Octavia","Lenora","Adelina","Beula","Amy","Edythe","Josie","Veda","Isa","Dixie","Gertie","Donie","Faith","Adelle","Cathryn","Magdalena","Sophia","Mercedes","Norine","Eulah","Winnifred","Rossie","Elena","Arline","Hildur","Goldia","Chloe","Rosalee","Antonette","Alberta","Frieda","Muriel","Melissa","Lonie","Teresa","Paula","Pansy","Norma","Lacy","Lilah","Queen","Wilhelmina","Margaret","Lela","Janette","Roberta","Ethelyn","Janet","Onie","Leah","Georgianna","Inez","Mariah","Evie","Eve","Amabilia","Serenity","Riana","Leslie","Georgitte","Honey","Kirsten","Brookes","Ashlee","Meriel","Isotta","Aldercy","Daisey","Billie","Ela","Eugenie","Aylin","Mignon","Erica","Lavernia","Krimhild","Rose","Milena","Shayla","Ellen","Lucilla","Marley","Wilona","Isabeau","Ulitta","Jineen","Kali","Francille","Minda","Maja","Orlande","Marvela","Katja","Loella","Svana","Dortje","Albertyna","Slainie","Sigfreda","Jolantha","Molly","Tori","Manon","Isalda","Alisia","Luzia","Clara","Desiree","Ginette","Lovie","Charmine","Diamanta","Anka","Chloris","Heather","Damiana","Delaney","Anissa","Cheryl","Salma","Hannele","Cilia","Maxime","Annique","Trudchen","Bojena","Maike","Ilse","Hallie","Lotye","Chelsey","Tatjana","Simone","Antoinette","Lioba","Adelynn","Josefa","Locke","Charlot","Charmayne","Heaven","Miette","Trudi","Vroni","Gloriosa","Kaela","Ursula","Palmira","Adriene","Celestyn","Laurine","Bryna","Maliya","Gwendys","Tesha","Heiley","Dorthy","Madeleine","Lyndia","Emilya","Sanah","Ranel","Lexia","Mysa","Sophey","Darna","Eyla","Riyana","Salna","Abrey","Beylee","Gianas","Neina","Sava","Annarel","Annyte","Liliyana","Jaslin","Catlyn","Kina","Giya","Lauryn","Anabes","Rila","Nyra","Alissa","Cercilia","Haylise","Amyra","Julienna","Selsa","Lauris","Alessa","Mariela","Maycey","Lenda","Melarie","Ensley","Milah","Mary","Helen","Gwen","Helga","Lily","Catherine","Sara","Megan","Vivian","Elizabeth","Margot","Freya","Penelope","Emily","Alice","Judith","Hildga","Gulla","Astvildr","Ridga","Eryn","Ennell","Joane","Audreyn","Cece","Kather","Gerhilda","Rudise","Sueda","Mara","Aelith","Sidwe","Fira","Donna","Finda","Lena","Asthes","Lastha","Elix","Adelaide","Aleida","Alexia","Alianor","Alys","Amelia","Amity","Anastas","Angmar","Anne","Arabella","Ariana","Ariel","Atheena","Avery","Ayleth","Beatrix","Benevolence","Bertha","Bess","Beverly","Brangian","Brunhild","Catrain","Cedany","Cristiana","Diana","Dimia","Duraina","Eleanor","Eliose","Ella","Ellyn","Emeline","Emma","Enndolynn","Esme","Evelyn","Farfelee","Fay","Gith","Gloriana","Godiva","Guinevere","Gussalen","Gwendolyn","Harley","Helena","Helewys","Hildegard","Idla","Isabel","Isolde","Ivy","Jacquelyn","Jade","Jasmine","Jetta","Josselyn","Juliana","Katelyn","Katrina","Kaylein","Krea","Laila","Lindsey","Loreena","Luanda","Maerwynn","Malkyn","Maria","Marigold","Matilda","Millicent","Mirabelle","Peronell","Phrowenia","Rainydayas","Rosa","Ryia","Seraphina","Susanna","Sybbyl","Thea","Velma","Victoria","Wendy","Winifred"];
            break;
          case 'surnames':
            names = ["Beasant","Royston","Newbury","Stanford","Copeland","Alby","Beckwith","Thorp","Denholm","Tattersall","Lincoln","Swett","Dawson","Brooks","Paddley","Smit","Whatley","Sweet","Smither","Huckabee","Bing","Hammett","Swail","Hayes","Lee","Livingstone","Ridley","Spalding","Nutlea","Stafford","Ward","Bradshaw","Kent","Sampson","Bourne","Hersy","Mullendore","Hewett","Hayford","Greyjoy","Barrin","Stewar","Maller","Trante","Syder","Lonmouth","Broom","Oakheart","Gardener","Terrick","Rok","Merser","Hayard","Waker","Tully","Arryn","Netley","Turnberry","Durrandon","Tymber","Parsin","Tiren","Chapmyre","Stanlire","Brax","Torrent","Hunter","Wagstaff","Peat","Falker","Tradd","Catell","Taner","Vass","Harlaw","Baratheon","Estren","Byrch","Hutter","Barler","Maeson","Skipperth","Leadbetter","Costigan","Callan","Heriot","Galway","Toll","Ryan","Gregory","McRae","Batt","Oshea","McGhee","Fabble","Hunniford","Potter","Keogh","Craig","Dwyer","Moore","Seddon","Ames","Taylor","Dods","Penn","Hill","Alardice","Stewart","McLusky","Rutter","Priest","Fergusson","Keating","Donoughoe","Fallow","Ornery","Cook","King","Hennessy","Burke","Coulston","Purcell","Pinkerton","Stoker","Cawley","Meredeth","Sapping","Rand","Harrington","Kinghead","Mahon","Cheyne","Wright","Davis","Duncan","Uleaven","Beale","Lewis","Hale","Fitzgerald","Enright","Hamilton","Murphy","Spice","Kildare","Hoddle","Middlemiss","White","Cause","Allen","McLachlan","Carson","McNab","Jack","Christie","Martin","McNamara","McPherson","Oneil","Cowen","Lette","Shackley","Sim","Cameron","Paterson","Bent","Connell","Horgan","Finnerty","Clubb","Carnall","Twaddle","Teague","Hall","Legge","Mitchell","Sabilline","Andrew","Vear","Nottley","Compton","Smithe","Law","Thornton","Davenport","Asheton","Hayley","Shelby","Chester","Kimberley","Stansfield","Barton","Crutchley","Chatham","Dudley","Benson","Shelley","Ainsworth","Clark","Carlisle","Richmond","Bradly","Bentham","Goodwin","Thackeray","Beverly","Crowder","Cromwell","Thorne","Dayton","Ramsay","Sagar","Addington","Astley","Charlton","Sheldon","Rudges","Luxford","Ironmaker","Vance","Prester","Haerd","Daxer","Glovelyn","Pyne","Shaed","Horpe","Shepherd","Plumm","Shatterstone","Frosher","Graen","Taler","Fisher","Plunder","Ashford","Ryswell","Staunton","Tarth","Footly","Morrass","Tallman","Brewlan","Parge","Orme","Tudbury","Blount","Casterly","Stally","Harner","Bailer","Caerlight","Chandyll","Woods","Staedmon","Boggs","Blackbar","Flay","Sringer","Foler","Bergen","Fry","Beaumont","Ballard","Ansgot","Courcelles","Raske","Formmer","Peveril","Sidney","Cuellar","Fossard","Rey","Svendsen","Venois","Mantel","Jalard","la Mare","Magnusson","de Clare","Eklund","Bergstrom","de Preston","Smith","de Berville","Vang","Tos","Cabello","Sureo","de la Pole","Baker","Imperiam","Carn","Borg","Amador","Russell","Hult","Rivera","Menendez","Duval","Randrup","Moles"," Cartwright"," de Bolbec"," Fenwick"," Cromwell"," McKinnon"," Writingham"," deGrey"," de Mowbray"," Rowntree"," Chaucer"," Cornwallis"," Drake"," Crewe"," Montagu"," Cleves"," Woodleaf"," Serpentwind"," Hillless"," Mournhell"," Farlight"," Bladewalker"," Ashglade"," Wheatflow"," Morningfall"," Glorybluff"," Redstream"," Commonbrook"," Cloudfang"," Darkdraft"," Mistsplitter"," Lunadream"," Truegust"," Twoorb"," Duststone"," Caskbow"," Keenseeker"," Boulderdown"," Laughingsteel"," Stonesworn"];
          break;
        }
        break;
        case 'Japanese':
        switch(nameType) {
            case 'Feminine':
              names = ["Yamada","Akimoto","Jimyouin","Sakurai","Kawamura","Yamanouchi","Anayama","Ishibashi","Suwa","Hasebe","Kouriki","Higashisanjou","Kawabe","Yamana","Oda","Haga","Matsuura","Akizuki","Hino","Harada","Matsumae","Kuchiki","Isshiki","Kiso","Yamamoto","Mizuno","Aso","Hasegawa","Boujou","Kushizu","Araki","Tada","Hisakawa","Kaga","Takahata","Isayama","Fukuizumi","Oishi","Tanabe","Sugihara","Hashi","Tashiro","Ikehata","Sone","Kazetani","Hayakawa","Sugai","Sugawara","Soda","Yukawa","Niwa","Oba","Inaba","Wakamatsu","Tsutsui","Okawa","Tsuboike","Higuchi","Ayuzawa","Morioka","Kamiya","Maki","Nagase","Moriai","Tatsuda","Endo","Tamanaha","Takaki","Yano","Natsukawa","Gushiken","Nakagome","Seto","Ohta","Tatewaki","Banno","Hamasaki","Kaiba","Sawa","Kawabata","Umemoto","Kano","Hiruma","Ogura","Rai","Iseri","Naito","Kozato","Yutani","Saito","Takamitsu","Tsujii","Tamashiro","Yakushimaru","Koki","Re ","Hika","Kigi","Kata","Yatsuk","Miyami","Awan","Tomi"];
              break;
            case 'Masculine':
              names = ["Kenji","Souta","Minato","Wen","Kichirou","Kenta","Hyun","Hideyoshi","Shirou","Ryuu","Yahui","Tachibana","Imada","Hashi","Horie","Kubota","Mura","Ritsushima","Orio","Daigo","Ienaga","Uyehara","Shima","Oh","Morishige","Okura","Kashiwagi","Furuya","Tsujihara","Fujino","Sueno","Nakatomi","Takara","Kanemaru","Gushiken","Nii","Tsukuda","Ebina","Akibara","Saiki","Mitsui","Kozutsami","Yukimori","Hashimoto","Ichijou","Kirishima","Hanamura","Chiyotanda","Koizumi","Mukai","Sugai","Uda","Maita","Ogasawara","Noguchi","Morishita","Matsubara","Sakiyama","Goto","Shimizu","Hamada","Seta","Michizoe","Maeda","Mizusawa","Okane","Yamamura","Iori","Asaka","Morine","Toudou","Matsushita","Asakura","Shouni","Iwasaki","Ashina","Miyabe","Oshinokouji","Kobayakawa","Nanba","Enya","Atagi","Reizei","Funabashi","Sugawara","Adachi","Ise","Fujita","Nishiouji","Kouno","Nijou","Soga","Hirohashi","Yamashina","Jimyouin","Kuzuyama","Ayanokouji","Ando","Shiba","Katsuou","Daiki","Kun"];
              break;
            case 'Non-Binary':
              names = ["Kenji","Souta","Minato","Wen","Kichirou","Kenta","Hyun","Hideyoshi","Shirou","Ryuu","Yahui","Tachibana","Imada","Hashi","Horie","Kubota","Mura","Ritsushima","Orio","Daigo","Ienaga","Uyehara","Shima","Oh","Morishige","Okura","Kashiwagi","Furuya","Tsujihara","Fujino","Sueno","Nakatomi","Takara","Kanemaru","Gushiken","Nii","Tsukuda","Ebina","Akibara","Saiki","Mitsui","Kozutsami","Yukimori","Hashimoto","Ichijou","Kirishima","Hanamura","Chiyotanda","Koizumi","Mukai","Sugai","Uda","Maita","Ogasawara","Noguchi","Morishita","Matsubara","Sakiyama","Goto","Shimizu","Hamada","Seta","Michizoe","Maeda","Mizusawa","Okane","Yamamura","Iori","Asaka","Morine","Toudou","Matsushita","Asakura","Shouni","Iwasaki","Ashina","Miyabe","Oshinokouji","Kobayakawa","Nanba","Enya","Atagi","Reizei","Funabashi","Sugawara","Adachi","Ise","Fujita","Nishiouji","Kouno","Nijou","Soga","Hirohashi","Yamashina","Jimyouin","Kuzuyama","Ayanokouji","Ando","Shiba","Katsuou","Daiki","Kun","Yamada","Akimoto","Jimyouin","Sakurai","Kawamura","Yamanouchi","Anayama","Ishibashi","Suwa","Hasebe","Kouriki","Higashisanjou","Kawabe","Yamana","Oda","Haga","Matsuura","Akizuki","Hino","Harada","Matsumae","Kuchiki","Isshiki","Kiso","Yamamoto","Mizuno","Aso","Hasegawa","Boujou","Kushizu","Araki","Tada","Hisakawa","Kaga","Takahata","Isayama","Fukuizumi","Oishi","Tanabe","Sugihara","Hashi","Tashiro","Ikehata","Sone","Kazetani","Hayakawa","Sugai","Sugawara","Soda","Yukawa","Niwa","Oba","Inaba","Wakamatsu","Tsutsui","Okawa","Tsuboike","Higuchi","Ayuzawa","Morioka","Kamiya","Maki","Nagase","Moriai","Tatsuda","Endo","Tamanaha","Takaki","Yano","Natsukawa","Gushiken","Nakagome","Seto","Ohta","Tatewaki","Banno","Hamasaki","Kaiba","Sawa","Kawabata","Umemoto","Kano","Hiruma","Ogura","Rai","Iseri","Naito","Kozato","Yutani","Saito","Takamitsu","Tsujii","Tamashiro","Yakushimaru","Koki","Re ","Hika","Kigi","Kata","Yatsuk","Miyami","Awan","Tomi"];
            break;
            case 'surnames':
            names = ["Shigeaki","Yuko","Kawanari","Jakuchu","Aki","Terao","Robun","Tokugawa","Mitsuzuka","Eitoku","Josuke","Yoshino","Heihachiro","Ryoma","Hiroji","Shunko","Hisamichi","Nobukage","Kiyouji","Suetane","Yukikuni","Tomoatsu","Morokane","Fusatsune","Ujihide","Sanesada","Mochisuke","Uchiharu","Hikokiyo","Sadateru","Norihide","Norishige","Kazukane","Hirayuki","Moriyasu","Hisakuni","Fusamitsu","Mitsukazu","Ujihiko","Naotame","Harumichi","Hironaga","Michimoto","Hisatada","Noritada","Hidohsi","Cho","Aneshi","Neko","Mochi","Isoshi","Kusuko","Aguri","Torami","Sago","Tan","Iname","Kaneno","Mume","Uno","Moku","Korono","Mego","Shina","Sumi","Ginshi","Mino","Fukushi","Kina","Katsu","Momoko","Yoso","Taneme","Kiyo","Mina","Tsune","Taniko","Nayoko","Aya","Kazumi","Ririko","Noriko","Tamae","Reisa","Chieko","Toshi","Yurisa","Inaho","Satsu","Tori","Tame","Ikue","Otsu","Suzume","Sakamae","Hoshiko","Aoi","Kazu","Urako","Kumiyo","Eimu","Kiyomi","Emu","Ioko","Masa","Mitsuko","Kita","Ichiha","Kaho","Emi","Himeka","Saori","Kanna","Masako","Hikaru","Sayo","Yawara","Sei","Satsuki","Yayoi","Shoko","You","Ibu","Shizu","Emina","Kamie","Akemi","Sui","Nana","Erisu","Orika","Kumi","Wakana","Tanak","Isuzu","Umeka","Miyu","Yae","Ichino","Akane","Chisa","Uta","Hisano","Ue","Yui","Chan"];
          break;
          }
        break;
        case 'Polynesian':
          switch(nameType) {
              case 'Feminine':
                names = ["Arona","Marika","Whina","Kiri","Pakeka","Rea","Enutanga","Pora","Uru","Iria","Neina","Oia","Taiko","Omaka","Wai","Ani","Irihapeti","Atamarie","Uruau","Taiomi","Ea","Urehu","Nga","Paiti","Uruanga","Oea","Makuku","Hara","Makareta","Tui","Pipi","Pouriwa","Taimana","Ena","Haki","Mirama","Hakina","Waikomanawa","Keke","Uri","Wa","Harakoke","Ihiko","Uariki","Riana","Maia","Erina","Te Pura","Tarore","Roha","Manewa","Rere","Aronui","Ramarie","Poto","Waauru","Rangi","Akona","Ha Amu","Tapu","Tahi-Popa","Oenga","Paku","Pari","Rewa","Oro","Mimi","Puhi","Aroha","Ao","Maata","Te","Aka","Oma","Oie","Maiore","Ori","Pianga","Nako","Tahupotiki","Urangi","Emere","Mokihi","Mania","Kino","Area","Tarangi","Ataahua","Panoti","Waiano","Maa","Ukuroa","Rakina","Reka","Pihi","Eitu","Okitu","Naihi","Aia","Newea","Taikaroa","Rei","Au"];
                break;
              case 'Masculine':
                names = ["Petera","Paiwa","Erehe","Opi","Kingi","Aketu","Arama","Anewa","Heriko","Hamahona","Pakanga","Ahuru","Napo","Anaru","Ungu","Rawiri","Mokihi","Wa","Haru","Maka","Eau","Hani","Kiri","Pango","Imua","Koro","Nahi","Poto","Atama","Maipi","Tamati","Ngaire","Ariki","Waiara","Natana","Aika","Mikaere","Timoti","Atua","Uniki","Otikoro","Tana","Amiri","Kiki","Eraka","Hohepa","Rangi","Paipau","Hemi","Ahera","Tua","Maaka","Tipene","Maiope","Amako","Urutu","Ruhi","Tane","Uru","Matewa","Rewi","Moana","Hirini","Piripi","Uamutu","Eru","Whiro","Okiara","Hare","Hamonga","Mairo","Rana","Eruera","Patariki","Taonga","Naihi","Iramai","Waraki","Huatare","Turi","Io","Kea","Raiepe","Raru","Ekara","Taanga","Tiki","Mahora","Paau","Pita","Paora","Waiapi","Raione","Ikei","Keka","Tahiwai","Pahu","Taaura","Tapu","Mirama"];
                break;
              case 'Non-Binary':
                names = ["Petera","Paiwa","Erehe","Opi","Kingi","Aketu","Arama","Anewa","Heriko","Hamahona","Pakanga","Ahuru","Napo","Anaru","Ungu","Rawiri","Mokihi","Wa","Haru","Maka","Eau","Hani","Kiri","Pango","Imua","Koro","Nahi","Poto","Atama","Maipi","Tamati","Ngaire","Ariki","Waiara","Natana","Aika","Mikaere","Timoti","Atua","Uniki","Otikoro","Tana","Amiri","Kiki","Eraka","Hohepa","Rangi","Paipau","Hemi","Ahera","Tua","Maaka","Tipene","Maiope","Amako","Urutu","Ruhi","Tane","Uru","Matewa","Rewi","Moana","Hirini","Piripi","Uamutu","Eru","Whiro","Okiara","Hare","Hamonga","Mairo","Rana","Eruera","Patariki","Taonga","Naihi","Iramai","Waraki","Huatare","Turi","Io","Kea","Raiepe","Raru","Ekara","Taanga","Tiki","Mahora","Paau","Pita","Paora","Waiapi","Raione","Ikei","Keka","Tahiwai","Pahu","Taaura","Tapu","Mirama","Arona","Marika","Whina","Kiri","Pakeka","Rea","Enutanga","Pora","Uru","Iria","Neina","Oia","Taiko","Omaka","Wai","Ani","Irihapeti","Atamarie","Uruau","Taiomi","Ea","Urehu","Nga","Paiti","Uruanga","Oea","Makuku","Hara","Makareta","Tui","Pipi","Pouriwa","Taimana","Ena","Haki","Mirama","Hakina","Waikomanawa","Keke","Uri","Wa","Harakoke","Ihiko","Uariki","Riana","Maia","Erina","Te Pura","Tarore","Roha","Manewa","Rere","Aronui","Ramarie","Poto","Waauru","Rangi","Akona","Ha Amu","Tapu","Tahi-Popa","Oenga","Paku","Pari","Rewa","Oro","Mimi","Puhi","Aroha","Ao","Maata","Te","Aka","Oma","Oie","Maiore","Ori","Pianga","Nako","Tahupotiki","Urangi","Emere","Mokihi","Mania","Kino","Area","Tarangi","Ataahua","Panoti","Waiano","Maa","Ukuroa","Rakina","Reka","Pihi","Eitu","Okitu","Naihi","Aia","Newea","Taikaroa","Rei","Au"];
              break;
              case 'surnames':
                names = ["Rehipeti","Tipene","Topia","Herewini","Puhipi","Tame","Arona","Henare","Wirihana","Waata","Petera","Watihana","Arana","Wati","Rara","Hamuera","Kawhena","Hariwana","Enoka","Keretene","Ropata","Tapihana","Raharuhi","Arepata","Natana","Pihere","Munu","Wikiriwhi","Taneti","Timoti","Keeti","Arono","Tahana","Herangi","Hakopa","Taera","Paraone","Mete","Winiata","Akarana","Matene","Karauna","Wihone","Himona","Hohepa","Witika","Manuera","Tonga","Pihopa","Nepe","Piripi","Romana","Pikari","Pekama","Taimana","Wetere","Paora","Tereiti","Aperahama","Taimona","Rakena","Terere","Eketone","Hamutana","Waaka","Kingi","Tiki","Nopera","Kerehoma","Karaka","Rata","Tamihana"];
              break;
          }
      break;  
      }
    return { data: names };
  }

  
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  
  const featureImages = [

  ]

  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.github.com/repos/StorytaleStudio/saga-features/issues?q=is%3Aopen+is%3Aissue+label%3Afeature');
  const featureGroup = document.querySelector("#features .div-block-11");
  request.onload = function() {
    var githubData = JSON.parse(request.responseText);
    githubData.reverse().forEach(featureCards);
    
    function featureCards(item){
      featureGroup.innerHTML += `
      <div class="feature-card">
        <div class="div-block-13">
          <h4 class="heading-9">${item.title}</h4>
          <p class="paragraph-9">${item.body}</p>
          ${item.labels.some(label => label.name === 'in development')  ?  '<p class="button w-button alt">In Development</p>' : '<a href="' + item.html_url + '" target="_blank" class="button w-button">Vote on this feature</a>'}
             
        </div>
      `
    }
  }
request.send();



  // $(document).ready(function () {
  //     $.getJSON(urlToGetAllOpenBugs, function (allIssues) {
  //         $("div#github-issues");
  //         $.each(allIssues, function (i, issue) {


  //             $("div#github-issues")
  //                 .append("<div style=\"margin-bottom:20px;\">")
  //                 .append("<strong><a href=\"" + issue.html_url + "\">" + issue.title + "</a></strong></br>")
  //                 .append(issue.body + "</br>")
  //                 .append(issue.labels + "</br>")
  //                 .append("</div>");
  //         });
  //     });
  // });


  const btn3 = document.getElementById('btn-ai');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');

btn3.addEventListener('click', () => {
  mask.classList.remove('hidden');
  modal.classList.remove('hidden');
});

mask.addEventListener('click', () => {
  mask.classList.add('hidden');
  modal.classList.add('hidden');
});
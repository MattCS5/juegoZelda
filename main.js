const items = {
  "weapons": [
    {
      "name": "Tree Branch",
      "category": "weapon",
      "icon": "https://practise-game-inventory.vercel.app/items/weapons/BotW_Tree_Branch_Icon.png",
      "value": "2",
      "stats": {
        "damage": 6
      },
      "isNew": true,
      "description": "Woodefhn branches such as this are pretty common, but it's surprisingly well-balanced. It doesn't do much damage but can serve as a weapon in a pinch."
    },
    {
      "name": "Ancient Short Sword",
      "category": "weapon",
      "icon": "https://practise-game-inventory.vercel.app/items/weapons/BotW_Ancient_Short_Sword_Icon.png",
      "value": "40",
      "stats": {
        "damage": 24
      },
      "description": "The blade of this sword was made using an ancient power lost to this modern age. Its blade appears only when drawn, and its cutting power surpasses metal swords."
    },
    {
      "name": "Dragonbone Boko Club",
      "category": "weapon",
      "icon": "https://practise-game-inventory.vercel.app/items/weapons/BotW_Dragonbone_Boko_Club_Icon.png",
      "value": "24",
      "stats": {
        "damage": 20
      },
      "isNew": true,
      "description": "This Bokoblin club has been reinforced with fossilized bones to maximize clobbering potential. Only the brawniest of Bokoblins can manage its immense weight."
    },
    {
      "name": "Feathered Edge",
      "category": "weapon",
      "icon": "https://practise-game-inventory.vercel.app/items/weapons/BotW_Feathered_Edge_Icon.png",
      "value": "15",
      "stats": {
        "damage": 16
      },
      "description": "Rito craftsmen forged this lightweight, double-edge sword so Rito warriors could soar into battle unhindered by its weight."
    },
    {
      "name": "Flameblade",
      "category": "weapon",
      "icon": "https://practise-game-inventory.vercel.app/items/weapons/BotW_Flameblade_Icon.png",
      "value": "24",
      "stats": {
        "damage": 26
      },
      "description": "This magical sword was forged in the lava of Death Mountain. It leaves white-hot flames in its wake when the blade glows red."
    },
    {
      "name": "Soldier's Broadsword",
      "category": "weapon",
      "isNew": true,
      "icon": "https://practise-game-inventory.vercel.app/items/weapons/BotW_Soldier's_Broadsword_Icon.png",
      "value": "14",
      "stats": {
        "damage": 14
      },
      "description": "A sword brandished by the soldiers who once protected Hyrule Castle. Its durable blade is well tuned for slaying monsters."
    },
    {
      "name": "Royal Claymore",
      "category": "weapon",
      "icon": "https://practise-game-inventory.vercel.app/items/weapons/BotW_Royal_Claymore_Icon.png",
      "value": "52",
      "stats": {
        "damage": 32
      },
      "description": "A two-handed sword issued to the Hyrulean royal family's immediate guard detail. Its powerful strikes are said to crush an opponent's body and resolve alike."
    },
    {
      "name": "Master Sword",
      "category": "weapon",
      "icon": "https://practise-game-inventory.vercel.app/items/weapons/BotW_Master_Sword_Icon.png",
      "value": "30",
      "stats": {
        "damage": 28
      },
      "description": "The Legendary sword that seals the darkness. Its blade gleams with a sacred luster that can oppose the Calamity. Only a hero chosen by the sword itself may wield it."
    }
  ],
  "shields": [
    {
      "name": "Wooden Shield",
      "category": "shield",
      "icon": "https://practise-game-inventory.vercel.app/items/shields/BotW_Wooden_Shield_Icon.png",
      "value": "2",
      "stats": {
        "defense": 5
      },
      "description": "This lightweight, simple shield is ideal for less-experienced fighters. It can withstand light attacks, but blocking stronger blows is not recommended."
    },
    {
      "name": "BotW Traveler's Shield",
      "category": "shield",
      "icon": "https://practise-game-inventory.vercel.app/items/shields/BotW_Traveler's_Shield_Icon.png",
      "value": "4",
      "stats": {
        "defense": 7
      },
      "description": "A sturdy shield loved by many an adventurer. It is made of animal hide and sturdy wood and is best suited to defending against weak monsters or animals."
    },
    {
      "name": "BotW Gerudo Shield",
      "category": "shield",
      "isNew": true,
      "icon": "https://practise-game-inventory.vercel.app/items/shields/BotW_Gerudo_Shield_Icon.png",
      "value": "20",
      "stats": {
        "defense": 12
      },
      "description": "The design of this metal shield has changed over time to match the Gerudo's sword-and-shield fighting style. It's favored by soldiers and travelers alike."
    },
    {
      "name": "BotW Ancient Shield",
      "category": "shield",
      "icon": "https://practise-game-inventory.vercel.app/items/shields/BotW_Ancient_Shield_Icon.png",
      "value": "70",
      "stats": {
        "defense": 25
      },
      "description": "This shield was made using ancient Sheikah technology. Its surface glows blue when raised in defense. Enhanced functionality allows it to deflect Guardian beams."
    }
  ],
  "armors": [
    {
      "name": "Zora Helm",
      "category": "helm",
      "icon": "https://practise-game-inventory.vercel.app/items/armors/BotW_Zora_Helm_Icon.png",
      "value": "3",
      "stats": {
        "armor": 5
      },
      "bonus": "swimming",
      "description": "Zora headgear made from dragon scales. Increases swimming speed and allows you to use Spin Attack."
    },
    {
      "name": "Zora Armor",
      "category": "armor",
      "icon": "https://practise-game-inventory.vercel.app/items/armors/BotW_Zora_Armor_Icon.png",
      "value": "3",
      "stats": {
        "armor": 7
      },
      "bonus": "swimming",
      "description": "Custom armor painstakingly crafted by each generation's Zora princess for her future husband. Wearing it will give you the ability to swim up waterfalls."
    },
    {
      "name": "Zora Greaves",
      "category": "greave",
      "icon": "https://practise-game-inventory.vercel.app/items/armors/BotW_Zora_Greaves_Icon.png",
      "value": "3",
      "stats": {
        "armor": 8
      },
      "bonus": "swimming",
      "description": "These greave have been passed down among the Zora for generations. It's been said they're crafted using dragon scales. Equip them to swim faster."
    },
    {
      "name": "Climber's Bandanna",
      "category": "helm",
      "icon": "https://practise-game-inventory.vercel.app/items/armors/BotW_Climber's_Bandanna_Icon.png",
      "value": "3",
      "stats": {
        "armor": 4
      },
      "bonus": "climbing",
      "description": "It may look like a regular bandanna, but it's actually infused with ancient technology that enhances core strength to improve your climbing ability."
    },
    {
      "name": "Climbing Gear",
      "category": "armor",
      "icon": "https://practise-game-inventory.vercel.app/items/armors/BotW_Climbing_Gear_Icon.png",
      "value": "3",
      "stats": {
        "armor": 9
      },
      "bonus": "climbing",
      "description": "The ancient technology in this gear will make you a better climber. The special no-slip gloves help you use your energy more efficiently to facilitate nimble climbing."
    },
    {
      "name": "Climbing Boots",
      "category": "greave",
      "icon": "https://practise-game-inventory.vercel.app/items/armors/BotW_Climbing_Boots_Icon.png",
      "value": "3",
      "stats": {
        "armor": 3
      },
      "bonus": "climbing",
      "description": "These rock-climbing boots have special no-slip toes that help you cling to walls. This ancient technology facilitates more nimble climbing."
    },
    {
      "name": "Flamebreaker Helm",
      "category": "helm",
      "icon": "https://practise-game-inventory.vercel.app/items/armors/BotW_Flamebreaker_Helm_Icon.png",
      "value": "3",
      "stats": {
        "armor": 12
      },
      "bonus": "fire",
      "description": "Stone headgear made by Goron craftsmen to protect tourists visiting Goron City. As if its flame resistance isn't enough of a selling point, it also covers your entire head!"
    },
    {
      "name": "Flamebreaker Armor",
      "category": "armor",
      "icon": "https://practise-game-inventory.vercel.app/items/armors/BotW_Flamebreaker_Armor_Icon.png",
      "value": "3",
      "stats": {
        "armor": 18
      },
      "bonus": "fire",
      "description": "Armor crafted by Gorons for Hylians curious enough to visit Goron City. It's made from fire-resistant rocks to protect the wearer."
    },
    {
      "name": "Flamebreaker Boots",
      "category": "greave",
      "icon": "https://practise-game-inventory.vercel.app/items/armors/BotW_Flamebreaker_Boots_Icon.png",
      "value": "3",
      "stats": {
        "armor": 15
      },
      "bonus": "fire",
      "description": "Goron artisans used flame-resistant rocks to craft these fireproof boots for curious Hylians visiting Goron City."
    },
    {
      "name": "Cap of the Hero",
      "category": "helm",
      "icon": "https://practise-game-inventory.vercel.app/items/armors/BotW_Cap_of_the_Hero_Icon.png",
      "value": "3",
      "stats": {
        "armor": 18
      },
      "bonus": "normal",
      "description": "According to legend, this cap was once treasured by an ancient hero. It's quite the simple cap, yet there's something about it that's just so appealing..."
    },
    {
      "name": "Champion's Tunic",
      "category": "armor",
      "isNew": true,
      "icon": "https://practise-game-inventory.vercel.app/items/armors/BotW_Champion's_Tunic_Icon.png",
      "value": "5",
      "stats": {
        "armor": 22
      },
      "bonus": "normal",
      "description": "In ancient Hyrule, this garment could only be worn by one who had earned the respect of the royal family. Equipping it will reveal an enemy's life gauge."
    },
    {
      "name": "Hylian Trousers",
      "category": "greave",
      "isNew": true,
      "icon": "https://practise-game-inventory.vercel.app/items/armors/BotW_Hylian_Trousers_Icon.png",
      "value": "3",
      "stats": {
        "armor": 14
      },
      "bonus": "normal",
      "description": "Traditional dress trousers of Hyrule. The plush fabric makes these trousers quite comfortable, and their high durability makes them ideal for travelers."
    }
  ]
}

// export default items


// ------------------------------------------------------------------------
const container = document.querySelector(".iconsContainer");



const botonEquipacionUno = document.querySelector(".botonEquipacionUno");
const botonEquipacionDos = document.querySelector(".botonEquipacionDos");
const botonEquipacionTres = document.querySelector(".botonEquipacionTres");



const niveles = document.querySelectorAll("button div");

// 1 
botonEquipacionUno.addEventListener("click", function () {
  pintarLista(items.weapons)

});
// 2
botonEquipacionDos.addEventListener("click", function () {
  pintarLista(items.shields)
});

// 3
botonEquipacionTres.addEventListener("click", function () {
  pintarLista(items.armors)
});

// Funcion


const pintarLista = (array) => {
  container.innerHTML = ''

    for (let i = 0; i < 16 ; i++) {
      const boton = document.createElement('button')
      boton.classList.add('botonOpcionesEquipacion')
      boton.innerHTML = '  <div></div>  '
      container.append(boton)
      
      boton.classList.remove("botonOpcionesEquipacionVacio");
  
  
      if (array[i]) {
        const niveles = document.createElement("div");
        boton.appendChild(niveles);
        niveles.classList.add("niveles");
  
        niveles.innerHTML = ` <div class="nivel">${(array[i].category === "weapon") ? array[i].stats.damage : (array[i].category === "shield") ? array[i].stats.defense : array[i].stats.armor}</div>`
  
        const icon = document.createElement("img");
        icon.src = array[i].icon;
        icon.classList.add("iconStyle");
        boton.appendChild(icon);
        boton.addEventListener("click", function (e) {
          pintarArmaduras(array[i])
  
          const contenedorDescripcion = document.querySelector(".descriptionContainer");
          if (boton.classList.contains("botonOpcionesEquipacionVacio")) {
            contenedorDescripcion.innerHTML = "";
          } else {
            contenedorDescripcion.innerHTML = `
          <div class="title">${array[i].name}</div>
          <div class="contenedorInfo">
             <div class="puntuacion">
                <img class="boton" src="${(array[i].category === "weapon") ? "https://practise-game-inventory.vercel.app/_next/static/media/sword.91ac01bf.svg" : (array[i].category === "shield") ? "https://practise-game-inventory.vercel.app/_next/static/media/shield.f816a312.svg" : "https://practise-game-inventory.vercel.app/_next/static/media/armor.5da7a91d.svg"}">
                <div class="nivel"> ${(array[i].category === "weapon") ? array[i].stats.damage : (array[i].category === "shield") ? array[i].stats.defense : array[i].stats.armor} </div> </div>
  
              <div class="texto">${array[i].description}</div>
          </div>
            `
          }
  
  
        })
  
      } else {
        boton.classList.add('botonOpcionesEquipacionVacio');
      }
    }

    
  }


pintarLista(items.weapons)


// ------------------------------------------------------------------



// pinta las armaduras de la seccion derec

 

// function pintarArmaduras(array) {

//   const contenedorEspadas = document.querySelector(".cuerpo button");
//   const contenedorEscudos = document.querySelector(".cuerpo").lastElementChild;
//   if (array.category === "weapon") {
//     contenedorEspadas.innerHTML = `
//     <img class="boton" src="${array.icon}">
//     `
//   }
//   else if (array.category === "shield"){
//     contenedorEscudos.innerHTML =
//     `
//     <img class="boton" src="${array.icon}">
//     `
//   }
//   botonOpcionesEquipacion.forEach((boton) => {
//     boton.addEventListener("click", function () {
//     });
//   });
// }



function pintarArmaduras(array) {

  const contenedorEspadas = document.querySelector(".cuerpo button");
  const contenedorEscudos = document.querySelector(".cuerpo").lastElementChild;
  const contenedorCasco = document.querySelector(".cabeza").firstElementChild;
  const contedorPiernas = document.querySelector('.piernas').firstElementChild;
  const contenedorCuerpo = document.querySelector(".cuerpo .armarPersonajeBoton").nextElementSibling;

  switch (array.category) {
    case 'weapon':
      contenedorEspadas.innerHTML = `
      <img class="boton" src="${array.icon}">
      `
      break;
    case 'shield':  
      contenedorEscudos.innerHTML =
    `
    <img class="boton" src="${array.icon}">
    `
    break;
    case 'helm':
      contenedorCasco.innerHTML =
      `
      <img class="boton" src="${array.icon}">
      `
      break;
    
    case 'greave':
      contedorPiernas.innerHTML =
      `
      <img class="boton" src="${array.icon}">
      `
      break;
    case "armor":
      contenedorCuerpo.innerHTML =
      `
      <img class="boton" src="${array.icon}">
      `
    default:
      break;
  }}
  






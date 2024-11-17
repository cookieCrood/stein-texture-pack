function addStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function assembleItemTexture(itemId, texturePath) {

    return `

.stein-quick-bar-slot[style*="/assets/images/items/${itemId}.png"], .stein-item-inventory-slot[style*="/assets/images/items/fighter_t_2_3.png"] {

    background-image: url(${texturePath}) !important;

}

`

}

function a(itemId, texturePath) {

    var o = new Object()

    o['id'] = itemId
    o['path'] = texturePath

    textures.push(o)

}

var textures = []

// ADD TEXTURES BELOW

a('fighter_t_2_3', 'https://pixil.nyc3.digitaloceanspaces.com/images/art/pending/242058.gif')

// ADD TEXTURES ABOVE 



// eg. texture:
// a('itemId', 'texturePath')

// a('fighter_t_2_3', 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzNlbGpiYmNjczJsOGxobGN0cXlrbDBjMTB6NzhpdmxuaDdsNGllZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0hLOxvKJHArT2OjHba/giphy.webp')

// Changes the Demidicus item texture to a 



var str = ''

for (var link in textures) {

    strAdd = assembleItemTexture(link['id'], link['path'])
    str += strAdd

}

addStyle(str)
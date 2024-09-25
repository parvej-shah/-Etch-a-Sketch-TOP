let boxes = document.getElementsByClassName('box');
for(let i=0; i<=100;i++){
    console.log(i)
 const div = document.createElement('div');
 div.classList.add(
    'box'
 )
 document.getElementById('section').appendChild(div);
}
let gridNumber;
document.getElementById('submit').addEventListener('click',()=>{
   gridNumber = document.getElementById('grid-number').value;
   while (document.getElementById('section').firstChild) {
    document.getElementById('section').removeChild(document.getElementById('section').firstChild);
}
   document.getElementById('section').classList.remove(
    'grid-cols-10',
    'grid-rows-10'
   )
   document.getElementById('section').classList.add(
    `grid-cols-${gridNumber}`,
    `grid-rows-${gridNumber}`
   )
   gridCreator()
}
)
function gridCreator(){
    for(let i=0; i<=(gridNumber*gridNumber);i++){
        console.log(i)
     const div = document.createElement('div');
     div.classList.add(
        'box'
     )
     document.getElementById('section').appendChild(div);
    }
    mouseEvent();
    counter = 0;
}
let counter = 0;
function mouseEvent(){
    for(let box of boxes){
        box.addEventListener('mouseover',()=>{
            const tailwindColors = [
                'red',
                'orange',
                'amber',
                'yellow',
                'lime',
                'green',
                'emerald',
                'teal',
                'cyan',
                'sky',
                'blue',
                'indigo',
                'violet',
                'purple',
                'fuchsia',
                'pink',
                'rose',
                'gray',
                'slate',
                'zinc'
              ];              
            const colorCode = [100,200,300,400,500,600,700,800,900,950,50]
            const colorOpacity = [10,20,30,40,50,60,70,80,90,100,0]
            const randomIndexCode = Math.floor(Math.random()*colorCode.length)
            const randomIndexColor = Math.floor(Math.random()*tailwindColors.length)
            const randomIndexOpacity = Math.floor(Math.random()*colorOpacity.length)
            box.classList.add(`bg-${tailwindColors[randomIndexColor]}-${colorCode[randomIndexCode]}/${colorOpacity[randomIndexOpacity]}`)
        })
    }
}
mouseEvent();
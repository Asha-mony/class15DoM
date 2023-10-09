// console.log('connect');

const h1collection = document.getElementsByTagName('h1');
for (const h1 of h1collection) {
    console.log(h1);

    h1.style.color = 'red'
    h1.style.fontweight = 'bold'
    h1.style.textDecoration = 'underline'
    h1.style.textShadow = '2px 2px black'
    h1.innerText = 'Besi kotha bole polapain MERN-04'
}
// console.log(h1collection);

// first i have get the parent field
const container = document.getElementById('container')

const ulContainer = document.createElement('ul')

const Li1 = document.createElement('li')
const Li2 = document.createElement('li')
const Li3 = document.createElement('li')

Li1.innerText = 'USA';
Li2.innerText = 'China';
Li3.innerText = 'Bangladesh';

ulContainer.appendChild(Li1);
ulContainer.appendChild(Li2);
ulContainer.appendChild(Li3);

container.appendChild(ulContainer)

// shortcut
const secContainer = document.getElementById('container2') 

const ul = document.createElement('ul')
ul.innerHTML = `
    <li>unimart</li>
    <li>minico</li>
    <li>Sowpno</li>
`
// console.log(ul);
secContainer.appendChild(ul)
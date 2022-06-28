let data = JSON.parse(localStorage.getItem('data')) ? 
JSON.parse(localStorage.getItem('data')) : 
[
    'SRod', 'llsomethingRod', 'HHwand', '98 wand', 
    'Wand', 'Rod', 'Peter', 'John', 'Sam', 'Rod 23'
];

function filterByOption(event) {
    console.clear();// To clear the console
    switch(event.target.value){
        case 'wand': 
            console.log(data.filter( e => e.toLowerCase().includes('wand')));
        break
        case 'rod': 
            console.log(data.filter( e => e.toLowerCase().includes('rod')));
        break  
        case 'other': 
            console.log(data.filter( e => !e.toLowerCase().includes('wand') && !e.toLowerCase().includes('rod')));
        break  
    }
}

document.querySelector('#selection').addEventListener('change', filterByOption);

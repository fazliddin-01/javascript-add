let massif = [];

let menu;
while (true) {
    menu = prompt('Kommanda kiritin', "add, ");


    const [qowiw, ...ayr] = menu.split(',');
    const value = ayr.join(',').trim();

    if (qowiw === 'add' && value) {
        massif.push(value);
    } else if (qowiw === 'del' && value) {
        const index = massif.indexOf(value);
        if (index > -1) {
            massif.splice(index, 1);
        }
    } else if (qowiw === 'stop') {
        break;
    }
}

console.log(massif);

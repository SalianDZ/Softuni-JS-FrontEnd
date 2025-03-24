function inventory(input){
    const heroes = [];
    for (const inputs of input) {
        const commands = inputs.split(' / ');
        const currentHero = {
            name: commands[0],
            level: commands[1],
            items: commands[2],
        }
        heroes.push(currentHero);
    }

    for (const hero of heroes.sort((a,b) => a.level - b.level)) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]    
    );
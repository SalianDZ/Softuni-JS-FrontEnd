function printTowns(townsInput){
    townsInput.forEach(townData =>{
        const tokens = townData.split(' | ');

        const town = tokens[0];
        const latitude = Number(tokens[1]).toFixed(2);
        const longitude = Number(tokens[2]).toFixed(2);

        let townObject = {
            town: town,
            latitude: latitude,
            longitude: longitude,
        };

        console.log(townObject);
    });
}
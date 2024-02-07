export enum Energy {
    Electric,
    Hydrogen,
}

export function getEnergyMatIconName(energy: Energy) {
    if (energy == Energy.Electric) {
        //console.log('Here');
        return "bolt";
    } else if (energy == Energy.Hydrogen) {
        //console.log('Hey');
        return "water_ph";
    } else {
        return '';
    }
}

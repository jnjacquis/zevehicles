export enum VehicleType {
    Car,
    Truck,
}

export function getVehicleTypeMatIconName(vehicleType: VehicleType) {
    if (vehicleType == VehicleType.Car) {
        return "directions_car";
    } else if (vehicleType == VehicleType.Truck) {
        return "local_shipping";
    } else {
        return '';
    }
}
export interface Strategy {
  execute(): void;
}

export class TransporationStrategy implements Strategy {
  execute(): void {
    console.log("Transporation Strategy Execute");
  }
}
export class DriverStrategy implements Strategy {
  execute(): void {
    console.log("Driver Strategy Execute");
  }
}

export class PedestrianStrategy implements Strategy {
  execute(): void {
    console.log("Pedestrian Strategy Execute");
  }
}

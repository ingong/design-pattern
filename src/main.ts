import { Context } from "./context";
import {
  TransporationStrategy,
  DriverStrategy,
  PedestrianStrategy,
} from "./strategy";

(() => {
  const context = new Context();
  const strategy = getStrategy();

  switch (strategy) {
    case "transportation":
      context.setStrategy(new TransporationStrategy());
      context.executeStrategy();
      return;
    case "driver":
      context.setStrategy(new DriverStrategy());
      context.executeStrategy();
      return;
    case "pedestrian":
      context.setStrategy(new PedestrianStrategy());
      context.executeStrategy();
      return;
  }
})();

function getStrategy(): "transportation" | "driver" | "pedestrian" {
  const stragey: "transportation" | "driver" | "pedestrian" = "transportation";
  return stragey;
}

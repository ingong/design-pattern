import { Strategy } from "./strategy";

export class Context {
  private strategy: Strategy;

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  executeStrategy() {
    this.strategy.execute();
  }
}

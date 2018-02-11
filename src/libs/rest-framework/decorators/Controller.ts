import { getMetadataStorage } from "../index";
import { ControllerMetadataArgs } from "../storage";

export function Controller(route: string) {
  return (target: Object | Function) => {
    const controller: ControllerMetadataArgs = { route, target };
    getMetadataStorage().controllers.push(controller);
  };
}

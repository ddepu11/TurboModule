import type { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  switchOnFlashLight(): void;
  switchOffFlashLight(): void;
}

export default TurboModuleRegistry.get<Spec>("RTNCalculator") as Spec | null;

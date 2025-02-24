import { initialise } from "conductor/dist/conductor/runner/util/";
import { MyEvaluator } from "./MyEvaluator";

const {runnerPlugin, conduit} = initialise(MyEvaluator);

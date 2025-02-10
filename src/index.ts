import { initialise } from "sa-conductor/dist/conductor/runner/util/";
import { MyEvaluator } from "./MyEvaluator";

const {runnerPlugin, conduit} = initialise(new MyEvaluator());

import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";

const eval2 = eval;

export class MyEvaluator extends BasicEvaluator {
    private someEvaluatorState: number;

    async evaluateChunk(chunk: string): Promise<void> {
        this.someEvaluatorState++;
        eval2(chunk);
        this.conductor.sendOutput(`Chunk ${this.someEvaluatorState} evaluated!`);
    }

    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.someEvaluatorState = 0;
    }
}

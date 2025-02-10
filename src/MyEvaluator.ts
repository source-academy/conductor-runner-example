import {BasicEvaluator, IRunnerPlugin} from "sa-conductor/dist/conductor/runner";

const eval2 = eval;

export class MyEvaluator extends BasicEvaluator {
    private someEvaluatorState: number;

    async evaluateChunk(chunk: string): Promise<void> {
        this.someEvaluatorState++;
        eval2(chunk);
        this.conductor.sendOutput(`Chunk ${this.someEvaluatorState} evaluated!`);
    }

    constructor() {
        super();
        this.someEvaluatorState = 0;
    }
}

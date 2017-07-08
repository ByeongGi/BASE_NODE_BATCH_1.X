import { Executer } from '../interfaces';
import { JobRepository } from "../repository";
/**
 *
 * 배치를 실행하고 실제 비지니스 로직을 가지고 있는 Job을 실행한다.
 * @description
 */
export declare class BatchExecuter implements Executer {
    private jobRepository;
    constructor(jobRepository: JobRepository);
    run(args: string[]): number;
}

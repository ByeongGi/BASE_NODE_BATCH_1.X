import { Executer } from '../interfaces';
import { JobRepository } from "../repository";

/**
 * 
 * 배치를 실행하고 실제 비지니스 로직을 가지고 있는 Job을 실행한다.
 * BatchExecuter 자체를 구동함  -> Job 에 있는  JobExcuter 실행한다.
 * 
 * @description 
 */
export class BatchExecuter implements Executer {

    constructor(private jobRepository: JobRepository) {

    };
    /**
     * 
     * @param args {number} : 0, -1 , 1  XXX: 성공결과 ? 고민 ...
     */
    public run(args: string[]): number {

        return 0;
    }

}
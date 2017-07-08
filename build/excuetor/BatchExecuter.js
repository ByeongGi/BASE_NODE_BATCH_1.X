"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * 배치를 실행하고 실제 비지니스 로직을 가지고 있는 Job을 실행한다.
 * @description
 */
class BatchExecuter {
    constructor(jobRepository) {
        this.jobRepository = jobRepository;
    }
    ;
    run(args) {
        return 0;
    }
}
exports.BatchExecuter = BatchExecuter;

"use strict";
/**
 * JobReopository Job Object 저장소
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
class JobRepository {
    constructor(jobs) {
        this.jobs = jobs;
        this.jobs = jobs;
    }
    setJob(job) {
        this.jobs.push(job);
    }
    getJob(id) {
        let job = { id: '', name: '', description: '' };
        this.jobs.forEach(elm => {
            if (elm.id === id) {
                job = elm;
            }
        });
        return job;
    }
    getJobs() {
        return this.jobs;
    }
    setJobs(jobs) {
        this.jobs = jobs;
    }
    refresh() {
        // TODO : 차후에 구현 예정  
        // 다시 JOB을 읽어오도록 차후에 구현함
    }
}
exports.JobRepository = JobRepository;

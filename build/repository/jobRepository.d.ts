/**
 * JobReopository Job Object 저장소
 *
 *
 */
import { Repository, Job } from '../interfaces';
declare class JobRepository implements Repository {
    private jobs;
    constructor(jobs: Array<Job>);
    setJob(job: Job): void;
    getJob(id: string): Job;
    getJobs(): Array<Job>;
    setJobs(jobs: Array<Job>): void;
    refresh(): void;
}
export { JobRepository };

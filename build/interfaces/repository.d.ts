import * as D from "./domain";
export interface Repository {
    setJob(job: D.Job): void;
    getJob(id: string): D.Job;
    getJobs(): Array<D.Job>;
    setJobs(jobs: Array<D.Job>): void;
}

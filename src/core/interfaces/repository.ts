import * as D from "./domain";


export interface Repository {
    setJob(job: D.Job): void;
    getJob(id: string): D.Job;
    getJobs(): Map<string,D.Job>;
    setJobs(jobs: Map<string,D.Job>): void;
}

/**
 * JobReopository Job Object 저장소 
 * 
 * 
 */


import { Repository, Job} from '../interfaces';

class JobRepository implements Repository {

    constructor(private jobs: Map<string,Job>) {
        this.jobs = jobs;
    }

    setJob(job: Job): void {
        this.jobs.set(job.id,job);
    }

    public getJob(id: string): Job {
        let job = this.jobs.get(id);
        if ( job === undefined){
            return {id:''};
        } else {
            return job;
        }
    }

    public getJobs(): Map<string,Job> {
        return this.jobs;
    }
    public setJobs(jobs: Map<string,Job>): void {
        this.jobs = jobs;
    }

    public refresh(){
        // TODO : 차후에 구현 예정  
        // 다시 JOB을 읽어오도록 차후에 구현함
    }
}



export {
    JobRepository
};
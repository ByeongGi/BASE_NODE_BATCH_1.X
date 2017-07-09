import { Job, JobParameter, JobExecutor } from '../interfaces';

export interface JobFactory<T extends JobExecutor> {
    creteJobExecuter(): T;
} 



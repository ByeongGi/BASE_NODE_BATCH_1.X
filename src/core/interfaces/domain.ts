

export interface JobParameter{
    id?: string; 
    name?: string;
    parameter?: Map<string,any>;
}

export interface JobExecutor {
    execute(jobParameter:JobParameter):any;
} 

export interface Job {
    id: string;
    name?: string;
    description?: string;
    jobParameter?:JobParameter;
    jobExecutor?:JobExecutor;
}
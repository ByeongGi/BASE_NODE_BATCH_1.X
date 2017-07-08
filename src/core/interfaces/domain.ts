export interface JobParameter {
    id: string;
    name: string;
    interalParameter?: Map<string,any>;
}
export interface JobExecutor {
    execute:Function;
}

export interface Job {
    id: string;
    name?: string;
    description?: string;
    jobParameter?:JobParameter;
    jobExecutor?:JobExecutor;
}





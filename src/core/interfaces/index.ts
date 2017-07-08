import * as Repository   from "./repository";
import * as Domain  from "./domain";
import * as Executer from "./executer";
                    
declare namespace kirabatch {
    export type Repository = Repository.Repository;
    export type Job  = Domain.Job;
    export type Executer = Executer.Executer;
}

export = kirabatch;
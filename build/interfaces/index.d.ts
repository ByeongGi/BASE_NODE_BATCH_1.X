import * as Repository from "./repository";
import * as Domain from "./domain";
import * as Executer from "./executer";
declare namespace kirabatch {
    type Repository = Repository.Repository;
    type Job = Domain.Job;
    type Executer = Executer.Executer;
}
export = kirabatch;

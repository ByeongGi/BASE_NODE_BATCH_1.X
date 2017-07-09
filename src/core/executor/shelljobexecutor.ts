import { JobExecutor } from "../interfaces";
import { JobFactory } from "../factory";
import { exec } from "child_process";     


export class ShellJobExecutor implements JobExecutor {
    execute: ()=>{
        exec();



        return {};
    };




    
}
 


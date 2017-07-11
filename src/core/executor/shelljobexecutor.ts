import { JobExecutor ,JobParameter } from "../interfaces";
import { ShellJobParameter } from "../data";
import { JobFactory } from "../factory";
import { exec } from "child_process";     


export class ShellJobExecutor implements JobExecutor {
    
    
    public execute(shellJobParameter: ShellJobParameter):any{
        
        
        let cmd =  shellJobParameter.command;
        let args  = shellJobParameter.args;
        let argStr = args.join(' ');
        
        exec(`${cmd} ${argStr}` , (error, stdout, stderr) => {
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
                if (error !== null) {
                    console.log(`exec error: ${error}`);
                }
        });
   

    }




    
}
 


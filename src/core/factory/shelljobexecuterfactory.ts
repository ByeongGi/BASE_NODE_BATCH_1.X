import { JobExecutor } from "../interfaces";
import { JobFactory } from "../factory";
import { ShellJobExecutor } from "../executor";


export class  ShellJobExecuterfactory implements JobFactory<ShellJobExecutor> {
    creteJobExecuter(): ShellJobExecutor {
        return new ShellJobExecutor();
    }
}
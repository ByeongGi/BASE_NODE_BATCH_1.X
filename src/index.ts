import { BatchExecuter,
         JobRepository,
         ShellJobExecuterfactory,
         ShellJobExecutor,
         JobParameter,
         ShellJobParameter 
} from "./core";



 // TEST CODE
const factory = new ShellJobExecuterfactory();
const jobexecuter: ShellJobExecutor= factory.creteJobExecuter();
// phantomjs.cmd batchimpl/facebookCollector.js > ../log/test.log -> 이부분은 DB 로 저장할 생각
// DB  <-> JSON 파일로 읽거나 DB로 읽을수 있게 변경하기 . 
const param: ShellJobParameter = { command:'phantomjs.cmd', 
                                   args : [  'batchimpl/facebookCollector.js'
                                           , '>'
                                           , '../log/test.log'
                                          ],
                                   parameter:new Map<string,any>()
                                 };

jobexecuter.execute(param);



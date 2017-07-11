import { JobParameter } from "../interfaces";
/**
 * ShellJobParameter : ShellJobExecutor를 실행시에 전달될 파리미터 데이터 타입 정의
 * @description 
 */
export interface ShellJobParameter extends JobParameter {
    command : string;
    args?: Array<string>;
}
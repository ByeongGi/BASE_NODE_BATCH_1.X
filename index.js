const { exec } = require('child_process');
exec('phantomjs.cmd facebookCollector.js > ./log/test.log' , (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
});
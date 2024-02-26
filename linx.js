const child_process = require("node:child_process");

if(process.argv.length === 2) {
    throw new Error("[LINX] - You did not specify the nx command to run.")
}

async function main() {
    const nxCommandToRun = process.argv.slice(2).join(" ");
    const commandToRun = `docker run -v .:/usr/src/app -p 4200-4299:4200-4299 cferry101/linx ${nxCommandToRun}`;
    console.log(commandToRun)
    const promise = new Promise((res, rej) => {
        const cp = child_process.exec(commandToRun, (error, stdout, stderr) => {
            if(error) {
                console.error(error);
            }
            console.log(stdout);
            console.error(stderr)
        });
        cp.stdio[1]?.on('data', (data) => {
            console.log(data)
        })
    });
    await promise;
}

main();

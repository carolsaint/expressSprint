import readline from "readline";
import chalk from "chalk";
const read = readline.createInterface(
    {input: process.stdin, output: process.stdout}
    );
const receive = [];
console.log('Digite o CSS:  \nOu digite ' + chalk.red('SAIR') + ' para sair.' );
read.on('line', (line) => {
    if (line.toUpperCase() == 'SAIR') {
        read.close();
        receive.map(lista => lista.toLowerCase()).sort().map((lista) => console.log(chalk.inverse(lista)));
    }
    receive.push(line);
});

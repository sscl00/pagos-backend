// dependencies log
import chalk from 'chalk';
//import Symbols from 'log-symbols';


//  info: chalk.blue('ℹ'),
// 	success: chalk.green('✔'),
// 	warning: chalk.yellow('⚠'),
// 	error: chalk.red('✖')

// other dependencies
import config from '../config/envServer';

// scope configuration
const log = console.log;
const { appName, serverURL, mode } = config;

// functions privated
/**
 * render message
 * @param {string} header - symbolic message
 * @param {strig} [body] - main content message
 */
const render = (header, body) => {
    log(header);
    body && log(body);
    body && log('\n');
};

export default class Response {
    // listen server response
    static listen() {
        const header = `${chalk.blue(`[server - ${mode}]`)} ${
            chalk.blue('ℹ')
        } ${chalk.cyan(`${appName} on ${serverURL}`)}`;
        render(header);
    }

    /**
     * success response ✔
     * @param {string} message - body message
     */
    static success(message) {
        const header = `${chalk.greenBright('[server]')} ${
            chalk.green('✔')
        } ${chalk.greenBright('Success operation')}`;
        render(header, message);
    }

    /**
     * error response ✖
     * @param {string} message - body message
     */
    static error(message) {
        const header = `${chalk.redBright('[server]')} ${
            chalk.red('✖')
        } ${chalk.redBright('Bad operation')}`;
        render(header, message);
    }

    /**
     * info response ⚠
     * @param {string} message - body message
     */
    static info(message) {
        const header = `${chalk.yellowBright('[server]')} ${
            chalk.yellow('⚠')
        } ${chalk.yellowBright('Info operation')}`;
        render(header, message);
    }
}

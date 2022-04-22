"use strict";

import chalk from 'chalk'

function debug(output)
{
    console.log("[DEBUG] : " + output);
}

function warning(output)
{
    console.log(chalk.yellow("[WARNING] : " + output));
}

function info(output)
{
    console.log(chalk.green("[INFO] : " + output));
}

function error(output)
{
    console.log(chalk.red("[ERROR] : " + output));
}

export { debug, info, error, warning }

const os = require('os')

// info about the current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`the system Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release: os.release(),
    tatalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS)


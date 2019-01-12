var isDev = true;
console.log("process.env.NODE_ENV ", process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
    isDev = false;
} else {
    isDev = true;
}

module.exports = { isDev };
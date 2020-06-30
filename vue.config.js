
// 参考 https://cli.vuejs.org/zh/guide/deployment.html#github-pages
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/app/mall/'
        : '/',
};

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    appDirectory: "app", // Directory containing your routes and entry files
    assetsBuildDirectory: "public/build", // Directory for compiled assets
    publicPath: "/build/", // Path for serving assets
    serverBuildPath: "build/index.js", // Path for server build output
    serverModuleFormat: "esm", // Format for the server build
};

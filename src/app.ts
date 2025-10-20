import { checkRequiredDependencies } from "@/utils/checkRequiredDependencies";
import { createAllPaths } from "@/utils/createPaths";

console.log(`
Welcome to Dukeploy!

What is Dukeploy?
Dukeploy is a deployment tool designed to simplify and automate the process of deploying applications.

Why use Dukeploy?
- Easy to configure and use.
- Easy cli commands for deployment tasks.
- Fast and efficient deployment process.
- Features in continuous development.

Get started by configuring your applications and deploying them with Dukeploy!
`);

createAllPaths();

checkRequiredDependencies();

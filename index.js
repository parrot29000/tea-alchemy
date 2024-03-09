const { onboardDeveloper, registerProject, receiveTokens } = require('tea-demo-arsen');

console.log("Starting tea-alchemy project...");

const developerInfo = {
    name: "Jasmine",
    email: "jasmine@tealchemy.com"
};

const projectInfo = {
    name: "Tea Alchemy Experiment",
    repositoryUrl: "https://github.com/parrot29000/tea-alchemy"
};

const walletAddress = onboardDeveloper(developerInfo);
const projectId = registerProject(projectInfo);
receiveTokens(projectId);

console.log("Tea-alchemy demo completed.");

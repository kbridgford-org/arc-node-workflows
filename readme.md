# Hello World App

A simple Node.js application that serves a "Hello World" message with an image.

## Project Structure

- [`index.js`](index.js) sets up an Express server to serve a basic HTML page.
- [`package.json`](package.json) contains scripts and dependencies.
- [`test/index.test.js`](test/index.test.js) contains integration tests.
- [`Dockerfile`](Dockerfile) provides instructions for building a Docker image.
- The workflows in the [`.github/workflows`](.github/workflows/) directory automate building, testing, and deploying.

## Setup

### Azure

- Create an Azure Service Principal.
- Make note of the SPN values like this:
```
{
    "clientSecret":  "******",
    "subscriptionId":  "******",
    "tenantId":  "******",
    "clientId":  "******"
}
```
- Create a resource group.
- Grant the SPN permissions (contributor) to the RG.
- Create a linux App Service plan in the RG.
- Create two Web Apps in the RG: `nodeapp`, `nodeapp-container`. Specs are:
![image](https://github.com/user-attachments/assets/e5a33d73-42c2-4cc8-b7fb-011fd1ade122)
![image](https://github.com/user-attachments/assets/44710837-e915-471b-8f03-afb90cdf56b2)

### GitHub

- Create a classic access token with `repo`, `write:packages`. Make note of the token.
- Create two secrets at the repo level, `AZURE_CREDENTIALS`, `REGISTRY_PASSWORD`. Set the values to the Azure SPN and GitHub Token created earlier.

## Run

There are two workflow files in the [`.github/workflows`](.github/workflows/) directory. One workflow will deploy a container and the other will deploy the node.js app directly.

The container workflow builds the container and pushes it to GitHub packages. You can replace this functionality with an Azure Container Registry if you wish.

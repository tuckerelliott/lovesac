# Lovesac Crosswalk Demo

This repo is an Helix/Franklin/NGC/SuccessEdge/EDN project that will serve as the basis for showcasing Project Crosswalk's ability to leverage a Helix project (this codebase) within Universal Editor and to serve the composed experience over the Helix "Edge Delivery Network".  

## Environments
- Preview: https://main--lovesac--tuckerelliott.hlx.page/
- Live: https://main--lovesac--tuckerelliott.hlx.live/

### GraphQL Endpoints
- Lovesac Staging: https://staging.lovesac.com/graphql

## Configurator and CORS
Currently there is a CORs issue preventing [the configurator](https://configurator-v2--lovesac--tuckerelliott.hlx.live/sactionals/build/203a585400317f3b2b900f32ffa8886b) from showing in a normal context. You can disable CORs Restrictions in Safari in `Develop` >> `Disable CORs Restrictions`.

## Devcontainers

This repository has a `.devcontainer` directory suitable for running the project in vscode or Github Codespaces. By default, the devcontainer will install node dependancies and run `hlx up` resulting in a development server spawning on port `3000`.

## Page Templates

`templates/blank.html` contains a representation of a lovesac page. There is a `<content>` div around line 310 that can be used to anchor content.
Fetched with Firefox

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `helix-project-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [helix-bot](https://github.com/apps/helix-bot) to the repository
1. Install the [Helix CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/helix-cli`
1. Start Franklin Proxy: `hlx up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)

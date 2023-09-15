# Lovesac Crosswalk Demo

This repo is an Helix/Franklin/NGC/SuccessEdge/EDN project that will serve as the basis for showcasing Project Crosswalk's ability to leverage a Helix project (this codebase) within Universal Editor and to serve the composed experience over the Helix "Edge Delivery Network".  

## Environments
- Preview: https://main--lovesac--tuckerelliott.hlx.page/
- Live: https://main--lovesac--tuckerelliott.hlx.live/

### GraphQL Endpoints

- Lovesac Staging: https://staging.lovesac.com/graphql

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

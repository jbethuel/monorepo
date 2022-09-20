# Typescript Project Monorepo

## Architecture

| Packages   | Folder                     | Description                                |
| :--------- | :------------------------- | :----------------------------------------- |
| `core`     | `packages/core`            | Contains business models, utilities, etc   |
| `tsconfig` | `packages/ts-config`       | Typescript configuration                   |
| `eslint`   | `packages/eslint-config`   | Eslint configuration                       |
| `prettier` | `packages/prettier-config` | Prettier configuration                     |
| `ui`       | `packages/ui`              | Business generic UI (buttons, labels, etc) |

| Application | Folder       | Description                                                 |
| :---------- | :---------   | :---------------------------------------------------------- |
| `web`       | `apps/web`   | React Application (can consume all projects under packages) |
| `server`    | `apps/server`| Simple Express app                                          |

## Technology
- Typescript - Language
- Turborepo - Monorepo tool
- Eslint, Prettier - Style, Lint
- React, Vite, Express - Apps

## Sample Usage

```
# installation
yarn install

# selecting a package to run a script into
# <package-name> can be anything under apps/ or packages/ as long as it is declared under root package.json
yarn <package-name> 

# sample script to install luxon to core
yarn core add luxon

# sample script to run web
yarn web dev

# running dev across all packages that has dev script in its respective package.json
yarn dev
```

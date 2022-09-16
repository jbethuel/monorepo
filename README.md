# Typescript Project Monorepo

## Architecture

| Packages   | Folder                     | Description                                |
| :--------- | :------------------------- | :----------------------------------------- |
| `core`     | `packages/core`            | Contains business models, utilities, etc   |
| `tsconfig` | `packages/ts-config`       | Typescript configuration                   |
| `eslint`   | `packages/eslint-config`   | Eslint configuration                       |
| `prettier` | `packages/prettier-config` | Prettier configuration                     |
| `ui`       | `packages/ui`              | Business generic UI (buttons, labels, etc) |

| Application | Folder     | Description                                                 |
| :---------- | :--------- | :---------------------------------------------------------- |
| `web`       | `apps/web` | React Application (can consume all projects under packages) |

## Sample Usage

```
# installation
yarn install

# selecting a package
yarn <package-name> // <package-name> can be core, web, ui

# sample script to install luxon to core
yarn core add luxon

# sample script to run web
yarn web dev

# running dev across all packages that has dev script in its package.json
yarn dev
```

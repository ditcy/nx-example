## Create workspace

```sh
npx create-nx-workspace
```

## Generate a library

```sh
npx nx g @nx/js:lib packages/animal

# npx nx g @nx/js:lib packages/pkg1 --publishable --importPath=@my-org/pkg1
```

## Run tasks

To build the library use:

```sh
npx nx build animal

node ./packages/animal/dist/index.js
```

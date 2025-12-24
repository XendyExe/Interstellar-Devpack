# Interstellar DEVPACK
This contains all the type definitions for Interstellar if you wish to do scripting with it.\
**Please check for updates regularly, the launcher will alert you if your devpack version is out of date!**
## How to use:
- Download this gihub as a zip, and replace the `__devpack__` folder in your `InterstellarExtension/moddev` folder with the one in this.
- Make sure to move the `tsconfig.json`, `package-lock.json`, and `package.json` to the root folder
- Run `npm install` to check for updates

## Scripting:
- Create a folder called `src` and `dist` in your extension, `src` is going to be where you are coding, and `dist` is the output folder
- Create a `index.ts` in your `src` folder, and paste the following, replacing YourModName with your actual mod name:
```ts
import InterstellarScriptingMod from "@interstellar/InterstellarScriptingMod"

export default class YourModName extends InterstellarScriptingMod {
    async preload() {
        console.log("Hello world!");
    }
    async load() {

    }
}
```
- Add the following to your `interstellar.json`:
```json
{
    "scripting": "commonjs",
    "entrypoint": "dist/index.js"
}
```
> Notice how it is set to `dist/index.js`, Interstellar cannot run ts files, do not set it to your `src/index.ts`!

- Running `npx tsc --watch` should automatically compile your scripts whenever you edit them
- Refresh your page
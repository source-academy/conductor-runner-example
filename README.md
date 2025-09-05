# conductor-runner-example

An example of how to use the Conductor framework to create a runner that will run on Source Academy.

## Using this repository

This repository is a *template*. To use, click the "Use this template" button,
and create a new repository for yourself - don't clone or fork this repository.

However, if you wish to propose changes to this repository, then *do* clone or fork it - 
don't create a new repository based on this template.

## Implementing a new language

See `src/MyEvaluator.ts`. The user's code is received in the argument to `evaluateChunk`.
It is important to mark this function `async` to block receiving more chunks while still evaluating the current one,
especially when `await`ing Conductor functions or other asynchronous code.
Alternatively, if you would like to allow more chunks to be received, remove the `async` keyword.
You may need to write a separate `async` function to use the `await` keyword, and call it in `evaluateChunk`
without awaiting (do not return your separate function's Promise in `evaluateChunk`,
or the receiving of more chunks will be blocked!).

Interaction with the Source Academy frontend can be done through the `conductor` property.
For example, `conductor.sendOutput(str)` shows `str` on the REPL.

## Testing your new language

Run `yarn start`. This starts a development server and compiles your evaluator in watch mode
(recompiling on any changes).

Your evaluator will be available at [`http://localhost:8123/index.js`](http://localhost:8123/index.js).

## Making your language available to run

Run `yarn build`. If there are no problems, a file `dist/index.js` will be generated.
This is the file that will be used to run your implementation of the language.

This repository has been configured to automatically build your runner and deploy it to GitHub Pages
upon pushing to the `main` branch on GitHub.
You should be able to find it at `https://{your-username}.github.io/{your-repository}/index.js`.

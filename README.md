# conductor-runner-example

An example of how to use the Conductor framework to create a runner that will run on Source Academy.

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

## Making your language available to run

Run `yarn build`. If there are no problems, a file `dist/index.js` will be generated.
This is the file that will be used to run your implementation of the language.

This repository has been configured to automatically build your runner and deploy it to GitHub Pages
upon pushing to the `main` branch on GitHub.
You should be able to find it at `https://{your-username}.github.io/{your-repository}/index.js`.

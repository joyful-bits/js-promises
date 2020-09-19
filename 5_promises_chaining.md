# 5. Promises - chaining

Once again, you are provided with a function `loadRandomColor`. This time, however, it does not accept any arguments. Instead, it returns a promise which will eventually resolve a random color.

Your task is to chain 5 promises, so that they are executed one after another. In other words, you should repeat these steps 5 times:

1. Start loading a new color.
2. Once it's loaded, print it.

Do not start loading a new color before you print the previous one.

Remember to handle the error. If it happens, show the appropriate error message and stop loading new colors.

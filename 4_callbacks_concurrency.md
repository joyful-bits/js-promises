# 4. Callbacks - concurrency

The function `loadRandomColor` expects a callback for its only argument. The callback takes the standard 2 arguments: `error` and `data`. In this case, the `data` is the random color that will be eventually loaded.

Your task is to fetch 3 colors using this function and once you have all of them loaded, print them.

```
loadRandomColor() ---\
                      \
loadRandomColor() --------> print 3 colors
                      /
loadRandomColor() ---/
```

Notice that the 3 separate asynchronous calls can (and should) be performed concurrently, so that we get to see the 3 colors as soon as possible.

**Remember about the error handling.** Set `SETTINGS.RANDOM_COLOR_FAIL_CHANCE` to `0.75`, so that the function `loadRandomColor` has a 75% chance to fail and produce an error.

If any of the colors fails to load, do not show any colors at all, and instead, print the message: `Error: failed to load the colors`.

Run your program a few times to test if it works correctly.

Can you come up with a function that can do the same for any number of colors?

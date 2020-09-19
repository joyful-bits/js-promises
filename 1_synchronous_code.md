# 1. Synchronous code

Implement the following code:

1. Call the function `loadUser` and assign the result to a variable.
2. Using the `id` of the loaded user, call the function `loadUserDetails` and assign the result to a variable.
3. Having both the user data and detailed data, print both results using the `printUserProfile` function.

Notice how the `loadUserDetails` call is dependent on the result of the `loadUser` call.
Similarly, the `printUserProfile` call is dependent on the results of `loadUser` and `loadUserDetails`.

Without the user data, it is not possible to specify the user id.
Without the user data and the user details, it is not possible to show the complete user profile.

We can visualise this dependency graph:

```
loadUser() -> loadUserDetails(user.id) -> printUserProfile(user, userDetails)
```

This graph could go on, depending on the needs of our program:

```
loadUser()
  -> loadUserDetails(user.id)
    -> loadInterests(userDetails.interests)
      -> ...
```

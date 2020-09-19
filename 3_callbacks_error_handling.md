# 3. Callbacks - error handling

You are provided similar functions as in the previous assignment. However, this time they resemble a real-world scenario, where the servers may actually fail to respond with the data.

That is why your callbacks should now accept two arguments: the `error` and the `data`.

For example:

```js
loadUserDetails(2, function (error, user) {
  if (error) {
    console.log("Error: " + error.message);
  } else {
    console.log(user.fullName);
    console.log(user.age);
    console.log(user.interests);
  }
});
```

Your task is to print the same results as in the previous assignment.

**However, this time you should also handle all the possible errors** and ensure you always print them out when they occur. The format of an `error` that may occur is:

```js
{
  message: "An error occured!";
}
```

To actually simulate the errors, you are provided the `SETTINGS` object which you can edit:

```js
{
  SERVER1_WORKS: true, // the imaginary server that provides user data
  SERVER2_WORKS: true, // the imaginary server that provides user details
}
```

Once you implement your code, try to modify the settings to test the robustness of your solution. For example, this code would print out "Server 1 failed to respond with user data!":

```js
SETTINGS.SERVER1_WORKS = false;

loadUser((error, user) => {
  console.log(error.message);
});
```

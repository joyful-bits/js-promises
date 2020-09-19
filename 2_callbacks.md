# 2. Callbacks

We are trying to achieve the same result as in the previous exercise. However, this time, the functions `loadUser` and `loadUserDetails` will simulate asking external servers for the data. This means they are asynchronous.

`loadUser` loads the user data from the "imaginary server 1". It expects one argument: a callback function. It allows you to handle the user data which will eventually arrive.

For example, try:

```js
loadUser(function (user) {
  console.log(user.id);
});
```

`loadUserDetails` loads the details from the "imaginary server 2". It expects two arguments: a user id and a callback function to handle the data.

For example, try:

```js
loadUserDetails(1, function (userDetails) {
  console.log(userDetails.fullName);
});

// User not found
loadUserDetails(2, function (userDetails) {
  console.log(userDetails.fullName);
});
```

Load the user data and then, knowing the user id, load the details for that user. Print the collected data using the already known `printUserProfile`.

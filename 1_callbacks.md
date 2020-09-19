# 1. Callbacks

You are provided with 2 functions: `loadUser` and `loadUserDetails`.

`loadUser` loads the data of the user from the "imaginary server". It expects one argument: a callback function. It allows you to handle the user data which will eventually arrive.

For example, try:

```js
loadUser(function (user) {
  console.log(user.id);
  console.log(user.name);
});
```

`loadUserDetails` loads the detailed data of the specified user. It expects two arguments: a user id and a callback function to handle the data.

For example, try:

```js
loadUserDetails(1, function (user) {
  console.log(user.fullName);
  console.log(user.age);
  console.log(user.likesFruits);
  console.log(user.likesVegetables);
});

// User not found
loadUserDetails(2, function (user) {
  console.log(user.fullName);
  console.log(user.age);
  console.log(user.likesFruits);
  console.log(user.likesVegetables);
});
```

Load the user data and then, knowing the user id, load the details for that user. Print the collected data of the user, for example:

```
User id: 1
Full name: John 3rd Smith
Age: 20
```

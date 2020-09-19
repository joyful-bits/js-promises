const loadUser = () => {
  return {
    id: 1,
    name: "John Smith",
  };
};

const loadUserDetails = (id) => {
  if (id !== 1) {
    throw new Error("Invalid user id");
  }

  return {
    fullName: "John 3rd Smith",
    age: 20,
    interests: ["football", "volleyball"],
  };
};

const printUserProfile = (user, userDetails) => {
  console.log("User id: " + user.id);
  console.log("User name: " + user.name);

  console.log("---");

  console.log("Full name: " + userDetails.fullName);
  console.log("Age: " + userDetails.age);
  console.log("Interests: " + userDetails.interests);
};

// Your code...

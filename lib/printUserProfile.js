export const printUserProfile = (user, userDetails) => {
  console.log("User id:" + user.id);
  console.log("User name:" + user.name);
  console.log("---");
  console.log("Full name" + userDetails.fullName);
  console.log("Age" + userDetails.age);
  console.log("Interests" + userDetails.interests);
};

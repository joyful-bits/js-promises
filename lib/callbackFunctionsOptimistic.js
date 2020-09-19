const loadUser = (cb) => {
  setTimeout(() => {
    cb({
      id: 1,
      name: "John Smith",
    });

    console.log("[INFO] User data arrived!");
  }, 500);
};

const loadUserDetails = (id, cb) => {
  setTimeout(() => {
    if (id === 1) {
      cb({
        fullName: "John 3rd Smith",
        age: 20,
        interests: [],
      });
    } else {
      cb({
        fullName: "Unknown User",
        age: undefined,
        interests: undefined,
      });
    }

    console.log("[INFO] User details arrived!");
  }, 250);
};

module.exports = {
  loadUser,
  loadUserDetails,
};

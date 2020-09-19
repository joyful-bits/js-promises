export const SETTINGS = {
  SERVER1_WORKS: true,
  SERVER2_WORKS: true,
};

export const loadUser = (cb) => {
  setTimeout(() => {
    if (!SETTINGS.SERVER1_WORKS) {
      cb({ message: "Server 1 failed to respond with user data!" });
    }

    cb(null, {
      id: 1,
      name: "John Smith",
    });
  }, 500);
};

export const load = (cb) => {
  setTimeout(() => {
    if (!SETTINGS.SERVER1_WORKS) {
      cb({ message: "Server 1 failed to respond with user data!" });
    }

    cb(null, {
      id: 1,
      name: "John Smith",
    });
  }, 500);
};

export const loadUserDetails = (id, cb) => {
  setTimeout(() => {
    if (!SETTINGS.SERVER2_WORKS) {
      cb({ message: "Server 2 failed to respond with user details!" });
    }

    if (id !== 1) {
      cb({ message: `User with id ${id} not found!` });
    }

    cb(null, {
      fullName: "John 3rd Smith",
      age: 20,
      interests: ["football", "volleyball"],
    });
  }, 250);
};

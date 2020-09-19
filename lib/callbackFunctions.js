const SETTINGS = {
  SERVER1_WORKS: true,
  SERVER2_WORKS: true,
  RANDOM_COLOR_FAIL_CHANCE: 0,
};

const loadUser = (cb) => {
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

const loadUserDetails = (id, cb) => {
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

const COLORS = [
  "red",
  "blue",
  "green",
  "brown",
  "golden",
  "pink",
  "orange",
  "black",
  "white",
];

const loadRandomColor = () => {
  setTimeout(() => {
    if (Math.random() < SETTINGS.RANDOM_COLOR_FAIL_CHANCE) {
      cb({ message: "Fail!" });
    }

    const index = Math.floor(Math.random() * (COLORS.length - 1));

    cb(null, COLORS[index]);
  }, 500 + Math.random() * 300);
};

module.exports = {
  SETTINGS,
  loadUser,
  loadUserDetails,
  loadRandomColor,
};

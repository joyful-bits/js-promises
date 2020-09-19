const SETTINGS = {
  SERVER1_WORKS: true,
  SERVER2_WORKS: true,
  RANDOM_COLOR_FAIL_CHANCE: 0,
};

const loadUser = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!SETTINGS.SERVER1_WORKS) {
        reject({ message: "Server 1 failed to respond with user data!" });
      }

      resolve({
        id: 1,
        name: "John Smith",
      });
    }, 500);
  });

const loadUserDetails = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!SETTINGS.SERVER2_WORKS) {
        reject({ message: "Server 2 failed to respond with user details!" });
      }

      if (id !== 1) {
        reject({ message: `User with id ${id} not found!` });
      }

      resolve({
        fullName: "John 3rd Smith",
        age: 20,
        interests: ["football", "volleyball"],
      });
    }, 250);
  });

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

const loadRandomColor = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < SETTINGS.RANDOM_COLOR_FAIL_CHANCE) {
        reject({ message: "Fail!" });
      }

      const index = Math.floor(Math.random() * (COLORS.length - 1));

      resolve(COLORS[index]);
    }, 500 + Math.random() * 300);
  });

module.exports = {
  SETTINGS,
  loadUser,
  loadUserDetails,
  loadRandomColor,
};

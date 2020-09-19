export const SETTINGS = {
  SERVER1_WORKS: true,
  SERVER2_WORKS: true,
};

export const loadUser = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!SETTINGS.SERVER1_WORKS) {
        reject({ message: "Server 1 failed to respond with user data!" });
      }

      resolve(null, {
        id: 1,
        name: "John Smith",
      });
    }, 500);
  });

export const loadUserDetails = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!SETTINGS.SERVER2_WORKS) {
        reject({ message: "Server 2 failed to respond with user details!" });
      }

      if (id !== 1) {
        reject({ message: `User with id ${id} not found!` });
      }

      resolve(null, {
        fullName: "John 3rd Smith",
        age: 20,
        interests: ["football", "volleyball"],
      });
    }, 250);
  });
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

export const loadRandomColor = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject({ message: "Fail!" });
      }

      const index = Math.floor(Math.random() * (COLORS.length - 1));

      resolve(null, COLORS[index]);
    }, 500 + Math.random() * 300);
  })
};

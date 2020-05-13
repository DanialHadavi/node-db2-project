// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/car-dealer.db3",
    },
    useNullAsDefault: true,
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./data/veggies.db3",
    },
    useNullAsDefault: true,
  },
};

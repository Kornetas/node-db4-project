const sharedConfig = {
  client: "sqlite3",
  migration: { directory: "./data/migrations" },
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, done) => conn.run("PRAGMA foreign_key = ON", done),
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: "./data/cook_book.db3" },
    seeds: { directory: "./data/seeds" },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: "./data/cook_book.test.db3" },
  },
  production: {},
};

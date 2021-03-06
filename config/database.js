module.exports = ({env}) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: env('DATABASE_CLIENT', 'sqlite'),
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        host: env('DATABASE_HOST', ''),
        port: env.int('DATABASE_PORT', 0),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', ''),
        ssl: env('DATABASE_SSL', false),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});

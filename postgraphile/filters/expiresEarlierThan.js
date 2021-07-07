const { makeAddPgTableConditionPlugin } = require('graphile-utils');

module.exports = makeAddPgTableConditionPlugin(
    "vaccin_impl",
    "orders",
    "expiresEarlierThan",
    build => ({
        description: "Orders that expire earlier than the given value. The value format is YYYY-MM-DD HH:MI:SSTZ. Example: 2021-03-01 13:30:00+02:00.",
        type: build.graphql.GraphQLString
    }),
    (value, helpers, build) => {
        const { sql } = helpers;
        return sql.fragment`expires < ${sql.value(value)}::timestamp with time zone`
    }
);

import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";

export default {
    Query: {
        // TODO: Database connection pool is needed.
        // me: (_, __, { curr_user }) => curr_user,
        // unit: async(_, { unitId }, { db }) => await db.Unit.findOne({ where: { unitId } }),

        hello: () => 'world',
        hellos: () => ['hola', 'hello', 'aloha']
    },

    Mutation: {
        // Update the user settings
        // TODO: Database connection undone, returning empty objects
        updateSettings: async (_, { filters }, { curr_user, db }) => ({})
    },

    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'UTC number of milliseconds since midnight Jan 1 1970 as in JS date',
        parseValue(value) { return new Date(value).valueOf() },
        serialize(value) {
            if (value instanceof Date) return value.valueOf()
                return value;
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) return parseInt(ast.value, 10)
                return null;
        }
    })
}

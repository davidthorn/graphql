import { GraphQLObjectType, GraphQLString } from 'graphql';

interface RocketType {
    rocket_id: string
    rocket_name: string
    rocket_type: string
    description: string
    link: string
}

export const Rocket = new GraphQLObjectType<RocketType>({
    name: 'Rocket',
    fields: {
        id: {
            type: GraphQLString,
            resolve(obj) {
                return obj.rocket_id;
            }
        },
        name: {
            type: GraphQLString,
            resolve(obj) {
                return obj.rocket_name;
            }
        },
        type: {
            type: GraphQLString,
            resolve(obj) {
                return obj.rocket_type;
            }
        },
        description: {
            type: GraphQLString,
            resolve(obj) {
                return obj.description;
            }
        },
        link: {
            type: GraphQLString,
            resolve(obj) {
                return `https://api.spacexdata.com/v3/rockets/${obj.rocket_id}`;
            }
        }
    }
});

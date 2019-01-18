import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat } from 'graphql';

interface LaunchLocationType {
    name: string
    region: string
    latitude: number
    longitude: number
}

export const LaunchLocation = new GraphQLObjectType<LaunchLocationType>({
    name: 'LaunchLocation',
    fields: {
        name:  {
            type: GraphQLString,
            resolve(obj) {
                return obj.name 
            }
        },
        region:  {
            type: GraphQLString,
            resolve(obj) {
                return obj.region 
            }
        },
        latitude:  {
            type: GraphQLFloat,
            resolve(obj) {
                return obj.latitude 
            }
        },
        longitude:  {
            type: GraphQLFloat,
            resolve(obj) {
                return obj.longitude 
            }
        }

    }
});

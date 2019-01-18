import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import { LaunchLocation } from './Location'

interface LaunchPadType {
    id: string
    status: string
    details: string
    site_id: string
    site_name_long: string
    successful_launches: number
    attempted_launches: number
}

export const LaunchPad = new GraphQLObjectType<LaunchPadType>({
    name: 'LaunchPad',
    fields: {
        id:  {
            type: GraphQLString,
            resolve(obj) {
                return obj.site_id 
            }
        },
        location: {
            type: LaunchLocation
        },
        status:  {
            type: GraphQLString,
            resolve(obj) {
                return obj.status 
            }
        },
        details:  {
            type: GraphQLString,
            resolve(obj) {
                return obj.details 
            }
        },
        name:  {
            type: GraphQLString,
            resolve(obj) {
                return obj.site_name_long 
            }
        },
        attempts:  {
            type: GraphQLInt,
            resolve(obj) {
                return obj.attempted_launches 
            }
        },
        successes:  {
            type: GraphQLInt,
            resolve(obj) {
                return obj.successful_launches 
            }
        }

    }
});

import axios from 'axios';
import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema } from 'graphql';
import { Launch } from './Schemas';

const SpaceX: GraphQLSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'SpaceX',
        fields: {
            launches: {
                type: GraphQLList(Launch),
                resolve(obj, args) {
                    console.log(args)
                    return axios.get(`https://api.spacexdata.com/v3/launches?limit=${args.id}`).then (res => res.data)
                },
                args: {
                    id: {
                        type: GraphQLInt
                    }
                }
                
            }
            
        }
    
    
    })
});



export { SpaceX };

import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql'
import { Rocket } from './Rocket';
import axios from 'axios'
import { LaunchPad } from './LaunchPad'

const rockets: { [id:string]: any } = {}
const sites: { [id:string]: any } = {}

const Launch = new GraphQLObjectType({
    name: 'Launch',
    fields: {
        number: {
            type: GraphQLInt,
            resolve(obj) {
                return obj.flight_number
            }

        },
        name: {
            type: GraphQLString,
            resolve(obj) {
                return obj.mission_name
            }
        },
        id: {
            type: GraphQLString,
            resolve(obj) {
                return obj.mission_id[0]
            }
        },
        year: {
            type: GraphQLString,
            resolve(obj) {
                return obj.launch_year
            }
        },
        rocket_id: {
            type: GraphQLString,
            resolve(obj) {
                return obj.rocket.rocket_id
            }
        },
        rocket: {
            type: Rocket,
            async resolve(obj, args) {

                if ( !args.download ) {
                    return {
                        rocket_id: obj.rocket.rocket_id,
                        rocket_name: obj.rocket.rocket_name,
                        rocket_type: obj.rocket.rocket_type,
                        description: null,
                        link: `https://api.spacexdata.com/v3/rockets/${obj.rocket.rocket_id}`
                    }
                } 

                const rocket_id = obj.rocket.rocket_id
                if(rockets[rocket_id] !== undefined) {
                    return rockets[rocket_id]
                }

                const rocket = await axios.get(`https://api.spacexdata.com/v3/rockets/${rocket_id}`).then(res => res.data)
                rockets[rocket_id] = rocket
                return rocket
            },
            args: {
                download:  {
                    type: GraphQLBoolean
                }
            }
        },
        site: {
            type: LaunchPad,
            async resolve(obj) {
                const site_id = obj.launch_site.site_id
                if(sites[site_id] !== undefined) {
                    return sites[site_id]
                }

                const site = await axios.get(`https://api.spacexdata.com/v3/launchpads/${site_id}`).then(res => res.data)
                sites[site_id] = site
                return site
            }
        }
    }
})

export { Launch }
import express, {} from 'express'
import graphqlHTTP from 'express-graphql'
import { SpaceX } from './SpaceX'

const app = express()

const dql = graphqlHTTP({
        schema: SpaceX,
        context: {},
        graphiql: true,
        pretty: true
})

app.use('/', dql )

app.listen(5050 , () => {
    console.log('listening')
})




import express, {} from 'express'
import graphqlHTTP from 'express-graphql'
import { SpaceX } from './MyGraphQlSchema'

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




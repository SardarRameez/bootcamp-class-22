let {ApolloServer}=require('apollo-server')

let typeDefs=require('./Schema/schema')

let resolvers=require('./Resolver/index')

let server=new ApolloServer({typeDefs , resolvers})

server.listen().then(({url})=>{
    console.log(`server is running on port ${url}`)
})
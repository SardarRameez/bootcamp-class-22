let crypto=require('crypto')
let localData={}
const resolver= {
    Query: {
        getMessage: ()=>{
            return "Message Query"
        },
        getName: ()=>{
            return "Rameez khan"
        },
        getAllMessage: ()=>{
            return [{message:"getAllMessage Query run",id:"1"}, {message:"Msg", id:"2"}]
        }
    },
    Mutation: {
        createMessage: (_, {input})=>{
            let id=crypto.randomBytes(10).toString("hex")
            console.log("id", id)
            localData[id]={id,...input.message}
            return {id, ...input}
        }
    }
}

module.exports=resolver;
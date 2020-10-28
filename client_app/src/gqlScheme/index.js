import {gql} from '@apollo/client'

const createMessageMutation=gql`
mutation createMessage($data: messageInput){
    createMessage(input: $data){
        message
        id
    }
}
`

const getAllMessage=gql`
query getAllMessage{
    getAllMessage{
        message
        id
    }
}
`

const getName=gql`
query getName{
    getName 
}
`

export {createMessageMutation , getAllMessage , getName}
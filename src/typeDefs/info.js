import { gql } from 'apollo-server-express'

export default gql`

    type Info {
        count: Int
        pages: Int
        next: Int
        prev: Int
        }

`

const { ApolloServer, gql } = require("apollo-server");
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(function (err) {
    console.log("MONGOdb connected");
    db = client.db("garden5");
});


const typeDefs = gql`
type Query {
  my_query(type: String):[counters]
  hello: String
}
type counters{
_id:String,
bot_id:String,
type:String,
user:String,
ts:String,
team:String,
bot_profile:profile,
attachments:String,
ts_for_db: String,
}
type profile{
    id:String,
    deleted:Boolean,
    name:String,
    updated:Int,
    app_id: String,
    icons:icon,
    team_id:String
}
type icon{
    image_36: String,
    image_48:String,
    image_72:String,
}`



const resolvers = {
    Query: {
        hello: () => {
            return `hey sup ? `;
        },
        my_query: async () => {
            values = await db.collection('slack_messages').find().toArray().then(res => { return res });
            return values
        }
    }
};



const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen(3000).then(({ url }) => console.log(`Server running at ${url} `));
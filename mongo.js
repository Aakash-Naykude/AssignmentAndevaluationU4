//mongo intro
var pipeline = [
    {$sort:{"age":1}}
]
db.leads.aggregate(pipeline)
var pipeline = [
    {$sort:{"age":-1}},
    {$limit:3}
]
db.leads.aggregate(pipeline)

//.find().sort({})

//
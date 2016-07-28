export const QUESTION_WEIGHTS:number[] = [10, 5, 1, 0, -1, -5, -10];

export const DEFAULT_FRAMEWORKS = [
    {name: 'Express', active: true},
    {name: 'Hapi', active: true},
    {name: 'Koa', active: true},
    {name: 'Sails', active: true},
    {name: 'Meteor', active: true},
    {name: 'Mean', active: true},
    {name: 'Restify', active: true},
    {name: 'Loopback', active: true},
];

export const DEFAULT_QUESTIONS = [
    {question: 'GitHub stars', weight: 10, type: 'number'},
    {question: 'Google trends', weight: 1, type: 'number'},
    {question: 'Redit group size', weight: 1, type: 'number'},
    {question: 'Lightweight', weight: 1, type: 'boolean'},
    {question: 'Full-stack', weight: -5, type: 'boolean'},
    {question: 'REST API oriented', weight: 10, type: 'boolean'},
    {question: 'Builtin ORM', weight: 5, type: 'boolean'},
    {question: 'PostgreSQL support', weight: 5, type: 'boolean'},
    {question: 'MongoDB support', weight: 1, type: 'boolean'},
    {question: 'WebSockets support', weight: 1, type: 'boolean'},
    // { question: 'Is open source', weight: 10, type: 'boolean' },
];

export const DEFAULT_DATA = [{
    "active": true,
    "answers": {
        "GitHub stars": 26503,
        "Google trends": 84,
        "Sinatra-like": true,
        "Is open source": true,
        "Rails-like": false,
        "Full-stack": false,
        "Is using GeneratorFunctions and yield": false,
        "Builtin support for MongoDB": true,
        "Builtin ORM": false,
        "REST API oriented": false,
        "Lightweight": true,
        "Redit group size": 81,
        "Builtin support for MySql": true,
        "Builtin support for PostgreSQL": true,
        "PostgreSQL support": true,
        "MongoDB support": true
    },
    "score": 18.64,
    "partialScores": [],
    "name": "Express"
}, {
    "active": true,
    "answers": {
        "GitHub stars": "6369",
        "Sinatra-like": true,
        "Is open source": true,
        "Google trends": 4,
        "Full-stack": false,
        "Rails-like": false,
        "REST API oriented": false,
        "Builtin ORM": false,
        "Is using GeneratorFunctions and yield": false,
        "Lightweight": true,
        "Redit group size": 8,
        "Builtin support for PostgreSQL": true,
        "Builtin support for MySql": true,
        "Builtin support for MongoDB": true,
        "PostgreSQL support": true,
        "MongoDB support": true
    },
    "score": 8.07,
    "partialScores": [],
    "name": "Hapi"
}, {
    "active": true,
    "answers": {
        "GitHub stars": "11062",
        "Sinatra-like": true,
        "Is using GeneratorFunctions and yield": true,
        "Is open source": true,
        "Full-stack": false,
        "Rails-like": false,
        "REST API oriented": false,
        "Lightweight": true,
        "Google trends": 4,
        "Redit group size": 250,
        "Builtin ORM": false,
        "Builtin support for MySql": false,
        "Builtin support for PostgreSQL": false,
        "Builtin support for MongoDB": false,
        "Builtin WebSockets support": false,
        "PostgreSQL support": true,
        "MongoDB support": true
    },
    "score": 9.48,
    "partialScores": [],
    "name": "Koa"
}, {
    "active": true,
    "answers": {
        "GitHub stars": "15036",
        "Rails-like": true,
        "Is open source": true,
        "Full-stack": false,
        "Sinatra-like": false,
        "REST API oriented": false,
        "Lightweight": false,
        "Builtin WebSockets support": true,
        "Google trends": 14,
        "Redit group size": null,
        "Builtin ORM": true,
        "Builtin support for MySql": true,
        "Builtin support for PostgreSQL": true,
        "Builtin support for MongoDB": true,
        "PostgreSQL support": true,
        "MongoDB support": true
    },
    "score": 15.15,
    "partialScores": [],
    "name": "Sails"
}, {
    "active": true,
    "answers": {
        "GitHub stars": "34774",
        "Full-stack": true,
        "Is open source": true,
        "Sinatra-like": false,
        "Google trends": 71,
        "REST API oriented": false,
        "Rails-like": false,
        "Lightweight": false,
        "Redit group size": 4101,
        "Builtin ORM": false,
        "Builtin support for MySql": false,
        "Builtin support for PostgreSQL": false,
        "Builtin support for MongoDB": true,
        "PostgreSQL support": true,
        "MongoDB support": true
    },
    "score": 15.23,
    "partialScores": [],
    "name": "Meteor"
}, {
    "active": true,
    "answers": {
        "GitHub stars": "9247",
        "Full-stack": true,
        "Is open source": true,
        "Google trends": 10,
        "Is using GeneratorFunctions and yield": null,
        "Builtin support for MongoDB": true,
        "Builtin support for PostgreSQL": false,
        "Builtin support for MySql": null,
        "Builtin ORM": false,
        "Opinionated": true,
        "REST API oriented": false,
        "Rails-like": false,
        "Sinatra-like": false,
        "Redit group size": 1347,
        "Builtin WebSockets support": false,
        "PostgreSQL support": false,
        "MongoDB support": true,
        "Lightweight": false
    },
    "score": -1.4099999999999997,
    "partialScores": [],
    "name": "Mean"
}, {
    "active": true,
    "answers": {
        "GitHub stars": "7079",
        "REST API oriented": true,
        "Builtin ORM": true,
        "Builtin support for MySql": true,
        "Builtin support for PostgreSQL": true,
        "Builtin support for MongoDB": true,
        "Full-stack": false,
        "Sinatra-like": false,
        "Rails-like": false,
        "Is open source": true,
        "Is using GeneratorFunctions and yield": false,
        "Google trends": 5,
        "PostgreSQL support": true,
        "MongoDB support": true,
        "Lightweight": false
    },
    "score": 22.34,
    "partialScores": [],
    "name": "Loopback"
}, {
    "active": true,
    "answers": {
        "GitHub stars": 5416,
        "Google trends": 3,
        "Full-stack": false,
        "REST API oriented": true,
        "Builtin ORM": false,
        "PostgreSQL support": true,
        "MongoDB support": true,
        "Lightweight": true
    },
    "score": 17.740000000000002,
    "partialScores": [],
    "name": "Restify"
}];
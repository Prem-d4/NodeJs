db.createCollection('posts2', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['title', 'text', 'creator', 'comments'],
            properties: {
                title: {
                    bsonType: 'string',
                    description: 'must be a string and is required'
                },
                text: {
                    bsonType: 'string',
                    description: 'must be a string and is required'
                },
                creator: {
                    bsonType: 'objectId',
                    description: 'must be an objectId and is required'
                },
                comments: {
                    bsonType: 'array',
                    description: 'must be an array and is required',
                    items: {
                        bsonType: 'object',
                        required: ['text', 'author'],
                        properties: {
                            text: {
                                bsonType: 'string',
                                description: 'must be a string and is required'
                            },
                            author: {
                                bsonType: 'objectId',
                                description: 'must be an objectId and is required'
                            }
                        }
                    }
                }
            }
        }
    }
});

db.createCollection('users2', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['name', 'email', 'age'],
            properties: {
                name: {
                    bsonType: 'string',
                    description: 'must be a string and is required',
                    minLength: 2,
                    maxLength: 20,
                },
                email: {
                    bsonType: 'string',
                    description: 'must be a valid email and is required',
                    pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
                },
                age: {
                    bsonType: 'int',
                    description: 'must be an integer and is required',
                    minimum: 10,
                    maximum: 90
                },
                status: {
                    enum: ['active', 'inactive'],
                    description: 'can only be one of the enum values and is required'
                }
            }
        }
    }
})

db.createCollection('allDataTypes', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['text', 'number', 'decimal', 'boolean', 'objectid', 'array', 'object', 'null', 'regex', 'bindata', 'enum'],
            properties: {
                text: {
                    bsonType: 'string',
                    description: 'must be a string and is required'
                },
                number: {
                    bsonType: 'int',
                    description: 'must be an integer and is required'
                },
                decimal: {
                    bsonType: 'decimal',
                    description: 'must be a decimal and is required'
                },
                boolean: {
                    bsonType: 'bool',
                    description: 'must be a boolean and is required'
                },
                objectid: {
                    bsonType: 'objectId',
                    description: 'must be an objectId and is required'
                },
                array: {
                    bsonType: 'array',
                    description: 'must be an array and is required'
                },
                object: {
                    bsonType: 'object',
                    description: 'must be an object and is required'
                },
                null: {
                    bsonType: 'null',
                    description: 'must be a null and is required'
                },
                regex: {
                    bsonType: 'regex',
                    description: 'must be a regex and is required'
                },
                bindata: {
                    bsonType: 'binData',
                    description: 'must be a binData and is required'
                },
                enum: {
                    enum: ['active', 'inactive'],
                    description: 'can only be one of the enum values and is required'
                }
            }
        }
    }
})

db.createCollection('validationOperators', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['name', 'email', 'age', 'number', 'status', 'skills', 'languages', 'city'],
            properties: {
                name: {
                    bsonType: 'string',
                    description: 'must be a string and is required',
                    minLength: 2,
                    maxLength: 20
                },
                email: {
                    bsonType: 'string',
                    description: 'must be a string and is required',
                    pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
                },
                age: {
                    bsonType: 'int',
                    description: 'must be an integer and is required',
                    minimum: 10,
                    maximum: 90
                },
                number: {
                    bsonType: 'int',
                    description: 'must be an integer and is required',
                    minimum: 10,
                    exclusiveMinimum: true,
                    maximum: 90,
                    exclusiveMaximum: true
                },
                status: {
                    enum: ['active', 'inactive'],
                    description: 'can only be one of the enum values and is required'
                },
                skills: {
                    bsonType: 'array',
                    description: 'must be an array and is required',
                    items: {
                        bsonType: 'object',
                        required: ['name', 'rating'],
                        properties: {
                            name: {
                                bsonType: 'string',
                                description: 'must be a string and is required'
                            },
                            rating: {
                                bsonType: 'int',
                                description: 'must be an integer and is required',
                            }
                        }
                    }
                },
                languages: {
                    minItems: 2,
                    maxItems: 5,
                    items: {
                        bsonType: 'string',
                        description: 'must be a string and is required'
                    }
                },
                city: {
                    bsonType: 'string',
                    description: 'must be a string and is required',
                    uniqueItems: true
                }
            }
        }
    }
})

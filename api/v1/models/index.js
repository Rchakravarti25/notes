'use strict';
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../../config/config.json')[env];


if (config.use_env_variable) {
	mongoose.connect(process.env[config.use_env_variable], config.options);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'MongoDB connection error:'));
	db.once('open', function () {
		console.log('Mongoose Connected to mongodb...!')
	});
} else {
	mongoose.connect(config.uri, config.options);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'MongoDB connection error:'));
	db.once('open', function () {
		console.log('Mongoose Connected to mongodb...!')
	});
}

fs
	.readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
	})
	.forEach(file => {
		require(path.join(__dirname, file))(mongoose);
	});

// Object.keys(mongoose).forEach(modelName => {
// 	if (db[modelName].associate) {
// 		db[modelName].associate(db);
// 	}
// });

module.exports = mongoose;
/*Mongoose {
  connections:
   [ NativeConnection {
       base: [Circular],
       collections: [Object],
       models: [Object],
       config: [Object],
       replica: false,
       options: null,
       otherDbs: [],
       relatedDbs: {},
       states: [Object],
       _readyState: 2,
       _closeCalled: false,
       _hasOpened: false,
       plugins: [],
       _listening: false,
       _connectionOptions: [Object],
       name: 'isosu',
       host: '192.168.0.13',
       port: 27017,
       user: undefined,
       pass: undefined,
       client: [MongoClient],
       '$initialConnection': [Promise],
       then: [Function],
       catch: [Function],
       _events: [Object],
       _eventsCount: 2 } ],
  models:
   { Location: Model { Location },
     Organization: Model { Organization },
     Post: Model { Post },
     User: Model { User } },
  modelSchemas:
   { Location:
      Schema {
        obj: [Object],
        paths: [Object],
        aliases: {},
        subpaths: {},
        virtuals: [Object],
        singleNestedPaths: {},
        nested: {},
        inherits: {},
        callQueue: [],
        _indexes: [],
        methods: [Object],
        methodOptions: {},
        statics: {},
        tree: [Object],
        query: {},
        childSchemas: [],
        plugins: [Array],
        '$id': 1,
        s: [Object],
        _userProvidedOptions: [Object],
        options: [Object],
        '$timestamps': [Object],
        '$globalPluginsApplied': true },
     Organization:
      Schema {
        obj: [Object],
        paths: [Object],
        aliases: {},
        subpaths: {},
        virtuals: [Object],
        singleNestedPaths: {},
        nested: {},
        inherits: {},
        callQueue: [],
        _indexes: [],
        methods: [Object],
        methodOptions: {},
        statics: {},
        tree: [Object],
        query: {},
        childSchemas: [],
        plugins: [Array],
        '$id': 2,
        s: [Object],
        _userProvidedOptions: [Object],
        options: [Object],
        '$timestamps': [Object],
        '$globalPluginsApplied': true },
     Post:
      Schema {
        obj: [Object],
        paths: [Object],
        aliases: {},
        subpaths: {},
        virtuals: [Object],
        singleNestedPaths: {},
        nested: {},
        inherits: {},
        callQueue: [],
        _indexes: [],
        methods: [Object],
        methodOptions: {},
        statics: {},
        tree: [Object],
        query: {},
        childSchemas: [],
        plugins: [Array],
        '$id': 3,
        s: [Object],
        _userProvidedOptions: [Object],
        options: [Object],
        '$timestamps': [Object],
        '$globalPluginsApplied': true },
     User:
      Schema {
        obj: [Object],
        paths: [Object],
        aliases: {},
        subpaths: [Object],
        virtuals: [Object],
        singleNestedPaths: [Object],
        nested: {},
        inherits: {},
        callQueue: [],
        _indexes: [],
        methods: [Object],
        methodOptions: {},
        statics: {},
        tree: [Object],
        query: {},
        childSchemas: [Array],
        plugins: [Array],
        '$id': 6,
        s: [Object],
        _userProvidedOptions: [Object],
        options: [Object],
        '$timestamps': [Object],
        '$globalPluginsApplied': true } },
  options: { pluralization: true, [Symbol(mongoose:default)]: true },
  _pluralize: [Function: pluralize],
  Schema:
   { [Function: Schema]
     reserved:
      [Object: null prototype] {
        populated: 1,
        remove: 1,
        validate: 1,
        toObject: 1,
        schema: 1,
        save: 1,
        modelName: 1,
        get: 1,
        isNew: 1,
        isModified: 1,
        init: 1,
        errors: 1,
        db: 1,
        collection: 1,
        removeListener: 1,
        listeners: 1,
        once: 1,
        on: 1,
        emit: 1,
        prototype: 1 },
     Types:
      { String: [Function],
        Number: [Function],
        Boolean: [Function],
        DocumentArray: [Function],
        Embedded: [Function: SingleNestedPath],
        Array: [Function],
        Buffer: [Function],
        Date: [Function],
        ObjectId: [Function],
        Mixed: [Function],
        Decimal: [Function],
        Decimal128: [Function],
        Map: [Function: Map],
        Oid: [Function],
        Object: [Function],
        Bool: [Function],
        ObjectID: [Function] },
     ObjectId:
      { [Function: ObjectId]
        schemaName: 'ObjectId',
        get: [Function],
        _checkRequired: [Function],
        _cast: [Function: castObjectId],
        cast: [Function: cast],
        checkRequired: [Function] } },
  model: [Function],
  plugins:
   [ [ [Function], [Object] ],
     [ [Function], [Object] ],
     [ [Function], [Object] ],
     [ [Function], [Object] ] ] }
 */
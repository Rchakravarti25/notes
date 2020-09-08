// create a schema
'use strict';
module.exports = (mongoose) => {
	var Note = mongoose.model('Note', new mongoose.Schema({
		_id:{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			auto: true
		},
		note_name: {
			type: String,
			required: false,
			default: ""
		},
		note_text:{
            type:String,
            required:true
        },
        note_date:{
            type:Date,
            required:true
        },
		createdAt: {
            type: Date,
            required: true,
			default: Date.now
		},
		updatedAt: {
            type: Date,
            required: true,
			default: Date.now
		}
	}, {
		timestamps: {
			createdAt: 'createdAt',
			updatedAt: 'updatedAt',
			versionKey: '__v'
		}
	}), 'Notes');
	return Note;
}
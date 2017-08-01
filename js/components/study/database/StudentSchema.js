
export const StudentSchema = {

    name: 'Student',

    primaryKey:'id',

    properties: {
        id: 'string',
        name: 'string',
        sex: 'string',
        age: {type: 'int', default: 0},
        grade: {type: 'string', default: 'no input'},
    }

}
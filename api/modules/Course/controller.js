
const Model = require( './model' )

const ACTIONS_PATH = './../../../'
const create = require( ACTIONS_PATH + 'actions/create')(Model)
const findOne = require( ACTIONS_PATH + 'actions/findone')(Model)
const remove = require( ACTIONS_PATH + 'actions/remove')(Model)
const find = require( ACTIONS_PATH + 'actions/find')(Model)
const update = require( ACTIONS_PATH + 'actions/update')(Model)




module.exports = { find,create,findOne,update,remove }
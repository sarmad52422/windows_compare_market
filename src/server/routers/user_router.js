const express = require('express')
const {list,addUser,searchById,findUser,searchFriend,findFriend} = require('../controlers/user_controller')
const router = express.Router()
router.route('/:userId').get(list)
router.route('/:userId/friends/').get()
router.route('/:userId/friends/:friendId').get(findFriend).put().delete().post()
router.route('/add').post(addUser)
router.param('userId',searchById)

router.param('friendId',searchFriend)
module.exports = router
const {response, request} = require('express')

const User = require('../models/user')

const userGet = (req=request, res=response) => {
    const {name='no name', key}= req.query
    res.json({
        msg:'get api',
        name,
        key
    })
}

const userPost = async(req=request, res=response) => {

       
    const body = req.body;
    const user = new User(body);

      // Guardar en BD
      await user.save()

    res.json({
         user
    })
}

const userPut = (req=request, res=response) => {
    const {id} = req.params
    res.json({
        msg:'put api',
        id
    })
}

const userPatch = (req, res=response) => {
    res.json({
        msg:'patch api'
    })
}

const userDelete = (req, res=response) => {
    res.json({
        msg:'delete api'
    })
}

module.exports={userGet, userPost, userPut, userPatch, userDelete}
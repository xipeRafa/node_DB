const {response, request} = require('express')

const userGet = (req=request, res=response) => {
    const {name='no name', key}= req.query
    res.json({
        msg:'get api',
        name,
        key
    })
}

const userPost = (req=request, res=response) => {
    const {name, age, lastName} = req.body

    res.json({
        msg:'Post api',
        name,age,lastName
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
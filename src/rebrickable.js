
const express = require('express')
const path = require('path')
const fetch = require('node-fetch');
const { REBRICKABLE_API_KEY } = require('./config')


const rebrickable = express.Router()

// Return set info given a set id
rebrickable
  .route('/:searchTerm')
  .get((req, res) => {
    const searchTerm = req.params.searchTerm;
    function handleSetSearch(searchTerm) {
      fetch(`https://rebrickable.com/api/v3/lego/sets/${searchTerm}-1`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `key ${REBRICKABLE_API_KEY}`
            }
          })
          // If call is successful
          .then(response => response.json())
          .then( response => { res.send(response) })
          // If call fails
          .catch(err => console.log(err))
    }

    handleSetSearch(searchTerm);
    })

// Return alternate builds given a set id
rebrickable
  .route('/alternates/:searchTerm')
  .get((req, res) => {
    const searchTerm = req.params.searchTerm;
    function handleSetSearch(searchTerm) {
      fetch(`https://rebrickable.com/api/v3/lego/sets/${searchTerm}/alternates`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `key ${REBRICKABLE_API_KEY}`
            }
          })
          // If call is successful
          .then(response => response.json())
          .then( response => {
            response.count ? res.send(response) : res.send('Invalid set number, try again')
          })
          // If call fails
          .catch(err => console.log(err))
    }

    handleSetSearch(searchTerm);
    })

module.exports = rebrickable
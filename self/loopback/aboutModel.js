/**
 * ---------------------------------
 * loopback.createModel 创建model
 * loopback.findModel 通过 modelName 查找 model
 *
 * ---------------------------------
 *
 */

var loopback = require('loopback');
var debug = require('debug')('loop:*');

/**
 * create
 */
var authorModel = loopback.createModel(
  'Author',
  {
    firstName: 'string',
    lastName: 'string'
  },
  {
    relations: {
      books: {
        model: 'Book',
        type: 'hasAndBelongsToMany'
      }
    }
  }
);

debug('AuthorModel');
// debug(authorModel);

/**
 * find
 */
var findAuthorModel = loopback.findModel('Author');
debug('找到Author : %s', (findAuthorModel === authorModel));

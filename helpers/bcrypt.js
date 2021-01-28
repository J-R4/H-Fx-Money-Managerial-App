const bcrypt = require('bcryptjs');

/**
 *
 * @param {string} password
 * @param {number} salt
 */
function hash(password, salt = 10) {
    const s = bcrypt.genSaltSync(salt);
    let pw = bcrypt.hashSync(password, s);
    return pw;
}

function compare(password, hash) {
    return bcrypt.compareSync(password, hash);
}

module.exports = { hash, compare };

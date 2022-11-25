const users = [];

module.exports.register = ({body}, res) => {
    users.push(body);
    res.send({
        msg: 'Register successfully',
        users
    });
}
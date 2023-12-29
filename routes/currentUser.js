class User {
    static user_name;

    static getUserName() {
        return this.user_name;
    }
    static setUserName(user_name) {
        this.user_name = user_name;
    }
}

module.exports = User;
class UserRepository {
  constructor(userModel) {
    this.userModel = userModel;
  }

  findUser = async (userId) => {
    try {
      const user = await this.userModel.findOne({
        attributes: ['account_id', 'nickname', 'phone', 'address', 'point'],
        where: { id: userId },
      });

      return user;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };
}

module.exports = UserRepository;

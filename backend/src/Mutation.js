const Mutations = {
  async createUser(info, args, context) {
    return await context.db.mutation.createUser({
      data: {...args} // destructure arguments into the data (name, etc.)
    }, info);
  }
}

module.exports = Mutations;

const Mutations = {
  async createUser(info, args, context) {
    return await context.db.mutation.createUser({
      data: {...args} // destructure arguments into the data (name, etc.)
    }, info);
  },

  async createBook(info, args, context) {
    return await context.db.mutation.createBook(args, info);
  },
}

module.exports = Mutations;

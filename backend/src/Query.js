const Query = {
  async user(parent, args, context, info) {
    const user = await context.db.query.user({
      where: { ...args }
    }, info);
    return user;
  },

  async users(parent, args, context, info) {
    const users = await context.db.query.users();
    return users; 
  }
};

module.exports = Query;
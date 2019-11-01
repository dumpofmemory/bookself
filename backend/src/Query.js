const Query = {
  user(parent, args, context, info) {
    if (!context.request.userId) {
      return null;
    }
    return context.db.query.user({
      where: { id: context.request.userId }
    }, info);
  }
};

module.exports = Query;
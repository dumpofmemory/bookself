const Query = {
  user(context, info) {
    if (!context.request.userId) {
      return null;
    }
    return context.db.query.user({
      where: { id: context.request.userId }
    }, info);
  }
};

module.exports = Query;
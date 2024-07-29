const SSE = {
  async postEvent(userId, content) {
    try {
      await instance.post(`sse/${userId}`, {
        content: content,
      });
    } catch (error) {
      return error.response.status;
    }
  },
};

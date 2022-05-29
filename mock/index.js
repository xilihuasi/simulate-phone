const getDevice = (req, res) => {
  res.send({
    code: 0,
    data: {
      maskContact: false,
      isLock: false
    },
  });
};

export default {
  'GET /api/device': getDevice,
};

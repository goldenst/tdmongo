
// @desc    Get all Calls
// @route   GET /api/v1/calls
// @access  Public
exports.getCalls = (req, res, next) => {
  res.status(200).json({ success: true, message: "Show all Calls", hello: req.hello });
}

// @desc    Get single Calls
// @route   GET /api/v1/calls/:id
// @access  Public
exports.getCall = (req, res, next) => {
  res.status(200).json({ success: true, message: `Show all Calls ${req.params.id}` });
}

// @desc    Create Calls
// @route   POST /api/v1/calls
// @access  Public
exports.createCall = (req, res, next) => {
  res.status(200).json({ success: true, message: `Created Call}` });
}

// @desc    UPDATE Call
// @route   PUT /api/v1/calls/:id
// @access  Public
exports.updateCall = (req, res, next) => {
  res.status(200).json({ success: true, message: ` Call ${req.params.id} Updated}` });
}

// @desc    Delete Call
// @route   DELETE /api/v1/calls/:id
// @access  Public
exports.deleteCall = (req, res, next) => {
  res.status(200).json({ success: true, message: ` Call ${req.params.id} Deleted}` });
}
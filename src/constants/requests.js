const requestStatus = {
  WAITING: "WAITING",
  ACCEPTED: "ACCEPTED",
  DECLINED: "DECLINED",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED"
};
const requestType = {
  INCOMING: "INCOMING",
  OUTGOING: "OUTGOING"
};

module.exports = {
  requestStatus: requestStatus,
  requestType: requestType
};

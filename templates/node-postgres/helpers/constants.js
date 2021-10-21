exports.userRole = {
    UR_ADMIN: 1,
    UR_PROVIDER: 2,
  };
  
  const dbRecordsLimit = 50;
  
  exports.dbRecordsLimit = dbRecordsLimit;
  
  exports.getDbRecordsOffset = (page) => {
    const p = parseInt(page || 1, 10);
  
    return (p - 1) * dbRecordsLimit;
  }
  
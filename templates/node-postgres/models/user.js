module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING,
    },
    email_sent: {
      type: DataTypes.BOOLEAN,
    },
 
    contact_number: {
      type: DataTypes.STRING,
    },
    verification_code: {
      type: DataTypes.STRING,
    },
    forgot_password_verification_code: {
      type: DataTypes.STRING,
    },
    province: {
      type: DataTypes.STRING,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
    },
    last_activity: {
      type: DataTypes.DATE,
    }
  });

  user.associate = function(models) {
    // associations can be defined here

  };
  return user;
};

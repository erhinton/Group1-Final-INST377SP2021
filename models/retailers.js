export default (sequelize, DataTypes) => {
  const Retailers = sequelize.define(
    'Retailers',
    {
      retailer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      retailer_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      in_operation: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Retailers;
};

import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';

interface CategoryModel
  extends Model<
    InferAttributes<CategoryModel>,
    InferCreationAttributes<CategoryModel>
  > {
  id: CreationOptional<number>;
  name: string;
}

const Category = sequelize.define<CategoryModel>('category', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

export default Category;
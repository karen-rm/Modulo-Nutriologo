import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
/*
CREATE TABLE `Usuario` (
    `ID_usuario` INT NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(50) NOT NULL,
    `Fecha_nacimiento` DATE NOT NULL,
    `Altura` INT NOT NULL,
    `Peso` INT NOT NULL,
    `Correo` VARCHAR(50) NOT NULL,
    `Contrasena` VARCHAR(50) NOT NULL,
    `Telefono` VARCHAR(11) NOT NULL,
    `Apellido_paterno` VARCHAR(50) NOT NULL,
    `Apellido_materno` VARCHAR(50) NOT NULL,
    `Id_Genero` INT NOT NULL,
    `Id_actividad_fisica` INT NOT NULL,
    CONSTRAINT `PK_Usuario` PRIMARY KEY (`ID_usuario`)
); */

const Usuario = sequelize.define('Usuario', {
  ID_usuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  Fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Altura: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Peso: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Correo: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  Contrasena: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  Telefono: {
    type: DataTypes.STRING(11),
    allowNull: false
  },
  Apellido_paterno: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  Apellido_materno: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  Id_Genero: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Id_actividad_fisica: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Usuario',
  timestamps: false
});

module.exports = Usuario;
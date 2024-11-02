CREATE DATABASE IF NOT EXISTS ssa;
USE ssa;

-- Desactivamos temporalmente las claves foráneas
SET FOREIGN_KEY_CHECKS = 0;

-- Eliminamos las tablas si existen
DROP TABLE IF EXISTS `Usuario_log`;
DROP TABLE IF EXISTS `Plan_diario`;
DROP TABLE IF EXISTS `Unidad_medida`;
DROP TABLE IF EXISTS `Actividad_fisica`;
DROP TABLE IF EXISTS `Tiempo`;
DROP TABLE IF EXISTS `Subgrupo`;
DROP TABLE IF EXISTS `Grupo`;
DROP TABLE IF EXISTS `Genero`;
DROP TABLE IF EXISTS `Regimen_Alimenticio_Tiempos`;
DROP TABLE IF EXISTS `Plan_diario_tiempos`;
DROP TABLE IF EXISTS `Alimentos`;
DROP TABLE IF EXISTS `Ajuste_profecional`;
DROP TABLE IF EXISTS `Nutriologo`;
DROP TABLE IF EXISTS `Usuario`;

-- Creamos las tablas
CREATE TABLE `Usuario_log` (
    `Id_usuario_log` INT NOT NULL AUTO_INCREMENT,
    `Correo` VARCHAR(50) NOT NULL,
    `Contrasena` VARCHAR(50) NOT NULL,
    `ID_usuario` INT,
    CONSTRAINT `PK_Usuario_log` PRIMARY KEY (`Id_usuario_log`)
);

CREATE TABLE `Plan_diario` (
    `Id_plan` INT NOT NULL AUTO_INCREMENT,
    `Dia` DATE NOT NULL,
    `Cambio_realizada` BOOL NOT NULL,
    `Id_regimen` INT NOT NULL,
    `id_alimento_principal` INT NOT NULL,
    `id_alimento_equivalente` INT NOT NULL,
    `id_alimento_sustituto` INT NOT NULL,
    `ID_ajuste` INT NOT NULL,
    CONSTRAINT `PK_Plan_diario` PRIMARY KEY (`Id_plan`)
);

CREATE TABLE `Unidad_medida` (
    `Id_unidad` INT NOT NULL AUTO_INCREMENT,
    `Unidad` VARCHAR(50) NOT NULL,
    CONSTRAINT `PK_Unidad_medida` PRIMARY KEY (`Id_unidad`)
);

CREATE TABLE `Actividad_fisica` (
    `Id_actividad_fisica` INT NOT NULL,
    `Estado` VARCHAR(50) NOT NULL,
    CONSTRAINT `PK_Actividad_fisica` PRIMARY KEY (`Id_actividad_fisica`)
);

CREATE TABLE `Tiempo` (
    `Id_tiempo` INT NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(50) NOT NULL,
    CONSTRAINT `PK_Tiempo` PRIMARY KEY (`Id_tiempo`)
);

CREATE TABLE `Subgrupo` (
    `Id_Subgrupo` INT NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(50) NOT NULL,
    CONSTRAINT `PK_Subgrupo` PRIMARY KEY (`Id_Subgrupo`)
);

CREATE TABLE `Grupo` (
    `Id_grupo` INT NOT NULL,
    `Nombre_grupo` VARCHAR(50) NOT NULL,
    CONSTRAINT `PK_Grupo` PRIMARY KEY (`Id_grupo`)
);

CREATE TABLE `Genero` (
    `Id_Genero` INT NOT NULL,
    `Genero` VARCHAR(50) NOT NULL,
    CONSTRAINT `PK_Genero` PRIMARY KEY (`Id_Genero`)
);

CREATE TABLE `Regimen_Alimenticio_Tiempos` (
    `Id_regimen` INT NOT NULL AUTO_INCREMENT,
    `Calorias_diarias` DOUBLE NOT NULL,
    `Proteinas_diarias` DOUBLE NOT NULL,
    `Carbohidratos_diarios` DOUBLE NOT NULL,
    `Grasas_diarias` DOUBLE NOT NULL,
    `Id_nutriologo` INT NOT NULL,
    `Objetivo` VARCHAR(50) NOT NULL,
    `ID_usuario` INT NOT NULL,
    CONSTRAINT `PK_Regimen_Alimenticio_Tiempos` PRIMARY KEY (`Id_regimen`)
);

CREATE TABLE `Plan_diario_tiempos` (
    `Id_plan` INT NOT NULL AUTO_INCREMENT,
    `Dia` DATE NOT NULL,
    `Cambio_realizado` BOOL NOT NULL,
    `Id_regimen` INT NOT NULL,
    `id_alimento_principal` INT NOT NULL,
    `id_alimento_equivalente` INT NOT NULL,
    `Id_tiempo` INT NOT NULL,
    `ID_ajuste` INT NOT NULL,
    `id_alimento_sustituto` INT NOT NULL,
    CONSTRAINT `PK_Plan_diario_tiempos` PRIMARY KEY (`Id_plan`)
);

CREATE TABLE `Alimentos` (
    `id_alimento` INT NOT NULL AUTO_INCREMENT,
    `Nombre_alimento` VARCHAR(50) NOT NULL,
    `Calorias` DOUBLE NOT NULL,
    `Proteinas` DOUBLE NOT NULL,
    `Carbohidratos` DOUBLE NOT NULL,
    `Grasas` DOUBLE NOT NULL,
    `Fibra` DOUBLE NOT NULL,
    `Id_grupo` INT NOT NULL,
    `Cantidad` INT NOT NULL,
    `Id_unidad` INT NOT NULL,
    `Id_Subgrupo` INT NOT NULL,
    CONSTRAINT `PK_Alimentos` PRIMARY KEY (`id_alimento`)
);

CREATE TABLE `Ajuste_profecional` (
    `ID_ajuste` INT NOT NULL AUTO_INCREMENT,
    `comentario` VARCHAR(50) NOT NULL,
    `Fecha_correcion` DATE NOT NULL,
    `id_alimento` INT NOT NULL,
    `Id_nutriologo` INT NOT NULL,
    `Cantidad` INT NOT NULL,
    `Id_unidad` INT NOT NULL,
    CONSTRAINT `PK_Ajuste_profecional` PRIMARY KEY (`ID_ajuste`)
);

CREATE TABLE `Nutriologo` (
    `Id_nutriologo` INT NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(50) NOT NULL,
    `Correo` VARCHAR(50) NOT NULL,
    `Contrasena` VARCHAR(50) NOT NULL,
    `Telefono` VARCHAR(11) NOT NULL,
    `Apellido_paterno` VARCHAR(50) NOT NULL,
    `Apellido_Materno` VARCHAR(50) NOT NULL,
    CONSTRAINT `PK_Nutriologo` PRIMARY KEY (`Id_nutriologo`)
);

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
);

-- Agregamos los índices
ALTER TABLE `Usuario_log` ADD INDEX `IXFK_Usuario_log_Usuario` (`ID_usuario`);

-- Añadimos las claves foráneas
ALTER TABLE `Usuario_log` 
ADD CONSTRAINT `FK_Usuario_log_Usuario`
    FOREIGN KEY (`ID_usuario`) REFERENCES `Usuario` (`ID_usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE `Plan_diario`
ADD CONSTRAINT `FK_alimento_principal`
    FOREIGN KEY (`id_alimento_principal`) REFERENCES `Alimentos` (`id_alimento`) ON DELETE RESTRICT ON UPDATE RESTRICT,
ADD CONSTRAINT `FK_alimento_sustituto`
    FOREIGN KEY (`id_alimento_sustituto`) REFERENCES `Alimentos` (`id_alimento`) ON DELETE RESTRICT ON UPDATE RESTRICT,
ADD CONSTRAINT `FK_alimento_equivalente`
    FOREIGN KEY (`id_alimento_equivalente`) REFERENCES `Alimentos` (`id_alimento`) ON DELETE RESTRICT ON UPDATE RESTRICT,
ADD CONSTRAINT `FK_Plan_diario_Ajuste_profecional`
    FOREIGN KEY (`ID_ajuste`) REFERENCES `Ajuste_profecional` (`ID_ajuste`) ON DELETE RESTRICT ON UPDATE RESTRICT,
ADD CONSTRAINT `FK_Plan_diario_Regimen_Alimenticio_Tiempos`
    FOREIGN KEY (`Id_regimen`) REFERENCES `Regimen_Alimenticio_Tiempos` (`Id_regimen`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- Reactivamos las claves foráneas
SET FOREIGN_KEY_CHECKS = 1;
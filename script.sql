
-- -----------------------------------------------------
-- Schema db_clientes_api
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_Pessoa_api` ;
USE `db_Pessoa_api` ;

-- -----------------------------------------------------
-- Table `db_clientes_api`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_Pessoa_api`.`Pessoa` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `data_nasc` DATE NOT NULL,
  `cpf` VARCHAR(15) NOT NULL,
  `sexo` VARCHAR(10) NOT NULL,
  `estado_civil` VARCHAR(10) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `telefone` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`));


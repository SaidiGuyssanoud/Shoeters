CREATE TABLE IF NOT EXISTS `shoeters`.`users` ( 
    `user_id` INT NOT NULL AUTO_INCREMENT ,
    `email` VARCHAR(64) NOT NULL ,
    `password` VARCHAR(64) NOT NULL ,
    `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    PRIMARY KEY (`user_id`)) ENGINE = InnoDB
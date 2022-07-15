CREATE DATABASE IF NOT EXISTS XPInvestimentos;

USE XPInvestimentos;

CREATE TABLE cliente (
    codCliente INT NOT NULL auto_increment,
    nome VARCHAR(30) NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(codCliente)
) ENGINE=INNODB;

INSERT INTO XPInvestimentos.cliente (nome, date) VALUES
    ("Mariana Groppa", NOW()),
    ("Ana K Melo", NOW()),
    ("Clara Sodré", NOW());

CREATE TABLE ativo (
    codAtivo INT NOT NULL auto_increment,
    nome VARCHAR(30) NOT NULL,
    valor DECIMAL NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(codAtivo)
) ENGINE=INNODB;

INSERT INTO XPInvestimentos.ativo (nome, valor, date) VALUES
    ("SPMKT3 - Supermercado", 100.50, NOW()),
    ("PET4 - Petshop", 25.49, NOW()),
    ("POST3 - Posto de combustível", 100.50, NOW());

CREATE TABLE deposito (
    FOREIGN KEY (codCliente)
        REFERENCES cliente (codCliente)
        ON DELETE CASCADE,
    valor DECIMAL NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

INSERT INTO XPInvestimentos.deposito (codCliente, valor, date) VALUES
    (1, 100.000, NOW()),
    (2, 100.00, NOW()),
    (3, 100.000, NOW());

CREATE TABLE saque (
    FOREIGN KEY (codCliente)
        REFERENCES cliente (codCliente)
        ON DELETE CASCADE,
    valor DECIMAL NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

INSERT INTO XPInvestimentos.saque (codCliente, valor, date) VALUES
    (1, 50.00, NOW()),
    (2, 50.00, NOW()),
    (3, 50.000, NOW());

CREATE TABLE comprar (
    FOREIGN KEY (codCliente)
        REFERENCES cliente (codCliente)
        ON DELETE CASCADE,
    FOREIGN KEY (codAtivo)
        REFERENCES ativo (codAtivo)
        ON DELETE CASCADE,
    qtdeAtivo INT NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

INSERT INTO XPInvestimentos.comprar(codCliente, codAtivo, qtdeAtivo, date) VALUES
    (1, 1, 10, NOW()),
    (2, 2, 10, NOW()),
    (3, 3, 10, NOW());

CREATE TABLE vender (
    FOREIGN KEY (codCliente)
        REFERENCES cliente (codCliente)
        ON DELETE CASCADE,
    FOREIGN KEY (codAtivo)
        REFERENCES ativo (codAtivo)
        ON DELETE CASCADE,
    qtdeAtivo INT NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

INSERT INTO XPInvestimentos.vender(codCliente, codAtivo, qtdeAtivo, date) VALUES
    (1, 1, 5, NOW()),
    (2, 2, 5, NOW()),
    (3, 3, 5, NOW());

SET SQL_SAFE_UPDATES = 0;
CREATE DATABASE IF NOT EXISTS XPInvestimentos;

USE XPInvestimentos;

CREATE TABLE cliente (
    codCliente INT NOT NULL auto_increment,
    nomeCliente VARCHAR(30) NOT NULL,
    saldoDisponivel DECIMAL NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(codCliente)
) ENGINE=INNODB;

INSERT INTO XPInvestimentos.cliente (nomeCliente, saldoDisponivel, date) VALUES
    ("Mariana Groppa", 1000, NOW()),
    ("Ana K Melo", 1000, NOW()),
    ("Clara Sodré", 1000, NOW());

CREATE TABLE ativo (
    codAtivo INT NOT NULL auto_increment,
    nomeAtivo VARCHAR(30) NOT NULL,
    valor DECIMAL NOT NULL,
    qtdeAtivo INT NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(codAtivo)
) ENGINE=INNODB;

INSERT INTO XPInvestimentos.ativo (nomeAtivo, valor, qtdeAtivo, date) VALUES
    ("SPMKT3 - Supermercado", 50, 100, NOW()),
    ("PET4 - Petshop", 25, 100, NOW()),
    ("POST3 - Posto de combustível", 100, 100, NOW());

CREATE TABLE deposito (
    codCliente INT NOT NULL,
    valor DECIMAL NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (codCliente)
        REFERENCES cliente (codCliente)
        ON DELETE CASCADE
)  ENGINE=INNODB;

INSERT INTO XPInvestimentos.deposito (codCliente, valor, date) VALUES
    (1, 1000, NOW()),
    (2, 1000, NOW()),
    (3, 1000, NOW());

CREATE TABLE saque (
    codCliente INT NOT NULL,
    valor DECIMAL NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (codCliente)
        REFERENCES cliente (codCliente)
        ON DELETE CASCADE
)  ENGINE=INNODB;

INSERT INTO XPInvestimentos.saque (codCliente, valor, date) VALUES
    (1, 50, NOW()),
    (2, 50, NOW()),
    (3, 50, NOW());

CREATE TABLE comprar (
    codCliente INT NOT NULL,
    codAtivo INT NOT NULL,
    qtdeAtivo INT NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (codCliente)
        REFERENCES cliente (codCliente)
        ON DELETE CASCADE,
    FOREIGN KEY (codAtivo)
        REFERENCES ativo (codAtivo)
        ON DELETE CASCADE
)  ENGINE=INNODB;

INSERT INTO XPInvestimentos.comprar(codCliente, codAtivo, qtdeAtivo, date) VALUES
    (1, 1, 10, NOW()),
    (1, 2, 10, NOW()),
    (1, 3, 10, NOW()),
    (2, 1, 10, NOW()),
    (2, 2, 10, NOW()),
    (2, 3, 10, NOW()),
    (3, 1, 10, NOW()),
    (3, 2, 10, NOW()),
    (3, 3, 10, NOW());

CREATE TABLE vender (
    codCliente INT NOT NULL,
    codAtivo INT NOT NULL,
    qtdeAtivo INT NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (codCliente)
        REFERENCES cliente (codCliente)
        ON DELETE CASCADE,
    FOREIGN KEY (codAtivo)
        REFERENCES ativo (codAtivo)
        ON DELETE CASCADE
)  ENGINE=INNODB;

INSERT INTO XPInvestimentos.vender(codCliente, codAtivo, qtdeAtivo, date) VALUES
    (1, 1, 5, NOW()),
    (2, 2, 5, NOW()),
    (3, 3, 5, NOW());

SET SQL_SAFE_UPDATES = 0;
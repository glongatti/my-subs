CREATE TABLE "Configuration"
(
	Id INT IDENTITY(1,1) NOT NULL  PRIMARY KEY,
	IdUser INT NOT NULL,
	IdConfigurationType INT NOT NULL,
	Value INT NOT NULL,
	Active BIT NOT NULL,
);


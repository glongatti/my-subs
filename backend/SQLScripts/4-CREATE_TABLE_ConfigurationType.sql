CREATE TABLE "ConfigurationType"
(
	Id INT IDENTITY(1,1) NOT NULL  PRIMARY KEY,
	Name VARCHAR(250) NOT NULL,
	Active BIT NOT NULL,
);

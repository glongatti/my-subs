CREATE TABLE Currency(
	Id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Code CHAR(5) NOT NULL,
	Symbol CHAR(5) NOT NULL,
	Name VARCHAR(255) NOT NULL,
	DecimalDigits INT NOT NULL, 
	Rounding INT NOT NULL
);
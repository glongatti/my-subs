ALTER TABLE MySubs ADD CONSTRAINT FK_MySubs_PlanType FOREIGN KEY (IdPlanType) REFERENCES PlanType(Id);
ALTER TABLE MySubs ADD CONSTRAINT FK_MySubs_User FOREIGN KEY (IdUser) REFERENCES "User"(Id);
ALTER TABLE MySubs ADD CONSTRAINT FK_MySubs_Service FOREIGN KEY (IdService) REFERENCES Service(Id);
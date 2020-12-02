CREATE PROCEDURE [dbo].[SP_CustomerOpinion_Insert] 
	@idSmiley INT, 
	@Comment Varchar(500), 
	@pCreated_at DATETIME2,
	@userId INT
AS 
BEGIN
	BEGIN TRANSACTION 
		Insert into CustomersOpinions (CustomerReviewDateTime,FK_Smiley,CustomerComment,FK_User)
		VALUES (@pCreated_at,@idSmiley,@Comment,@userId);
	COMMIT
END

----Exemple to Execute Procedure:
--exec SP_Insert_CustomerOpinion 1,'Trop salé, trop cuit. Il n''y a pas d''émotion !',2;
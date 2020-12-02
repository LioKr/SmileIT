CREATE PROCEDURE [dbo].[SP_CustomerOpinion_Update]
	@pCustomerComment Varchar(500), 
	@pId int,
	@pFK_Smiley int,
	@pFK_User int

AS
BEGIN TRANSACTION
	BEGIN
		UPDATE CustomersOpinions 
		SET 
		CustomerComment = @pCustomerComment,
		FK_Smiley = @pFK_Smiley
		--FK_User = @pFK_User     no need at the moment

		WHERE id_CustomerOpinion = @pId
	END
COMMIT
CREATE PROCEDURE [dbo].[SP_CustomerOpinion_ReadAverageBetweenTwoDate]
--Should not work with string, replace with DATETIME2
	@DateStartString Varchar(30), 
	@DateEndString Varchar(30)
AS

DECLARE @DateStart Datetime2 = Convert(datetime2,@DateStartString,103), 
		@DateEnd Datetime2 = Convert(datetime2,@DateEndString,103),
		@CountOfSmileyType INT
SET @CountOfSmileyType = (SELECT COUNT(DISTINCT S.Label) 
			FROM CustomersOpinions CO
			JOIN Smileys S on CO.FK_Smiley = S.id_Smiley)

SELECT
	S.Label 'Smiley Type',
	COUNT(*) 'Number de Votes',
	ROUND(CONVERT(float, Count(S.Label))/@CountOfSmileyType*100,2) 'Percentage'
FROM CustomersOpinions CO
JOIN Smileys S on CO.FK_Smiley = S.id_Smiley
WHERE @DateStart >= @DateEnd OR  @DateStart <= @DateEnd
GROUP BY S.Label, S.id_Smiley
ORDER BY S.id_Smiley desc
CREATE FUNCTION [dbo].[SF_Hash_Password]
(
@password NVARCHAR(50)
)

RETURNS VARBINARY(32)
AS
BEGIN
Declare @passwordWithNoise NVARCHAR(MAX)
SET @passwordWithNoise= 'TQ4d8=UNWSx2dMWEKKmj4tUf3s89YX?n%C3Kkymty+2YuYpXyrhrQHkZBZK'+@password+'+EesdcL%Vg#cP5P%f&QeZT=vGw8&H-s*RVPneXJPeN01z*'
RETURN HASHBYTES(N'SHA2_256', @passwordWithNoise)
END
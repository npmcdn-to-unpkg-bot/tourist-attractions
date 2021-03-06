USE [master]
GO
CREATE DATABASE [TouristAttractions]
GO
USE [TouristAttractions]
GO

CREATE TABLE [dbo].[Attractions](
	[AttractionId] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Name] [nvarchar](200) NOT NULL,
	[Longitude] [float] NOT NULL,
	[Latitude] [float] NOT NULL,
	[City] [nvarchar](200) NULL,
	[Country] [nvarchar](200) NULL
)
GO

CREATE TABLE [dbo].[Sections](
	[SectionId] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[OrderNum] [int] NOT NULL,
	[Header] [nvarchar](200) NULL,
	[Content] [nvarchar](200) NULL,
	[AttractionId] [int] NOT NULL FOREIGN KEY REFERENCES [dbo].[Attractions] ([AttractionId]),
)
GO

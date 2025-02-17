USE [master]
GO
/****** Object:  Database [Task]    Script Date: 30-09-2024 12:39:53 ******/
CREATE DATABASE [Task]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Task', FILENAME = N'D:\SQLServer2022\MSSQL16.MSSQLSERVER22\MSSQL\DATA\Task.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Task_log', FILENAME = N'D:\SQLServer2022\MSSQL16.MSSQLSERVER22\MSSQL\DATA\Task_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [Task] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Task].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Task] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Task] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Task] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Task] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Task] SET ARITHABORT OFF 
GO
ALTER DATABASE [Task] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Task] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Task] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Task] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Task] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Task] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Task] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Task] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Task] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Task] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Task] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Task] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Task] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Task] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Task] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Task] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Task] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Task] SET RECOVERY FULL 
GO
ALTER DATABASE [Task] SET  MULTI_USER 
GO
ALTER DATABASE [Task] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Task] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Task] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Task] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Task] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Task] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Task', N'ON'
GO
ALTER DATABASE [Task] SET QUERY_STORE = ON
GO
ALTER DATABASE [Task] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [Task]
GO
/****** Object:  Table [dbo].[Material_Master]    Script Date: 30-09-2024 12:39:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Material_Master](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nchar](10) NOT NULL,
	[ShotText] [nchar](500) NOT NULL,
	[LongText] [nchar](1000) NOT NULL,
	[Unit] [nchar](500) NULL,
	[ReorderLevel] [nchar](10) NULL,
	[MinOrderQuntity] [int] NULL,
	[IsActive] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PO_Details]    Script Date: 30-09-2024 12:39:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PO_Details](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[OrderID] [int] NOT NULL,
	[MaterialID] [int] NOT NULL,
	[ItmQuntity] [float] NOT NULL,
	[ItmRate] [float] NOT NULL,
	[ItmValue] [float] NOT NULL,
	[Notes] [nchar](500) NULL,
	[ExpectedDttm] [datetime2](7) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PO_Master]    Script Date: 30-09-2024 12:39:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PO_Master](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[OrderNo] [nchar](10) NOT NULL,
	[OrderDttm] [datetime2](7) NOT NULL,
	[VendorId] [int] NOT NULL,
	[Notes] [nchar](500) NULL,
	[OrderValue] [float] NULL,
	[OrderStatus] [nchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vendor_Master]    Script Date: 30-09-2024 12:39:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vendor_Master](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nchar](10) NOT NULL,
	[Name] [nchar](100) NOT NULL,
	[AddressLine1] [nchar](500) NOT NULL,
	[AddressLine2] [nchar](500) NULL,
	[Email] [nchar](50) NULL,
	[ContactNo] [nchar](10) NULL,
	[ValidTill] [datetime] NULL,
	[IsActive] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Material_Master] ON 

INSERT [dbo].[Material_Master] ([ID], [Code], [ShotText], [LongText], [Unit], [ReorderLevel], [MinOrderQuntity], [IsActive]) VALUES (5, N'0001      ', N'Materail 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ', N'Strong Material                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', N'Kg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ', N'2         ', 20, 1)
INSERT [dbo].[Material_Master] ([ID], [Code], [ShotText], [LongText], [Unit], [ReorderLevel], [MinOrderQuntity], [IsActive]) VALUES (6, N'0002      ', N'Material of PC                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ', N'Materail is strong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ', N'pcs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ', N'1         ', 20, 1)
SET IDENTITY_INSERT [dbo].[Material_Master] OFF
GO
SET IDENTITY_INSERT [dbo].[PO_Details] ON 

INSERT [dbo].[PO_Details] ([ID], [OrderID], [MaterialID], [ItmQuntity], [ItmRate], [ItmValue], [Notes], [ExpectedDttm]) VALUES (1, 2, 5, 100, 25, 2500, N'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ', CAST(N'2024-10-03T00:00:00.0000000' AS DateTime2))
SET IDENTITY_INSERT [dbo].[PO_Details] OFF
GO
SET IDENTITY_INSERT [dbo].[PO_Master] ON 

INSERT [dbo].[PO_Master] ([ID], [OrderNo], [OrderDttm], [VendorId], [Notes], [OrderValue], [OrderStatus]) VALUES (2, N'OR-0001   ', CAST(N'2024-09-29T00:00:00.0000000' AS DateTime2), 5, NULL, 2500, N'Complete            ')
SET IDENTITY_INSERT [dbo].[PO_Master] OFF
GO
SET IDENTITY_INSERT [dbo].[Vendor_Master] ON 

INSERT [dbo].[Vendor_Master] ([ID], [Code], [Name], [AddressLine1], [AddressLine2], [Email], [ContactNo], [ValidTill], [IsActive]) VALUES (4, N'0002      ', N'vendor 2                                                                                            ', N'fgg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ', N'ddd                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ', N'k@gmail.com                                       ', N'7896541236', CAST(N'2024-09-29T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Vendor_Master] ([ID], [Code], [Name], [AddressLine1], [AddressLine2], [Email], [ContactNo], [ValidTill], [IsActive]) VALUES (5, N'0003      ', N'TCS                                                                                                 ', N'Pune                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', N'Mumbai                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ', N'abc123@gmail.com                                  ', N'7894561235', CAST(N'2023-08-19T00:00:00.000' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[Vendor_Master] OFF
GO
ALTER TABLE [dbo].[PO_Details]  WITH CHECK ADD  CONSTRAINT [Po_Details_Material] FOREIGN KEY([MaterialID])
REFERENCES [dbo].[Material_Master] ([ID])
GO
ALTER TABLE [dbo].[PO_Details] CHECK CONSTRAINT [Po_Details_Material]
GO
ALTER TABLE [dbo].[PO_Details]  WITH CHECK ADD  CONSTRAINT [Po_Master_Details] FOREIGN KEY([OrderID])
REFERENCES [dbo].[PO_Master] ([ID])
GO
ALTER TABLE [dbo].[PO_Details] CHECK CONSTRAINT [Po_Master_Details]
GO
ALTER TABLE [dbo].[PO_Master]  WITH CHECK ADD  CONSTRAINT [vendor_po] FOREIGN KEY([VendorId])
REFERENCES [dbo].[Vendor_Master] ([ID])
GO
ALTER TABLE [dbo].[PO_Master] CHECK CONSTRAINT [vendor_po]
GO
USE [master]
GO
ALTER DATABASE [Task] SET  READ_WRITE 
GO

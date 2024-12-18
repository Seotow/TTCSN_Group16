-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 19, 2024 at 09:10 AM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `group16`
--

-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

CREATE TABLE `bills` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `receiver_name` varchar(50) NOT NULL,
  `receiver_phone` varchar(15) NOT NULL,
  `receiver_address` varchar(200) NOT NULL,
  `note` varchar(200) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL,
  `total_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bills`
--

INSERT INTO `bills` (`id`, `customer_id`, `receiver_name`, `receiver_phone`, `receiver_address`, `note`, `created_at`, `status`, `total_price`) VALUES
(3, 1, 'Hieu', '1', '1', '1', '2024-11-04 18:32:54', 1, 170990000),
(4, 1, 'Hieu', '1', '1', '1', '2024-11-04 18:36:21', 1, 180980000),
(5, 1, 'Hieu', '1', '11', '1123', '2024-11-04 18:37:29', -1, 170990000),
(6, 1, 'Hieu', '1', '12', '3', '2024-11-04 18:38:05', 1, 170990000),
(7, 1, 'Hieu', '123', '123123', '132', '2024-11-04 18:39:44', -1, 201980000),
(8, 1, 'Hieu', '1', '1', '1', '2024-11-07 18:16:27', -1, 569990000),
(9, 1, 'Hieu', '2', '2', '2', '2024-11-07 18:18:40', -1, 460980000),
(10, 1, 'Hieu', '4', '4', '4', '2024-11-07 18:21:08', -1, 104340000),
(11, 1, 'Hieu', '5', '5', '5', '2024-11-08 08:24:15', -1, 183890000),
(12, 1, 'Hieu', '2', '2', '2', '2024-11-08 08:25:54', -1, 242960000),
(13, 1, 'Hieu', '1', '1', '1', '2024-11-08 08:26:40', -1, 52170000),
(14, 1, 'Hieu', '2', '2', '2', '2024-11-08 08:27:29', -1, 158980000),
(15, 1, 'Hieu', '2', '2', '2', '2024-11-08 08:28:42', -1, 40980000),
(16, 1, 'Hieu', '6', '6', '6', '2024-11-08 08:35:43', 1, 27680000),
(17, 1, 'Hieu', '', '', '', '2024-11-08 08:40:14', 1, 30990000),
(18, 1, 'Hieu', '', '', '', '2024-11-08 08:41:27', 1, 30990000),
(19, 1, '', '', '', NULL, '2024-11-08 08:43:39', 1, 1),
(20, 1, 'Hieu', '111', '111', '111', '2024-11-08 08:54:16', 1, 52170000),
(21, 1, 'Hieu', '1', '1', '111', '2024-11-08 09:57:59', -1, 320980000),
(22, 1, 'Hieu', '111', '1111', '1111', '2024-11-08 09:58:57', 1, 170990000),
(23, 1, 'Hieu', '444', '444', '44', '2024-11-08 10:00:22', 1, 40980000),
(24, 1, 'Hieu', '4', '4', '444', '2024-11-08 11:08:57', 1, 42980000),
(25, 1, 'Hieu', '12341', '123123', 'Last Dance', '2024-11-08 11:11:10', 1, 85160000),
(26, 1, 'Hieu', '0327272297', 'Số 98, Liên Quan, Thạch Thất, Hà Nội', 'Last Dance Test', '2024-11-08 11:12:34', 1, 118950000),
(27, 1, 'Hieu', '032727229714', 'Hà Nội1', '', '2024-11-17 04:35:13', -1, 49990000),
(28, 1, 'Hieu', '032727229714', 'Hà Nội1', '', '2024-11-17 04:35:20', -1, 9990000),
(29, 1, 'Hieu', '032727229714', 'Hà Nội1', '', '2024-11-17 04:35:27', -1, 32990000),
(30, 1, 'Hieu', '032727229714', 'Hà Nội1', '', '2024-11-17 08:35:06', 1, 170990000),
(31, 1, 'Hieu', '032727229714', 'Hà Nội1', '123123', '2024-11-17 09:07:18', 1, 381980000),
(32, 1, 'Hieu', '032727229714', 'Hà Nội1', '', '2024-12-15 06:44:09', -1, 140000000),
(33, 1, 'Hieu', '032727229714', 'Hà Nội1', '', '2024-12-15 06:47:37', -1, 9990000),
(34, 1, 'Hieu', '032727229714', 'Hà Nội1', '12312312', '2024-12-15 08:53:42', 1, 226660001),
(35, 1, 'Hieu', '032727229714', 'Hà Nội1', '1313', '2024-12-15 08:55:01', -1, 158980000);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`) VALUES
(1, 'Laptop', 'Cat1.png'),
(2, 'Main, CPU, VGA', 'Cat2.png'),
(3, 'Ổ cứng, ram, thẻ nhớ', 'Cat3.png'),
(4, 'Màn hình', 'Cat4.png'),
(5, 'Chuột + lót chuột', 'Cat5.png'),
(6, 'Mạng', 'Cat6.png'),
(7, 'Phụ kiện, cáp sạc', 'Cat7.png'),
(8, 'PC', 'Cat8.png'),
(9, 'CPU, Nguồn, Tản', 'Cat9.png'),
(10, 'Loa, Micro, Webcam', 'Cat10.png'),
(11, 'Bàn phím', 'Cat11.png'),
(12, 'Tai nghe', 'Cat12.png'),
(13, 'Handheld, Console', 'Cat13.png'),
(14, 'Khác', 'Cat14.png');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `address` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `gender`, `birthdate`, `phone`, `email`, `password`, `address`) VALUES
(1, 'Hieu', 1, '2004-03-04', '032727229714', 'trunghieu152004@gmail.com', '123', 'Hà Nội1'),
(25, 'Nguyen Hieu', NULL, NULL, '0327272297', 'trunghieu@gmail.com', '123123', NULL),
(26, 'Nguyen Hieu', NULL, NULL, '03272722971', 'trunghieu1@gmail.com', '123123', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `details_bills`
--

CREATE TABLE `details_bills` (
  `bill_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `details_bills`
--

INSERT INTO `details_bills` (`bill_id`, `product_id`, `quantity`) VALUES
(3, 648, 1),
(3, 649, 1),
(4, 647, 1),
(4, 648, 1),
(4, 649, 1),
(5, 648, 1),
(5, 649, 1),
(6, 648, 1),
(6, 649, 1),
(7, 648, 2),
(7, 649, 1),
(8, 649, 4),
(8, 653, 1),
(9, 647, 1),
(9, 648, 1),
(9, 649, 3),
(10, 651, 2),
(10, 652, 2),
(10, 653, 2),
(11, 648, 1),
(11, 651, 1),
(11, 652, 5),
(11, 653, 4),
(12, 647, 1),
(12, 648, 3),
(12, 649, 1),
(13, 651, 1),
(13, 652, 1),
(13, 653, 1),
(14, 646, 1),
(14, 647, 1),
(14, 653, 1),
(15, 647, 1),
(15, 648, 1),
(16, 652, 1),
(16, 653, 1),
(17, 648, 1),
(18, 648, 1),
(20, 651, 1),
(20, 652, 1),
(20, 653, 1),
(21, 647, 1),
(21, 648, 1),
(21, 649, 2),
(22, 648, 1),
(22, 649, 1),
(23, 648, 1),
(23, 653, 1),
(24, 653, 1),
(24, 654, 1),
(25, 651, 1),
(25, 652, 1),
(25, 653, 1),
(25, 654, 1),
(26, 653, 2),
(26, 654, 3),
(27, 645, 1),
(28, 647, 1),
(29, 654, 1),
(30, 648, 1),
(30, 649, 1),
(31, 653, 1),
(31, 655, 1),
(31, 661, 2),
(32, 649, 1),
(33, 647, 1),
(34, 644, 1),
(34, 645, 1),
(34, 647, 1),
(34, 676, 1),
(34, 749, 1),
(34, 896, 1),
(35, 646, 1),
(35, 647, 2);

-- --------------------------------------------------------

--
-- Table structure for table `manufacturers`
--

CREATE TABLE `manufacturers` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `manufacturers`
--

INSERT INTO `manufacturers` (`id`, `name`) VALUES
(5, 'Acer'),
(14, 'Alienware'),
(7, 'Apple'),
(4, 'Asus'),
(1, 'Dell'),
(10, 'Gigabyte'),
(2, 'HP'),
(13, 'IBM'),
(3, 'Lenovo'),
(6, 'Microsoft'),
(9, 'MSI'),
(8, 'Razer'),
(11, 'Samsung'),
(12, 'Toshiba');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `price` float NOT NULL,
  `quantity` int(11) NOT NULL,
  `manufacturer_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `price`, `quantity`, `manufacturer_id`, `category_id`) VALUES
(644, 'PC GVN x MSI PROJECT ZERO WHITE (Intel i5-14400F/ VGA RTX 4060)', 'PC GVN x MSI PROJECT ZERO WHITE (Intel i5-14400F/ VGA RTX 4060)', 'thumb_project_zero_c58860d9fa3a409294c17ab45f46f612_medium.png', 24990000, 1, 1, 5),
(645, 'PC GVN x MSI Dragon X (Intel i7-14700F/ VGA RTX 4070 Super)', 'PC GVN x MSI Dragon X (Intel i7-14700F/ VGA RTX 4070 Super)', 'thumb_i7_msi_e8ebf152f4c448de8c39a8fc49aa31d7_medium.png', 49990000, 92, 7, 13),
(646, 'PC GVN x ASUS Back to Future (Intel i9-14900K/ VGA RTX 4090)', 'PC GVN x ASUS Back to Future (Intel i9-14900K/ VGA RTX 4090)', '3_e68704a03a634e27899e3b616e94b095_medium.jpg', 139000000, 70, 10, 2),
(647, 'PC GVN Intel i3-12100F/ VGA GTX 1650', 'PC GVN Intel i3-12100F/ VGA GTX 1650', 'pc_gvn_i3_1650_-_25_49bfa7eacaf842b5b2569b0d041c2b23_medium.jpg', 9990000, 24, 9, 3),
(648, 'PC GVN Intel i5-14400F/ VGA RTX 4060 Ti / 12954', 'PC GVN Intel i5-14400F/ VGA RTX 4060 Ti / 12954', 'pc_nzxt_-_3_ea5b5bb589f046dcbabe890350205566_medium.png', 30990000, 79, 5, 2),
(649, 'PC GVN x ASUS Advanced Ai (Intel Core Ultra 9 285K/ VGA RTX 4090)', 'PC GVN x ASUS Advanced Ai (Intel Core Ultra 9 285K/ VGA RTX 4090)', 'gr701_-_8_cb365132fb6e4bc8a0e87e8811ef585a_medium.png', 140000000, 52, 6, 2),
(650, 'PC GVN x AORUS XTREME ICE (Intel i9-14900K/ VGA RTX 4080 Super)', 'PC GVN x AORUS XTREME ICE (Intel i9-14900K/ VGA RTX 4080 Super)', 'pc_gvn_x_gigabyte__ice__-_32_e797aed458a94914b78e491d8c7a5ccb_medium.png', 150000000, 52, 13, 3),
(651, 'PC GVN AMD R5-8400F/ VGA RX 7600', 'PC GVN AMD R5-8400F/ VGA RX 7600', 'pc_gvn_-_amd_-_a21_-_3_c71ab3cdd9bf45cb947b98f4561300b4_medium.png', 24490000, 88, 8, 5),
(652, 'PC GVN Intel i5-12400F/ VGA RTX 4060', 'PC GVN Intel i5-12400F/ VGA RTX 4060', 'pc_gvn_viper_i3060_gen_13_-_3_a7538c02de68412d8a7a4c8626c1b51b_medium.png', 17690000, 21, 8, 9),
(653, 'PC GVN Intel i3-12100F/ VGA RX 6500XT', 'PC GVN Intel i3-12100F/ VGA RX 6500XT', 'pc_gvn_rx6600_-_3_762ba90a94904a50809a93355cd819a7_medium.png', 9990000, 45, 4, 4),
(654, 'PC GVN x Corsair iCUE (Intel i5-14600KF/ VGA RTX 4060 Ti)', 'PC GVN x Corsair iCUE (Intel i5-14600KF/ VGA RTX 4060 Ti)', '4060ti_dfb001bdb8cd410d9a85e38c5a4c568b_medium.png', 32990000, 40, 11, 9),
(655, 'PC GVN x MSI Dragon ACE (Intel i9-14900K/ VGA RTX 4080 Super)', 'PC GVN x MSI Dragon ACE (Intel i9-14900K/ VGA RTX 4080 Super)', 'artboard_3_b5ccc140878a433db58322a5adeb8b3c_medium.png', 93990000, 15, 11, 8),
(656, 'PC GVN x ASUS Back to Future (Intel i7-14700K/ VGA RTX 4070 Ti Super)', 'PC GVN x ASUS Back to Future (Intel i7-14700K/ VGA RTX 4070 Ti Super)', 'pc_ai_9d2576de0d644c8289792f295c_97a1e5eafae649a0ae9c0e7e076322a2_medium.jpg', 62590000, 8, 4, 12),
(657, 'PC GVN x ASUS Back to Future (Intel i5-14400F/ VGA RTX 4070 Super)', 'PC GVN x ASUS Back to Future (Intel i5-14400F/ VGA RTX 4070 Super)', '2_b81eb507bdfe42b3bce05c0c9e3e92d0_medium.jpg', 37690000, 87, 3, 11),
(658, 'PC GVN x Corsair iCUE (Intel i7-14700F/ VGA RTX 4070Ti Super)', 'PC GVN x Corsair iCUE (Intel i7-14700F/ VGA RTX 4070Ti Super)', 'pc_-_35_a9769976b4474527b9884f323069456d_medium.png', 65490000, 99, 1, 11),
(659, 'PC GVN x MSI PROJECT ZERO WHITE (Intel i5-14400F/ VGA RTX 4060)', 'PC GVN x MSI PROJECT ZERO WHITE (Intel i5-14400F/ VGA RTX 4060)', 'thumb_project_zero_c58860d9fa3a409294c17ab45f46f612_medium.png', 24990000, 90, 7, 6),
(660, 'PC GVN x MSI Dragon X (Intel i7-14700F/ VGA RTX 4070 Super)', 'PC GVN x MSI Dragon X (Intel i7-14700F/ VGA RTX 4070 Super)', 'thumb_i7_msi_e8ebf152f4c448de8c39a8fc49aa31d7_medium.png', 49990000, 91, 11, 14),
(661, 'PC GVN x ASUS Back to Future (Intel i9-14900K/ VGA RTX 4090)', 'PC GVN x ASUS Back to Future (Intel i9-14900K/ VGA RTX 4090)', '3_e68704a03a634e27899e3b616e94b095_medium.jpg', 139000000, 20, 4, 6),
(662, 'PC GVN Intel i3-12100F/ VGA GTX 1650', 'PC GVN Intel i3-12100F/ VGA GTX 1650', 'pc_gvn_i3_1650_-_25_49bfa7eacaf842b5b2569b0d041c2b23_medium.jpg', 9990000, 31, 9, 13),
(663, 'PC GVN Intel i5-14400F/ VGA RTX 4060 Ti / 12954', 'PC GVN Intel i5-14400F/ VGA RTX 4060 Ti / 12954', 'pc_nzxt_-_3_ea5b5bb589f046dcbabe890350205566_medium.png', 30990000, 43, 3, 6),
(664, 'PC GVN x ASUS Advanced Ai (Intel Core Ultra 9 285K/ VGA RTX 4090)', 'PC GVN x ASUS Advanced Ai (Intel Core Ultra 9 285K/ VGA RTX 4090)', 'gr701_-_8_cb365132fb6e4bc8a0e87e8811ef585a_medium.png', 140000000, 57, 4, 7),
(665, 'PC GVN x AORUS XTREME ICE (Intel i9-14900K/ VGA RTX 4080 Super)', 'PC GVN x AORUS XTREME ICE (Intel i9-14900K/ VGA RTX 4080 Super)', 'pc_gvn_x_gigabyte__ice__-_32_e797aed458a94914b78e491d8c7a5ccb_medium.png', 150000000, 47, 9, 7),
(666, 'PC GVN AMD R5-8400F/ VGA RX 7600', 'PC GVN AMD R5-8400F/ VGA RX 7600', 'pc_gvn_-_amd_-_a21_-_3_c71ab3cdd9bf45cb947b98f4561300b4_medium.png', 24490000, 32, 12, 11),
(667, 'PC GVN Intel i5-12400F/ VGA RTX 4060', 'PC GVN Intel i5-12400F/ VGA RTX 4060', 'pc_gvn_viper_i3060_gen_13_-_3_a7538c02de68412d8a7a4c8626c1b51b_medium.png', 17690000, 43, 13, 5),
(668, 'PC GVN Intel i3-12100F/ VGA RX 6500XT', 'PC GVN Intel i3-12100F/ VGA RX 6500XT', 'pc_gvn_rx6600_-_3_762ba90a94904a50809a93355cd819a7_medium.png', 9990000, 92, 5, 14),
(669, 'PC GVN x Corsair iCUE (Intel i5-14600KF/ VGA RTX 4060 Ti)', 'PC GVN x Corsair iCUE (Intel i5-14600KF/ VGA RTX 4060 Ti)', '4060ti_dfb001bdb8cd410d9a85e38c5a4c568b_medium.png', 32990000, 13, 5, 13),
(670, 'PC GVN x MSI Dragon ACE (Intel i9-14900K/ VGA RTX 4080 Super)', 'PC GVN x MSI Dragon ACE (Intel i9-14900K/ VGA RTX 4080 Super)', 'artboard_3_b5ccc140878a433db58322a5adeb8b3c_medium.png', 93990000, 46, 9, 3),
(671, 'PC GVN x ASUS Back to Future (Intel i7-14700K/ VGA RTX 4070 Ti Super)', 'PC GVN x ASUS Back to Future (Intel i7-14700K/ VGA RTX 4070 Ti Super)', 'pc_ai_9d2576de0d644c8289792f295c_97a1e5eafae649a0ae9c0e7e076322a2_medium.jpg', 62590000, 96, 2, 2),
(672, 'PC GVN x ASUS Back to Future (Intel i5-14400F/ VGA RTX 4070 Super)', 'PC GVN x ASUS Back to Future (Intel i5-14400F/ VGA RTX 4070 Super)', '2_b81eb507bdfe42b3bce05c0c9e3e92d0_medium.jpg', 37690000, 65, 4, 9),
(673, 'PC GVN x Corsair iCUE (Intel i7-14700F/ VGA RTX 4070Ti Super)', 'PC GVN x Corsair iCUE (Intel i7-14700F/ VGA RTX 4070Ti Super)', 'pc_-_35_a9769976b4474527b9884f323069456d_medium.png', 65490000, 17, 9, 1),
(674, 'PC GVN x MSI PROJECT ZERO WHITE (Intel i5-14400F/ VGA RTX 4060)', 'PC GVN x MSI PROJECT ZERO WHITE (Intel i5-14400F/ VGA RTX 4060)', 'thumb_project_zero_c58860d9fa3a409294c17ab45f46f612_medium.png', 24990000, 42, 3, 5),
(675, 'PC GVN x MSI Dragon X (Intel i7-14700F/ VGA RTX 4070 Super)', 'PC GVN x MSI Dragon X (Intel i7-14700F/ VGA RTX 4070 Super)', 'thumb_i7_msi_e8ebf152f4c448de8c39a8fc49aa31d7_medium.png', 49990000, 100, 8, 8),
(676, 'PC GVN x ASUS Back to Future (Intel i9-14900K/ VGA RTX 4090)', 'PC GVN x ASUS Back to Future (Intel i9-14900K/ VGA RTX 4090)', '3_e68704a03a634e27899e3b616e94b095_medium.jpg', 139000000, 48, 6, 12),
(677, 'PC GVN Intel i3-12100F/ VGA GTX 1650', 'PC GVN Intel i3-12100F/ VGA GTX 1650', 'pc_gvn_i3_1650_-_25_49bfa7eacaf842b5b2569b0d041c2b23_medium.jpg', 9990000, 38, 9, 7),
(678, 'PC GVN Intel i5-14400F/ VGA RTX 4060 Ti / 12954', 'PC GVN Intel i5-14400F/ VGA RTX 4060 Ti / 12954', 'pc_nzxt_-_3_ea5b5bb589f046dcbabe890350205566_medium.png', 30990000, 36, 10, 8),
(679, 'Laptop gaming Lenovo LOQ 15IAX9 83GS001SVN', 'Laptop gaming Lenovo LOQ 15IAX9 83GS001SVN', 'khung-laptop-23_fc6b74bf6c0e47209d09c4437ed57dd4_medium.png', 18990000, 68, 3, 9),
(680, 'Laptop gaming HP VICTUS 16-r0127TX 8C5N2PA', 'Laptop gaming HP VICTUS 16-r0127TX 8C5N2PA', 'khung-laptop-23_f1837c085c544a839405fc8df8a9cabd_medium.png', 30990000, 45, 13, 13),
(681, 'Laptop gaming MSI Thin 15 B13UC 2044VN', 'Laptop gaming MSI Thin 15 B13UC 2044VN', 'thin-new_d31ff3b88e7f40e7ac88acc624e03d4f_medium.png', 19490000, 91, 10, 7),
(682, 'Laptop gaming Acer Aspire 5 A515 58GM 53PZ', 'Laptop gaming Acer Aspire 5 A515 58GM 53PZ', 'ava_948d63eae6f1421291e0e993add6727e_medium.png', 15990000, 74, 8, 4),
(683, 'Laptop gaming MSI Thin 15 B12UCX 1419VN', 'Laptop gaming MSI Thin 15 B12UCX 1419VN', '1411vn-2_0de912de79104f1183b0284cbacab24e_medium.png', 15490000, 14, 11, 10),
(684, 'Laptop gaming Acer Nitro 5 AN515 46 R6QR', 'Laptop gaming Acer Nitro 5 AN515 46 R6QR', 'acer-nitro-5-an515-46-r6qr_76527b5f7ffc4b1ba85be70a47091c25_1024x1024_8a2f0281efa040adb268338bcae8933c_medium.png', 22990000, 8, 1, 12),
(685, 'Laptop gaming MSI Katana 15 B13VFK 676VN / 12463', 'Laptop gaming MSI Katana 15 B13VFK 676VN / 12463', '676vn_21da8c4630014f808b321b3d32118291_69f68ad8d3be44b385bb3da80ec4a9ee_medium.png', 26490000, 17, 7, 3),
(686, 'Laptop gaming MSI Thin 15 B13UC 1411VN', 'Laptop gaming MSI Thin 15 B13UC 1411VN', 'thin-new_88fcbd74bd854127a8c340c245dcbd1b_medium.png', 18990000, 67, 5, 6),
(687, 'Laptop gaming MSI Katana 15 B13VEK 252VN / 12321', 'Laptop gaming MSI Katana 15 B13VEK 252VN / 12321', '1205vn_da651643e91047bfa9729c53f93ffc6e_large_39f1561f3448481c94add35d7fda7dc4_medium.png', 23990000, 8, 3, 5),
(688, 'Laptop gaming Lenovo LOQ 15IAX9 83GS001RVN', 'Laptop gaming Lenovo LOQ 15IAX9 83GS001RVN', 'khung-laptop-23_fd54463b52cb4cf79732623e567e930e_medium.png', 21290000, 82, 6, 10),
(689, 'Laptop gaming Lenovo LOQ 15IRX9 83DV00D5VN', 'Laptop gaming Lenovo LOQ 15IRX9 83DV00D5VN', 'ava_30648cdc44594d1fa28c97cecf22aa6b_medium.png', 29490000, 64, 8, 3),
(690, 'Laptop gaming Acer Nitro 16 Phoenix AN16 41 R60F', 'Laptop gaming Acer Nitro 16 Phoenix AN16 41 R60F', 'ava1_5a226b37a3db45b98caca9337da40b88_medium.png', 24990000, 26, 11, 4),
(691, 'Laptop gaming Acer Nitro 16 Phoenix AN16 41 R3SM', 'Laptop gaming Acer Nitro 16 Phoenix AN16 41 R3SM', 'ava1_203ccce160c7492d98b65c30e2316a8b_medium.png', 28990000, 84, 6, 4),
(692, 'Laptop gaming Acer Nitro 16 Phoenix AN16 41 R76E', 'Laptop gaming Acer Nitro 16 Phoenix AN16 41 R76E', 'ava1_79847e6b9c664977afe799d3ca914a03_medium.png', 29990000, 51, 5, 14),
(693, 'Laptop gaming ASUS TUF Gaming F15 FX507ZC4 HN095W', 'Laptop gaming ASUS TUF Gaming F15 FX507ZC4 HN095W', 'lp040w_124541e5ca0947f78a7483bc988e44b4_medium.gif', 20490000, 98, 10, 3),
(694, 'Laptop gaming Lenovo LOQ 15IAX9 83GS001SVN', 'Laptop gaming Lenovo LOQ 15IAX9 83GS001SVN', 'khung-laptop-23_fc6b74bf6c0e47209d09c4437ed57dd4_medium.png', 18990000, 98, 13, 5),
(695, 'Laptop gaming HP VICTUS 16-r0127TX 8C5N2PA', 'Laptop gaming HP VICTUS 16-r0127TX 8C5N2PA', 'khung-laptop-23_f1837c085c544a839405fc8df8a9cabd_medium.png', 30990000, 89, 6, 2),
(696, 'Laptop gaming MSI Thin 15 B13UC 2044VN', 'Laptop gaming MSI Thin 15 B13UC 2044VN', 'thin-new_d31ff3b88e7f40e7ac88acc624e03d4f_medium.png', 19490000, 14, 6, 1),
(697, 'Laptop gaming Acer Aspire 5 A515 58GM 53PZ', 'Laptop gaming Acer Aspire 5 A515 58GM 53PZ', 'ava_948d63eae6f1421291e0e993add6727e_medium.png', 15990000, 24, 7, 13),
(698, 'Laptop gaming MSI Thin 15 B12UCX 1419VN', 'Laptop gaming MSI Thin 15 B12UCX 1419VN', '1411vn-2_0de912de79104f1183b0284cbacab24e_medium.png', 15490000, 60, 11, 3),
(699, 'Laptop gaming Acer Nitro 5 AN515 46 R6QR', 'Laptop gaming Acer Nitro 5 AN515 46 R6QR', 'acer-nitro-5-an515-46-r6qr_76527b5f7ffc4b1ba85be70a47091c25_1024x1024_8a2f0281efa040adb268338bcae8933c_medium.png', 22990000, 77, 1, 11),
(700, 'Laptop gaming MSI Katana 15 B13VFK 676VN / 12463', 'Laptop gaming MSI Katana 15 B13VFK 676VN / 12463', '676vn_21da8c4630014f808b321b3d32118291_69f68ad8d3be44b385bb3da80ec4a9ee_medium.png', 26490000, 72, 7, 6),
(701, 'Laptop gaming MSI Thin 15 B13UC 1411VN', 'Laptop gaming MSI Thin 15 B13UC 1411VN', 'thin-new_88fcbd74bd854127a8c340c245dcbd1b_medium.png', 18990000, 53, 13, 1),
(702, 'Laptop gaming MSI Katana 15 B13VEK 252VN / 12321', 'Laptop gaming MSI Katana 15 B13VEK 252VN / 12321', '1205vn_da651643e91047bfa9729c53f93ffc6e_large_39f1561f3448481c94add35d7fda7dc4_medium.png', 23990000, 34, 10, 6),
(703, 'Laptop gaming Lenovo LOQ 15IAX9 83GS001RVN', 'Laptop gaming Lenovo LOQ 15IAX9 83GS001RVN', 'khung-laptop-23_fd54463b52cb4cf79732623e567e930e_medium.png', 21290000, 53, 2, 10),
(704, 'Laptop gaming Lenovo LOQ 15IRX9 83DV00D5VN', 'Laptop gaming Lenovo LOQ 15IRX9 83DV00D5VN', 'ava_30648cdc44594d1fa28c97cecf22aa6b_medium.png', 29490000, 49, 5, 3),
(705, 'Laptop gaming Acer Nitro 16 Phoenix AN16 41 R60F', 'Laptop gaming Acer Nitro 16 Phoenix AN16 41 R60F', 'ava1_5a226b37a3db45b98caca9337da40b88_medium.png', 24990000, 63, 3, 5),
(706, 'Laptop gaming Acer Nitro 16 Phoenix AN16 41 R3SM', 'Laptop gaming Acer Nitro 16 Phoenix AN16 41 R3SM', 'ava1_203ccce160c7492d98b65c30e2316a8b_medium.png', 28990000, 31, 11, 2),
(707, 'Laptop gaming Acer Nitro 16 Phoenix AN16 41 R76E', 'Laptop gaming Acer Nitro 16 Phoenix AN16 41 R76E', 'ava1_79847e6b9c664977afe799d3ca914a03_medium.png', 29990000, 6, 10, 2),
(708, 'Laptop gaming ASUS TUF Gaming F15 FX507ZC4 HN095W', 'Laptop gaming ASUS TUF Gaming F15 FX507ZC4 HN095W', 'lp040w_124541e5ca0947f78a7483bc988e44b4_medium.gif', 20490000, 64, 12, 4),
(709, 'Laptop gaming Lenovo LOQ 15IAX9 83GS001SVN', 'Laptop gaming Lenovo LOQ 15IAX9 83GS001SVN', 'khung-laptop-23_fc6b74bf6c0e47209d09c4437ed57dd4_medium.png', 18990000, 47, 2, 4),
(710, 'Laptop gaming HP VICTUS 16-r0127TX 8C5N2PA', 'Laptop gaming HP VICTUS 16-r0127TX 8C5N2PA', 'khung-laptop-23_f1837c085c544a839405fc8df8a9cabd_medium.png', 30990000, 58, 1, 7),
(711, 'Laptop gaming MSI Thin 15 B13UC 2044VN', 'Laptop gaming MSI Thin 15 B13UC 2044VN', 'thin-new_d31ff3b88e7f40e7ac88acc624e03d4f_medium.png', 19490000, 15, 8, 8),
(712, 'Laptop gaming Acer Aspire 5 A515 58GM 53PZ', 'Laptop gaming Acer Aspire 5 A515 58GM 53PZ', 'ava_948d63eae6f1421291e0e993add6727e_medium.png', 15990000, 34, 4, 1),
(713, 'Laptop gaming MSI Thin 15 B12UCX 1419VN', 'Laptop gaming MSI Thin 15 B12UCX 1419VN', '1411vn-2_0de912de79104f1183b0284cbacab24e_medium.png', 15490000, 79, 13, 5),
(714, 'Laptop ASUS Zenbook 14 OLED UX3405MA PP588W', 'Laptop ASUS Zenbook 14 OLED UX3405MA PP588W', 'ux3405ma-pp588w_zenbook_ai_b097c88019d44a789e70d8fa49fc91ef_medium.jpg', 26990000, 45, 6, 4),
(715, 'Laptop ASUS Zenbook 14 OLED UX3405MA PP151W', 'Laptop ASUS Zenbook 14 OLED UX3405MA PP151W', 'ux3405ma-pp151w_zenbook_ai_f61c0a3d9e6b45879ccc0213653fc56b_medium.jpg', 26490000, 1, 1, 9),
(716, 'Laptop ASUS Zenbook Duo OLED UX8406MA PZ142W', 'Laptop ASUS Zenbook Duo OLED UX8406MA PZ142W', 'ux8406ma-pz142w_new_1_323777fbd2ea4f788f45c1165ed81427_medium.jpg', 54990000, 59, 12, 5),
(717, 'Laptop ASUS Zenbook Duo OLED UX8406MA PZ307W', 'Laptop ASUS Zenbook Duo OLED UX8406MA PZ307W', '7_27_a3f6dfa7a8854d958953ad81268880d2_medium.png', 45990000, 21, 5, 7),
(718, 'Laptop LG Gram 2023 14Z90R GAH53A5 / 11086', 'Laptop LG Gram 2023 14Z90R GAH53A5 / 11086', 'lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png', 23890000, 80, 2, 4),
(719, 'Laptop ASUS Vivobook 14 OLED A1405ZA KM264W', 'Laptop ASUS Vivobook 14 OLED A1405ZA KM264W', 'vobook_14_oled_x1405v_m1405y_cool_silver_black_keyboard_13_fingerprint_6701c548b729416d90498bdac33dec13_medium.png', 15990000, 27, 1, 5),
(720, 'Laptop Lenovo IdeaPad Slim 5 14IMH9 83DA0020VN', 'Laptop Lenovo IdeaPad Slim 5 14IMH9 83DA0020VN', 'ava_dd039a51e92146d5977d980f7d205e9d_medium.png', 26490000, 80, 8, 7),
(721, 'Laptop Lenovo V14 G4 IRU 83A000BHVN', 'Laptop Lenovo V14 G4 IRU 83A000BHVN', 'ava_6809afe39f3141cf9497e2465cbf4d36_medium.png', 13790000, 43, 8, 6),
(722, 'Laptop Lenovo V14 G4 IRU 83A0000TVN', 'Laptop Lenovo V14 G4 IRU 83A0000TVN', 'ava_9ebb0708a1834156941f6fb60da838c4_medium.png', 10490000, 97, 11, 7),
(723, 'Laptop ASUS Vivobook 14 OLED A1405VA KM095W / 12550', 'Laptop ASUS Vivobook 14 OLED A1405VA KM095W / 12550', 'km095w_9e26278b10f642f18dd9855f30828c43_medium.png', 17390000, 91, 6, 6),
(724, 'Laptop Lenovo V15 G4 IRU 83A100FYVN', 'Laptop Lenovo V15 G4 IRU 83A100FYVN', 'ava1_6b4ba423955947d6a9db3e1b1b92ce74_medium.png', 14690000, 96, 1, 2),
(725, 'Laptop Avita PURA A+ AF14A3VNF56F Silver', 'Laptop Avita PURA A+ AF14A3VNF56F Silver', '4_2295693202614981b7c53bb2056fed47_medium.png', 9990000, 7, 9, 8),
(726, 'Laptop ASUS Vivobook S 16 OLED S5606MA MX051W', 'Laptop ASUS Vivobook S 16 OLED S5606MA MX051W', 's-vivobook-s-16-oled-s5606ma-mx051w_0_075da8498daf4093b32f27312f486e35_22c77e392c85463e9afcd214f581101f_medium.png', 27990000, 70, 6, 2),
(727, 'Laptop ASUS Vivobook S 14 OLED S5406MA PP136W', 'Laptop ASUS Vivobook S 14 OLED S5406MA PP136W', 's-vivobook-s-14-oled-s5406ma-pp136w_0_12e0e03b105e4bac9d0de1bb126d0d50_48f2afba9bcd45448c3d127900253d8c_medium.png', 24990000, 97, 10, 7),
(728, 'Laptop Dell Inspiron 15 N3530 I3U085W11BLU', 'Laptop Dell Inspiron 15 N3530 I3U085W11BLU', 'ava_450b62dbedc44663a3d7bf2bf0c735b3_medium.png', 11990000, 69, 11, 2),
(729, 'Laptop ASUS Zenbook 14 OLED UX3405MA PP588W', 'Laptop ASUS Zenbook 14 OLED UX3405MA PP588W', 'ux3405ma-pp588w_zenbook_ai_b097c88019d44a789e70d8fa49fc91ef_medium.jpg', 26990000, 52, 7, 5),
(730, 'Laptop ASUS Zenbook 14 OLED UX3405MA PP151W', 'Laptop ASUS Zenbook 14 OLED UX3405MA PP151W', 'ux3405ma-pp151w_zenbook_ai_f61c0a3d9e6b45879ccc0213653fc56b_medium.jpg', 26490000, 77, 5, 10),
(731, 'Laptop ASUS Zenbook Duo OLED UX8406MA PZ142W', 'Laptop ASUS Zenbook Duo OLED UX8406MA PZ142W', 'ux8406ma-pz142w_new_1_323777fbd2ea4f788f45c1165ed81427_medium.jpg', 54990000, 10, 6, 12),
(732, 'Laptop ASUS Zenbook Duo OLED UX8406MA PZ307W', 'Laptop ASUS Zenbook Duo OLED UX8406MA PZ307W', '7_27_a3f6dfa7a8854d958953ad81268880d2_medium.png', 45990000, 37, 12, 8),
(733, 'Laptop LG Gram 2023 14Z90R GAH53A5 / 11086', 'Laptop LG Gram 2023 14Z90R GAH53A5 / 11086', 'lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png', 23890000, 41, 6, 9),
(734, 'Laptop ASUS Vivobook 14 OLED A1405ZA KM264W', 'Laptop ASUS Vivobook 14 OLED A1405ZA KM264W', 'vobook_14_oled_x1405v_m1405y_cool_silver_black_keyboard_13_fingerprint_6701c548b729416d90498bdac33dec13_medium.png', 15990000, 12, 3, 4),
(735, 'Laptop Lenovo IdeaPad Slim 5 14IMH9 83DA0020VN', 'Laptop Lenovo IdeaPad Slim 5 14IMH9 83DA0020VN', 'ava_dd039a51e92146d5977d980f7d205e9d_medium.png', 26490000, 5, 9, 14),
(736, 'Laptop Lenovo V14 G4 IRU 83A000BHVN', 'Laptop Lenovo V14 G4 IRU 83A000BHVN', 'ava_6809afe39f3141cf9497e2465cbf4d36_medium.png', 13790000, 93, 8, 10),
(737, 'Laptop Lenovo V14 G4 IRU 83A0000TVN', 'Laptop Lenovo V14 G4 IRU 83A0000TVN', 'ava_9ebb0708a1834156941f6fb60da838c4_medium.png', 10490000, 80, 10, 4),
(738, 'Laptop ASUS Vivobook 14 OLED A1405VA KM095W / 12550', 'Laptop ASUS Vivobook 14 OLED A1405VA KM095W / 12550', 'km095w_9e26278b10f642f18dd9855f30828c43_medium.png', 17390000, 62, 12, 1),
(739, 'Laptop Lenovo V15 G4 IRU 83A100FYVN', 'Laptop Lenovo V15 G4 IRU 83A100FYVN', 'ava1_6b4ba423955947d6a9db3e1b1b92ce74_medium.png', 14690000, 92, 2, 10),
(740, 'Laptop Avita PURA A+ AF14A3VNF56F Silver', 'Laptop Avita PURA A+ AF14A3VNF56F Silver', '4_2295693202614981b7c53bb2056fed47_medium.png', 9990000, 92, 3, 13),
(741, 'Laptop ASUS Vivobook S 16 OLED S5606MA MX051W', 'Laptop ASUS Vivobook S 16 OLED S5606MA MX051W', 's-vivobook-s-16-oled-s5606ma-mx051w_0_075da8498daf4093b32f27312f486e35_22c77e392c85463e9afcd214f581101f_medium.png', 27990000, 43, 6, 13),
(742, 'Laptop ASUS Vivobook S 14 OLED S5406MA PP136W', 'Laptop ASUS Vivobook S 14 OLED S5406MA PP136W', 's-vivobook-s-14-oled-s5406ma-pp136w_0_12e0e03b105e4bac9d0de1bb126d0d50_48f2afba9bcd45448c3d127900253d8c_medium.png', 24990000, 48, 12, 4),
(743, 'Laptop Dell Inspiron 15 N3530 I3U085W11BLU', 'Laptop Dell Inspiron 15 N3530 I3U085W11BLU', 'ava_450b62dbedc44663a3d7bf2bf0c735b3_medium.png', 11990000, 45, 8, 10),
(744, 'Laptop ASUS Zenbook 14 OLED UX3405MA PP588W', 'Laptop ASUS Zenbook 14 OLED UX3405MA PP588W', 'ux3405ma-pp588w_zenbook_ai_b097c88019d44a789e70d8fa49fc91ef_medium.jpg', 26990000, 53, 12, 10),
(745, 'Laptop ASUS Zenbook 14 OLED UX3405MA PP151W', 'Laptop ASUS Zenbook 14 OLED UX3405MA PP151W', 'ux3405ma-pp151w_zenbook_ai_f61c0a3d9e6b45879ccc0213653fc56b_medium.jpg', 26490000, 62, 5, 11),
(746, 'Laptop ASUS Zenbook Duo OLED UX8406MA PZ142W', 'Laptop ASUS Zenbook Duo OLED UX8406MA PZ142W', 'ux8406ma-pz142w_new_1_323777fbd2ea4f788f45c1165ed81427_medium.jpg', 54990000, 62, 10, 14),
(747, 'Laptop ASUS Zenbook Duo OLED UX8406MA PZ307W', 'Laptop ASUS Zenbook Duo OLED UX8406MA PZ307W', '7_27_a3f6dfa7a8854d958953ad81268880d2_medium.png', 45990000, 6, 2, 1),
(748, 'Laptop LG Gram 2023 14Z90R GAH53A5 / 11086', 'Laptop LG Gram 2023 14Z90R GAH53A5 / 11086', 'lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png', 23890000, 27, 13, 6),
(749, 'Chuột Logitech G Pro 2 Lightspeed Wireless Black', 'Chuột Logitech G Pro 2 Lightspeed Wireless Black', 'pro2-lightspeed-black-new-galler_84b2343575d14402814bbcf5389c1f24_medium.png', 2690000, 14, 2, 4),
(750, 'Chuột Logitech G Pro 2 Lightspeed Wireless White', 'Chuột Logitech G Pro 2 Lightspeed Wireless White', 'pro2-lightspeed-white-gallery1_a41f9f8af44c4758922011fa73633c7a_medium.png', 2690000, 41, 7, 1),
(751, 'Chuột Logitech G309 Lightspeed Wireless Bluetooth Đen', 'Chuột Logitech G309 Lightspeed Wireless Bluetooth Đen', 'black_b406079deeae46858542c5af8f18771b_medium.png', 1690000, 9, 3, 10),
(752, 'Chuột Logitech G309 Lightspeed Wireless Bluetooth Trắng', 'Chuột Logitech G309 Lightspeed Wireless Bluetooth Trắng', 'white_e563efbdda644fe59e2227176c1607fd_medium.png', 1690000, 45, 7, 12),
(753, 'Chuột Rapoo MT760 Mini Không Dây Hồng', 'Chuột Rapoo MT760 Mini Không Dây Hồng', '5277-vt760-mini-pink-1_6cbfa95e694e446b926f6a05859e19d9_medium.jpg', 790000, 63, 12, 1),
(754, 'Chuột không dây MonsGeek D1 Black', 'Chuột không dây MonsGeek D1 Black', 'chuot-khong-day-monsgeek-d1-blac_099847ad9748479fbe2e919816a150f5_medium.png', 150000, 15, 13, 13),
(755, 'Chuột AKKO Smart 1 Sailor Moon', 'Chuột AKKO Smart 1 Sailor Moon', 'chuot-khong-day-akko-smart1-sail__3__70a4fec24bee4a52bedb17e13f8c8cbc_medium.png', 369000, 63, 11, 11),
(756, 'Chuột Logitech G102 LightSync Black / 4985', 'Chuột Logitech G102 LightSync Black / 4985', 'logitech-g102-lightsync-rgb-black-1_bf4f5774229c4a0f81b8e8a2feebe4d8_aeb4ae49ee844c3e9d315883d4e482d4_medium.jpg', 400000, 37, 12, 3),
(757, 'Chuột Logitech G102 LightSync White / 4986', 'Chuột Logitech G102 LightSync White / 4986', 'logitech-g102-lightsync-rgb-white-1_eb113ff7e83b4289812fb9bff7034b4d_581b766edc6e402e995fd81477456742_medium.jpg', 420000, 75, 3, 9),
(758, 'Chuột Logitech G502 Hero Gaming / 471', 'Chuột Logitech G502 Hero Gaming / 471', 'chuot_logitech_g502_hero_gaming_-_24_cbcd9aa3cd9e45e496d5f91680495e60_medium.png', 950000, 48, 4, 7),
(759, 'Chuột Logitech G304 Wireless White / 5661', 'Chuột Logitech G304 Wireless White / 5661', 'h-g304-lightspeed-wireless-white-1000_e28318985b5049099c4e8381695e810f_782b9a4494994a2ea98cf9e699e35200_medium.jpg', 735000, 60, 1, 6),
(760, 'Chuột Logitech G304 Wireless / 2509', 'Chuột Logitech G304 Wireless / 2509', 'gvn_log_g304_3df28cd60a48412b8fb1d2ff762dc6a9_1f12340f2e6b4b8892163de0a06676f2_medium.png', 735000, 47, 3, 8),
(761, 'Chuột Razer Basilisk V3 / 9382', 'Chuột Razer Basilisk V3 / 9382', 'rtehosjd_7cf8331e76c04cb59e02a8f763ae3bb8_medium.png', 990000, 18, 1, 6),
(762, 'Chuột Razer DeathAdder Essential (RZ01-03850100-R3M1) / 500', 'Chuột Razer DeathAdder Essential (RZ01-03850100-R3M1) / 500', 'thumbchuot_7445abea69bf461e881eeba2b6cbbd8d_medium.jpg', 450000, 80, 7, 4),
(763, 'Chuột Razer Deathadder Essential White / 8044', 'Chuột Razer Deathadder Essential White / 8044', '565656_22914bb589c146e599cb381f2c75b557_e6b08a36816248339bcf29ca71560fcb_medium.png', 450000, 82, 13, 7),
(764, 'Chuột Logitech G Pro 2 Lightspeed Wireless Black', 'Chuột Logitech G Pro 2 Lightspeed Wireless Black', 'pro2-lightspeed-black-new-galler_84b2343575d14402814bbcf5389c1f24_medium.png', 2690000, 10, 5, 1),
(765, 'Chuột Logitech G Pro 2 Lightspeed Wireless White', 'Chuột Logitech G Pro 2 Lightspeed Wireless White', 'pro2-lightspeed-white-gallery1_a41f9f8af44c4758922011fa73633c7a_medium.png', 2690000, 72, 10, 8),
(766, 'Chuột Logitech G309 Lightspeed Wireless Bluetooth Đen', 'Chuột Logitech G309 Lightspeed Wireless Bluetooth Đen', 'black_b406079deeae46858542c5af8f18771b_medium.png', 1690000, 41, 2, 8),
(767, 'Chuột Logitech G309 Lightspeed Wireless Bluetooth Trắng', 'Chuột Logitech G309 Lightspeed Wireless Bluetooth Trắng', 'white_e563efbdda644fe59e2227176c1607fd_medium.png', 1690000, 61, 12, 4),
(768, 'Chuột Rapoo MT760 Mini Không Dây Hồng', 'Chuột Rapoo MT760 Mini Không Dây Hồng', '5277-vt760-mini-pink-1_6cbfa95e694e446b926f6a05859e19d9_medium.jpg', 790000, 43, 11, 13),
(769, 'Chuột không dây MonsGeek D1 Black', 'Chuột không dây MonsGeek D1 Black', 'chuot-khong-day-monsgeek-d1-blac_099847ad9748479fbe2e919816a150f5_medium.png', 150000, 73, 10, 10),
(770, 'Chuột AKKO Smart 1 Sailor Moon', 'Chuột AKKO Smart 1 Sailor Moon', 'chuot-khong-day-akko-smart1-sail__3__70a4fec24bee4a52bedb17e13f8c8cbc_medium.png', 369000, 44, 3, 1),
(771, 'Chuột Logitech G102 LightSync Black / 4985', 'Chuột Logitech G102 LightSync Black / 4985', 'logitech-g102-lightsync-rgb-black-1_bf4f5774229c4a0f81b8e8a2feebe4d8_aeb4ae49ee844c3e9d315883d4e482d4_medium.jpg', 400000, 46, 4, 8),
(772, 'Chuột Logitech G102 LightSync White / 4986', 'Chuột Logitech G102 LightSync White / 4986', 'logitech-g102-lightsync-rgb-white-1_eb113ff7e83b4289812fb9bff7034b4d_581b766edc6e402e995fd81477456742_medium.jpg', 420000, 15, 9, 7),
(773, 'Chuột Logitech G502 Hero Gaming / 471', 'Chuột Logitech G502 Hero Gaming / 471', 'chuot_logitech_g502_hero_gaming_-_24_cbcd9aa3cd9e45e496d5f91680495e60_medium.png', 950000, 3, 8, 3),
(774, 'Chuột Logitech G304 Wireless White / 5661', 'Chuột Logitech G304 Wireless White / 5661', 'h-g304-lightspeed-wireless-white-1000_e28318985b5049099c4e8381695e810f_782b9a4494994a2ea98cf9e699e35200_medium.jpg', 735000, 21, 6, 13),
(775, 'Chuột Logitech G304 Wireless / 2509', 'Chuột Logitech G304 Wireless / 2509', 'gvn_log_g304_3df28cd60a48412b8fb1d2ff762dc6a9_1f12340f2e6b4b8892163de0a06676f2_medium.png', 735000, 67, 5, 2),
(776, 'Chuột Razer Basilisk V3 / 9382', 'Chuột Razer Basilisk V3 / 9382', 'rtehosjd_7cf8331e76c04cb59e02a8f763ae3bb8_medium.png', 990000, 13, 9, 14),
(777, 'Chuột Razer DeathAdder Essential (RZ01-03850100-R3M1) / 500', 'Chuột Razer DeathAdder Essential (RZ01-03850100-R3M1) / 500', 'thumbchuot_7445abea69bf461e881eeba2b6cbbd8d_medium.jpg', 450000, 94, 9, 2),
(778, 'Chuột Razer Deathadder Essential White / 8044', 'Chuột Razer Deathadder Essential White / 8044', '565656_22914bb589c146e599cb381f2c75b557_e6b08a36816248339bcf29ca71560fcb_medium.png', 450000, 63, 1, 8),
(779, 'Chuột Logitech G Pro 2 Lightspeed Wireless Black', 'Chuột Logitech G Pro 2 Lightspeed Wireless Black', 'pro2-lightspeed-black-new-galler_84b2343575d14402814bbcf5389c1f24_medium.png', 2690000, 50, 1, 8),
(780, 'Chuột Logitech G Pro 2 Lightspeed Wireless White', 'Chuột Logitech G Pro 2 Lightspeed Wireless White', 'pro2-lightspeed-white-gallery1_a41f9f8af44c4758922011fa73633c7a_medium.png', 2690000, 5, 7, 13),
(781, 'Chuột Logitech G309 Lightspeed Wireless Bluetooth Đen', 'Chuột Logitech G309 Lightspeed Wireless Bluetooth Đen', 'black_b406079deeae46858542c5af8f18771b_medium.png', 1690000, 17, 11, 12),
(782, 'Chuột Logitech G309 Lightspeed Wireless Bluetooth Trắng', 'Chuột Logitech G309 Lightspeed Wireless Bluetooth Trắng', 'white_e563efbdda644fe59e2227176c1607fd_medium.png', 1690000, 100, 8, 6),
(783, 'Chuột Rapoo MT760 Mini Không Dây Hồng', 'Chuột Rapoo MT760 Mini Không Dây Hồng', '5277-vt760-mini-pink-1_6cbfa95e694e446b926f6a05859e19d9_medium.jpg', 790000, 3, 9, 3),
(784, 'Bàn phím cơ E-Dra EK375 Beta Blue Switch', 'Bàn phím cơ E-Dra EK375 Beta Blue Switch', '487_375b2_7fdd5bff1c43410093eb5c7866cfa974_large_c15828a2cf614387b2fa771ee392b424_medium.jpg', 499000, 70, 10, 4),
(785, 'Bàn phím E-Dra EK3104L Beta Blue Switch', 'Bàn phím E-Dra EK3104L Beta Blue Switch', '481_b1_6a2ccfc523b04387bef87ff9f115e8f5_medium.jpg', 559000, 97, 6, 9),
(786, 'Bàn phím DareU EK104 Rainbow White Black Dream Switch', 'Bàn phím DareU EK104 Rainbow White Black Dream Switch', 'cf0c482a49a666d454a27767ac16a77_444986ba0fd84f01bcd134509d566ebb_medium.png', 790000, 8, 4, 3),
(787, 'Bàn phím cơ DareU EK75 Rapid Trigger Black', 'Bàn phím cơ DareU EK75 Rapid Trigger Black', 'black__5__37a0f1f91dcb4e5f8ac4bf6ee482f62a_medium.png', 1790000, 28, 2, 1),
(788, 'Bàn phím cơ E-Dra không dây EK375 Pro Beta Blue Switch', 'Bàn phím cơ E-Dra không dây EK375 Pro Beta Blue Switch', 'gearvn-ban-phim-co-e-dra-khong-day-ek375-pro-beta-blue-switch-1_92f60a7401c344239c3f6788609a0d82_medium.png', 990000, 8, 3, 7),
(789, 'Bàn phím cơ DareU EK75 White Black DareU Dream switch (keycap PBT)', 'Bàn phím cơ DareU EK75 White Black DareU Dream switch (keycap PBT)', '38563bd2d5c0a8a07d4928bfda5fcc64_9a6548b16b15444288e21844f969b589_medium.png', 590000, 27, 4, 8),
(790, 'Bàn phím cơ DareU EK65s White Black PBT Dream Switch', 'Bàn phím cơ DareU EK65s White Black PBT Dream Switch', 'ek65s__1__fc88e487086b434bb1e00f_ae5f290b5c754084afd20ded50db0397_medium.png', 799000, 61, 2, 7),
(791, 'Bàn phím cơ DareU EK75 Full White Firefly switch', 'Bàn phím cơ DareU EK75 Full White Firefly switch', '47488_dareu_ek75_white__6__6d19968870264154b3dc98905e329f1a_medium.jpg', 610000, 66, 9, 5),
(792, 'Bàn phím cơ AKKO 5075B Plus Transparent ASA Black Piano Pro', 'Bàn phím cơ AKKO 5075B Plus Transparent ASA Black Piano Pro', '_____20240816153223_c42865bb150b497193dbfa2fa870796e_medium.png', 1790000, 84, 9, 8),
(793, 'Bàn phím cơ E-Dra EK375 Alpha Blue Switch', 'Bàn phím cơ E-Dra EK375 Alpha Blue Switch', '486_375a3_07d49b25229c41cab582d583c6962096_large_32983d8a416a4b08b4e41c90a61aa4e0_medium.jpg', 499000, 93, 11, 13),
(794, 'Bàn phím Razer Blackwidow V3 Mini HyperSpeed Green Switch / 8042', 'Bàn phím Razer Blackwidow V3 Mini HyperSpeed Green Switch / 8042', 'm-razer-blackwidow-v3-mini-hyperspeed_7a9ece3408f142cb9d95b100ff845eda_6cac2ff3ce9249119877ff30108c75cc_medium.png', 2190000, 40, 3, 11),
(795, 'Bàn phím cơ DareU EK75 Pro Triple Mode Black Golden Dream switch', 'Bàn phím cơ DareU EK75 Pro Triple Mode Black Golden Dream switch', '1_f38fc7f539aa4fd8ac9abb376d2781f2_medium.jpg', 1090000, 89, 9, 6),
(796, 'Bàn phím DareU Không dây EK98 Pro RGB Đen Dream Switch', 'Bàn phím DareU Không dây EK98 Pro RGB Đen Dream Switch', 'ek98_pro_black-golden__2__2a64b4ee39cb4706a7d27c88abb4be2e_medium.png', 1290000, 14, 5, 8),
(797, 'Bàn phím cơ E-Dra EK375 Alpha Red Switch', 'Bàn phím cơ E-Dra EK375 Alpha Red Switch', '486_375a3_07d49b25229c41cab582d583c6962096_medium.jpg', 499000, 95, 11, 14),
(798, 'Bàn phím Bluetooth Rapoo Ralemo Pre 5 RA Trắng', 'Bàn phím Bluetooth Rapoo Ralemo Pre 5 RA Trắng', 'gearvn-ban-phim-bluetooth-rapoo-ralemo-pre-5-ra-trang-1_47d5b7c1cb4b48d6a63833a9cd76330a_medium.png', 650000, 61, 10, 2),
(799, 'Bàn phím cơ E-Dra EK375 Beta Blue Switch', 'Bàn phím cơ E-Dra EK375 Beta Blue Switch', '487_375b2_7fdd5bff1c43410093eb5c7866cfa974_large_c15828a2cf614387b2fa771ee392b424_medium.jpg', 499000, 69, 13, 4),
(800, 'Bàn phím E-Dra EK3104L Beta Blue Switch', 'Bàn phím E-Dra EK3104L Beta Blue Switch', '481_b1_6a2ccfc523b04387bef87ff9f115e8f5_medium.jpg', 559000, 41, 10, 2),
(801, 'Bàn phím DareU EK104 Rainbow White Black Dream Switch', 'Bàn phím DareU EK104 Rainbow White Black Dream Switch', 'cf0c482a49a666d454a27767ac16a77_444986ba0fd84f01bcd134509d566ebb_medium.png', 790000, 52, 3, 8),
(802, 'Bàn phím cơ DareU EK75 Rapid Trigger Black', 'Bàn phím cơ DareU EK75 Rapid Trigger Black', 'black__5__37a0f1f91dcb4e5f8ac4bf6ee482f62a_medium.png', 1790000, 59, 1, 10),
(803, 'Bàn phím cơ E-Dra không dây EK375 Pro Beta Blue Switch', 'Bàn phím cơ E-Dra không dây EK375 Pro Beta Blue Switch', 'gearvn-ban-phim-co-e-dra-khong-day-ek375-pro-beta-blue-switch-1_92f60a7401c344239c3f6788609a0d82_medium.png', 990000, 81, 5, 9),
(804, 'Bàn phím cơ DareU EK75 White Black DareU Dream switch (keycap PBT)', 'Bàn phím cơ DareU EK75 White Black DareU Dream switch (keycap PBT)', '38563bd2d5c0a8a07d4928bfda5fcc64_9a6548b16b15444288e21844f969b589_medium.png', 590000, 55, 2, 12),
(805, 'Bàn phím cơ DareU EK65s White Black PBT Dream Switch', 'Bàn phím cơ DareU EK65s White Black PBT Dream Switch', 'ek65s__1__fc88e487086b434bb1e00f_ae5f290b5c754084afd20ded50db0397_medium.png', 799000, 85, 7, 10),
(806, 'Bàn phím cơ DareU EK75 Full White Firefly switch', 'Bàn phím cơ DareU EK75 Full White Firefly switch', '47488_dareu_ek75_white__6__6d19968870264154b3dc98905e329f1a_medium.jpg', 610000, 1, 12, 14),
(807, 'Bàn phím cơ AKKO 5075B Plus Transparent ASA Black Piano Pro', 'Bàn phím cơ AKKO 5075B Plus Transparent ASA Black Piano Pro', '_____20240816153223_c42865bb150b497193dbfa2fa870796e_medium.png', 1790000, 46, 13, 3),
(808, 'Bàn phím cơ E-Dra EK375 Alpha Blue Switch', 'Bàn phím cơ E-Dra EK375 Alpha Blue Switch', '486_375a3_07d49b25229c41cab582d583c6962096_large_32983d8a416a4b08b4e41c90a61aa4e0_medium.jpg', 499000, 94, 10, 14),
(809, 'Bàn phím Razer Blackwidow V3 Mini HyperSpeed Green Switch / 8042', 'Bàn phím Razer Blackwidow V3 Mini HyperSpeed Green Switch / 8042', 'm-razer-blackwidow-v3-mini-hyperspeed_7a9ece3408f142cb9d95b100ff845eda_6cac2ff3ce9249119877ff30108c75cc_medium.png', 2190000, 11, 2, 4),
(810, 'Bàn phím cơ DareU EK75 Pro Triple Mode Black Golden Dream switch', 'Bàn phím cơ DareU EK75 Pro Triple Mode Black Golden Dream switch', '1_f38fc7f539aa4fd8ac9abb376d2781f2_medium.jpg', 1090000, 48, 1, 4),
(811, 'Bàn phím DareU Không dây EK98 Pro RGB Đen Dream Switch', 'Bàn phím DareU Không dây EK98 Pro RGB Đen Dream Switch', 'ek98_pro_black-golden__2__2a64b4ee39cb4706a7d27c88abb4be2e_medium.png', 1290000, 64, 9, 14),
(812, 'Bàn phím cơ E-Dra EK375 Alpha Red Switch', 'Bàn phím cơ E-Dra EK375 Alpha Red Switch', '486_375a3_07d49b25229c41cab582d583c6962096_medium.jpg', 499000, 9, 2, 4),
(813, 'Bàn phím Bluetooth Rapoo Ralemo Pre 5 RA Trắng', 'Bàn phím Bluetooth Rapoo Ralemo Pre 5 RA Trắng', 'gearvn-ban-phim-bluetooth-rapoo-ralemo-pre-5-ra-trang-1_47d5b7c1cb4b48d6a63833a9cd76330a_medium.png', 650000, 43, 7, 2),
(814, 'Bàn phím cơ E-Dra EK375 Beta Blue Switch', 'Bàn phím cơ E-Dra EK375 Beta Blue Switch', '487_375b2_7fdd5bff1c43410093eb5c7866cfa974_large_c15828a2cf614387b2fa771ee392b424_medium.jpg', 499000, 37, 7, 13),
(815, 'Bàn phím E-Dra EK3104L Beta Blue Switch', 'Bàn phím E-Dra EK3104L Beta Blue Switch', '481_b1_6a2ccfc523b04387bef87ff9f115e8f5_medium.jpg', 559000, 13, 2, 2),
(816, 'Bàn phím DareU EK104 Rainbow White Black Dream Switch', 'Bàn phím DareU EK104 Rainbow White Black Dream Switch', 'cf0c482a49a666d454a27767ac16a77_444986ba0fd84f01bcd134509d566ebb_medium.png', 790000, 57, 4, 8),
(817, 'Bàn phím cơ DareU EK75 Rapid Trigger Black', 'Bàn phím cơ DareU EK75 Rapid Trigger Black', 'black__5__37a0f1f91dcb4e5f8ac4bf6ee482f62a_medium.png', 1790000, 53, 5, 2),
(818, 'Bàn phím cơ E-Dra không dây EK375 Pro Beta Blue Switch', 'Bàn phím cơ E-Dra không dây EK375 Pro Beta Blue Switch', 'gearvn-ban-phim-co-e-dra-khong-day-ek375-pro-beta-blue-switch-1_92f60a7401c344239c3f6788609a0d82_medium.png', 990000, 89, 3, 5),
(819, 'Màn hình cong ViewSonic VX2718-PC-MHD 27inch  180Hz chuyên game', 'Màn hình cong ViewSonic VX2718-PC-MHD 27inch  180Hz chuyên game', 'view_vx2718-pc-mhd_180hz_gearvn_4db7f95a48a94eb3964de121f5a42f07_medium.jpg', 3590000, 99, 7, 12),
(820, 'Màn hình Acer EK251Q E 25inch  IPS 100Hz', 'Màn hình Acer EK251Q E 25inch  IPS 100Hz', 'acer_ek251q_e_gearvn_97fb05f7744340fba74d09f1dcb2bb0d_medium.jpg', 2190000, 78, 11, 11),
(821, 'Màn hình AOC Q24G4E 24inch  IPS 2K 180Hz G-Sync chuyên game', 'Màn hình AOC Q24G4E 24inch  IPS 2K 180Hz G-Sync chuyên game', 'aoc_q24g4e_gearvn_bca5674c9f454f899e688ecc883111cc_medium.jpg', 4790000, 38, 10, 4),
(822, 'Màn hình Asus TUF GAMING VG259Q3A 25inch  Fast IPS 180Hz Gsync chuyên game', 'Màn hình Asus TUF GAMING VG259Q3A 25inch  Fast IPS 180Hz Gsync chuyên game', 'asus_vg259q3a_gearvn_e76558abb18946d7b7d51dd16d915d89_medium.jpg', 3390000, 35, 13, 10),
(823, 'Màn hình Asus TUF GAMING VG249Q3A 24inch  Fast IPS 180Hz Gsync chuyên game', 'Màn hình Asus TUF GAMING VG249Q3A 24inch  Fast IPS 180Hz Gsync chuyên game', 'download.png_1eb1cdf82aea4fcf9344d6652dcb071d_medium.jpg', 3190000, 45, 6, 5),
(824, 'Màn hình ASUS VZ24EHF 24inch  IPS 100Hz viền mỏng', 'Màn hình ASUS VZ24EHF 24inch  IPS 100Hz viền mỏng', 'image-removebg-preview__42_.png_6f75c144031d457382871204a2ea32f7_medium.jpg', 2390000, 63, 5, 11),
(825, 'Màn hình Philips 27M2N3200S 27inch  IPS 180Hz chuyên game', 'Màn hình Philips 27M2N3200S 27inch  IPS 180Hz chuyên game', 'philips_27m2n3200s_gearvn_31613a62a7c94e939a05feaca01c4c2a_medium.jpg', 3590000, 23, 13, 8),
(826, 'Màn hình ViewSonic VX2428J 24inch  Fast IPS 180Hz Gsync chuyên game / 9851', 'Màn hình ViewSonic VX2428J 24inch  Fast IPS 180Hz Gsync chuyên game / 9851', 'viewsonic_vx2428j_gearvn_60f31c4113114072b56e421577507e06_53fe3e1fa38d4845b222cb2d8497787f_medium.jpg', 3190000, 55, 2, 3),
(827, 'Màn hình Dahua DHI-LM25-E231 25inch  IPS 180Hz chuyên game', 'Màn hình Dahua DHI-LM25-E231 25inch  IPS 180Hz chuyên game', 'thit-k-cha-c-tn-_4__d80b68c7123a41b89bf213ffadb4d43f_medium.png', 2590000, 72, 5, 8),
(828, 'Màn hình Viewsonic VA2432-H 24inch  IPS 100Hz viền mỏng', 'Màn hình Viewsonic VA2432-H 24inch  IPS 100Hz viền mỏng', '1_6bf24e36cbd34fd990728781a18e1653_befa433a45b84594bf6aa5a5c8526365_medium.jpg', 2190000, 94, 9, 13),
(829, 'Màn hình Philips 27M2N3200L 27inch  IPS 180Hz chuyên game', 'Màn hình Philips 27M2N3200L 27inch  IPS 180Hz chuyên game', 'philips_27m2n3200l_gearvn_3be3acb3421e44938a76dbc96023931f_medium.jpg', 3590000, 100, 8, 13),
(830, 'Màn hình Philips 27E2N1500 27inch  IPS 2K 120Hz', 'Màn hình Philips 27E2N1500 27inch  IPS 2K 120Hz', 'philips_27e2n1500_gearvn_c7c7fb4b2f904b34acd27124488fe79f_medium.jpg', 3790000, 8, 1, 1),
(831, 'Màn hình LG 24GS65F-B 24inch  IPS 180Hz HDR10 Gsync chuyên game', 'Màn hình LG 24GS65F-B 24inch  IPS 180Hz HDR10 Gsync chuyên game', 'lg_24gs65f-b_gearvn_af476af1e4514a2684591304b3e4164a_medium.jpg', 3790000, 89, 12, 6),
(832, 'Màn hình E-DRA EGM27Q100PR 27inch  IPS 2K 100Hz', 'Màn hình E-DRA EGM27Q100PR 27inch  IPS 2K 100Hz', 'edra_egm27q100pr_gearvn_ba4ed7ab2b64434196211ab978e60b21_medium.jpg', 3690000, 85, 12, 5),
(833, 'Màn hình E-DRA EGM25F100P 25inch  IPS 100Hz', 'Màn hình E-DRA EGM25F100P 25inch  IPS 100Hz', 'edra_egm25f100p_gearvn_23f3666fc85b40e382d46868c345e213_medium.jpg', 2090000, 100, 4, 7),
(834, 'Màn hình E-DRA EGM24F100H 24inch  IPS 100Hz', 'Màn hình E-DRA EGM24F100H 24inch  IPS 100Hz', 'edra_egm24f100h_gearvn_2c67262ed2cc428f9f76f9dab6c6b242_medium.jpg', 1890000, 66, 4, 11),
(835, 'Màn hình MSI G244F E2 24inch  Rapid IPS 180Hz chuyên game', 'Màn hình MSI G244F E2 24inch  Rapid IPS 180Hz chuyên game', 'msi_g244f_e2_gearvn_784763b88e6246269adfc568b49e46e3_medium.jpg', 2990000, 10, 2, 6),
(836, 'Màn hình Dahua DHI-LM24-A200Y 24inch  100Hz', 'Màn hình Dahua DHI-LM24-A200Y 24inch  100Hz', 'dahua_gearvn_78eaee7ab3fd4fb89aa7796875352b88_medium.jpg', 1690000, 30, 13, 3),
(837, 'Màn hình Dahua DHI-LM22-A200Y 22inch  100Hz', 'Màn hình Dahua DHI-LM22-A200Y 22inch  100Hz', 'dahua_gearvn_ebe5fd31da6c4464a86151d158d6a12c_medium.jpg', 1490000, 75, 3, 13),
(838, 'Màn hình GIGABYTE GS27FA 27inch  IPS 180Hz chuyên game', 'Màn hình GIGABYTE GS27FA 27inch  IPS 180Hz chuyên game', 'giga_gs27fa_gearvn_0adabc0d220849fb9373808fdfe829ee_medium.jpg', 4190000, 73, 10, 1),
(839, 'Màn hình LG 27GS60F-B 27inch  IPS 180Hz HDR10 Gsync chuyên game', 'Màn hình LG 27GS60F-B 27inch  IPS 180Hz HDR10 Gsync chuyên game', 'lg_27gs60f-b_gearvn_fc98facddb5146fabc863841159e7011_medium.jpg', 4390000, 10, 13, 10),
(840, 'Màn hình Acer VG271U M3 27inch  IPS 2K 180Hz chuyên game', 'Màn hình Acer VG271U M3 27inch  IPS 2K 180Hz chuyên game', 'acer_vg271u_m3_gearvn_9a36f6ad9acb457594121de26949c60b_medium.jpg', 4990000, 90, 4, 12),
(841, 'Màn hình ASUS VY249HF-R 24inch  IPS 100Hz viền mỏng', 'Màn hình ASUS VY249HF-R 24inch  IPS 100Hz viền mỏng', 'asus_vy249hf-r_gearvn_31257400a38d40de989279ff66d96411_medium.jpg', 2290000, 38, 12, 5),
(842, 'Màn hình LG 25MS550-B 25inch  IPS 100Hz', 'Màn hình LG 25MS550-B 25inch  IPS 100Hz', 'lg_25ms550-b_gearvn_69374b8d96b44d989226664d832a1b12_medium.jpg', 2990000, 91, 11, 12),
(843, 'Màn hình LG 25MS500-B 25inch  IPS 100Hz', 'Màn hình LG 25MS500-B 25inch  IPS 100Hz', 'lg_25ms500-b_gearvn_043cbd32a958473b86949bdbfcbf5328_medium.jpg', 2490000, 44, 1, 13),
(844, 'Màn hình E-DRA EGM24F100P 24inch  IPS 100Hz', 'Màn hình E-DRA EGM24F100P 24inch  IPS 100Hz', 'gearvn-man-hinh-e-dra-egm24f100p-24-ips-100hz-1_9ee21b1a3f404807b7b9d2c923cc9679_medium.png', 1990000, 32, 2, 8),
(845, 'Màn hình AOC 27B36H 27inch  IPS 100Hz', 'Màn hình AOC 27B36H 27inch  IPS 100Hz', 'aoc_24b36h_gearvn_63daccdd7064460fb9e2c90f3b95c91d_medium.jpg', 2590000, 51, 12, 13),
(846, 'Màn hình AOC 24B36H 24inch  IPS 100Hz', 'Màn hình AOC 24B36H 24inch  IPS 100Hz', 'aoc_24b36h_gearvn_b7860b8dffeb438eacacc4f7f129ee82_medium.jpg', 2090000, 82, 3, 13),
(847, 'Màn hình MSI PRO MP251 E2 25inch  IPS 120Hz', 'Màn hình MSI PRO MP251 E2 25inch  IPS 120Hz', 'msi_mp251_e2_gearvn_a7b529f73a96430ab1079fab4ea58502_medium.jpg', 2490000, 93, 6, 9),
(848, 'Màn hình MSI PRO MP252 25inch  IPS 100Hz', 'Màn hình MSI PRO MP252 25inch  IPS 100Hz', 'msi_mp252_gearvn_75e6ff37eb364e1190df968762e987a0_medium.jpg', 2190000, 71, 10, 3),
(849, 'Màn hình cong ViewSonic VX2718-PC-MHD 27inch  180Hz chuyên game', 'Màn hình cong ViewSonic VX2718-PC-MHD 27inch  180Hz chuyên game', 'view_vx2718-pc-mhd_180hz_gearvn_4db7f95a48a94eb3964de121f5a42f07_medium.jpg', 3590000, 99, 4, 5),
(850, 'Màn hình Acer EK251Q E 25inch  IPS 100Hz', 'Màn hình Acer EK251Q E 25inch  IPS 100Hz', 'acer_ek251q_e_gearvn_97fb05f7744340fba74d09f1dcb2bb0d_medium.jpg', 2190000, 71, 8, 14),
(851, 'Màn hình AOC Q24G4E 24inch  IPS 2K 180Hz G-Sync chuyên game', 'Màn hình AOC Q24G4E 24inch  IPS 2K 180Hz G-Sync chuyên game', 'aoc_q24g4e_gearvn_bca5674c9f454f899e688ecc883111cc_medium.jpg', 4790000, 70, 9, 10),
(852, 'Màn hình Asus TUF GAMING VG259Q3A 25inch  Fast IPS 180Hz Gsync chuyên game', 'Màn hình Asus TUF GAMING VG259Q3A 25inch  Fast IPS 180Hz Gsync chuyên game', 'asus_vg259q3a_gearvn_e76558abb18946d7b7d51dd16d915d89_medium.jpg', 3390000, 32, 7, 4),
(853, 'Màn hình Asus TUF GAMING VG249Q3A 24inch  Fast IPS 180Hz Gsync chuyên game', 'Màn hình Asus TUF GAMING VG249Q3A 24inch  Fast IPS 180Hz Gsync chuyên game', 'download.png_1eb1cdf82aea4fcf9344d6652dcb071d_medium.jpg', 3190000, 54, 3, 7),
(854, 'Màn hình ASUS VZ24EHF 24inch  IPS 100Hz viền mỏng', 'Màn hình ASUS VZ24EHF 24inch  IPS 100Hz viền mỏng', 'image-removebg-preview__42_.png_6f75c144031d457382871204a2ea32f7_medium.jpg', 2390000, 55, 2, 2),
(855, 'Màn hình Philips 27M2N3200S 27inch  IPS 180Hz chuyên game', 'Màn hình Philips 27M2N3200S 27inch  IPS 180Hz chuyên game', 'philips_27m2n3200s_gearvn_31613a62a7c94e939a05feaca01c4c2a_medium.jpg', 3590000, 7, 12, 14),
(856, 'Màn hình ViewSonic VX2428J 24inch  Fast IPS 180Hz Gsync chuyên game / 9851', 'Màn hình ViewSonic VX2428J 24inch  Fast IPS 180Hz Gsync chuyên game / 9851', 'viewsonic_vx2428j_gearvn_60f31c4113114072b56e421577507e06_53fe3e1fa38d4845b222cb2d8497787f_medium.jpg', 3190000, 81, 11, 4),
(857, 'Màn hình Dahua DHI-LM25-E231 25inch  IPS 180Hz chuyên game', 'Màn hình Dahua DHI-LM25-E231 25inch  IPS 180Hz chuyên game', 'thit-k-cha-c-tn-_4__d80b68c7123a41b89bf213ffadb4d43f_medium.png', 2590000, 77, 2, 13),
(858, 'Màn hình Viewsonic VA2432-H 24inch  IPS 100Hz viền mỏng', 'Màn hình Viewsonic VA2432-H 24inch  IPS 100Hz viền mỏng', '1_6bf24e36cbd34fd990728781a18e1653_befa433a45b84594bf6aa5a5c8526365_medium.jpg', 2190000, 22, 7, 6),
(859, 'Màn hình Philips 27M2N3200L 27inch  IPS 180Hz chuyên game', 'Màn hình Philips 27M2N3200L 27inch  IPS 180Hz chuyên game', 'philips_27m2n3200l_gearvn_3be3acb3421e44938a76dbc96023931f_medium.jpg', 3590000, 20, 4, 2),
(860, 'Màn hình Philips 27E2N1500 27inch  IPS 2K 120Hz', 'Màn hình Philips 27E2N1500 27inch  IPS 2K 120Hz', 'philips_27e2n1500_gearvn_c7c7fb4b2f904b34acd27124488fe79f_medium.jpg', 3790000, 5, 10, 11),
(861, 'Màn hình LG 24GS65F-B 24inch  IPS 180Hz HDR10 Gsync chuyên game', 'Màn hình LG 24GS65F-B 24inch  IPS 180Hz HDR10 Gsync chuyên game', 'lg_24gs65f-b_gearvn_af476af1e4514a2684591304b3e4164a_medium.jpg', 3790000, 59, 12, 10),
(862, 'Màn hình E-DRA EGM27Q100PR 27inch  IPS 2K 100Hz', 'Màn hình E-DRA EGM27Q100PR 27inch  IPS 2K 100Hz', 'edra_egm27q100pr_gearvn_ba4ed7ab2b64434196211ab978e60b21_medium.jpg', 3690000, 60, 4, 10),
(863, 'Màn hình E-DRA EGM25F100P 25inch  IPS 100Hz', 'Màn hình E-DRA EGM25F100P 25inch  IPS 100Hz', 'edra_egm25f100p_gearvn_23f3666fc85b40e382d46868c345e213_medium.jpg', 2090000, 5, 11, 1),
(864, 'Màn hình E-DRA EGM24F100H 24inch  IPS 100Hz', 'Màn hình E-DRA EGM24F100H 24inch  IPS 100Hz', 'edra_egm24f100h_gearvn_2c67262ed2cc428f9f76f9dab6c6b242_medium.jpg', 1890000, 71, 3, 12),
(865, 'Màn hình MSI G244F E2 24inch  Rapid IPS 180Hz chuyên game', 'Màn hình MSI G244F E2 24inch  Rapid IPS 180Hz chuyên game', 'msi_g244f_e2_gearvn_784763b88e6246269adfc568b49e46e3_medium.jpg', 2990000, 42, 6, 9),
(866, 'Màn hình Dahua DHI-LM24-A200Y 24inch  100Hz', 'Màn hình Dahua DHI-LM24-A200Y 24inch  100Hz', 'dahua_gearvn_78eaee7ab3fd4fb89aa7796875352b88_medium.jpg', 1690000, 25, 5, 14),
(867, 'Màn hình Dahua DHI-LM22-A200Y 22inch  100Hz', 'Màn hình Dahua DHI-LM22-A200Y 22inch  100Hz', 'dahua_gearvn_ebe5fd31da6c4464a86151d158d6a12c_medium.jpg', 1490000, 91, 4, 3),
(868, 'Màn hình GIGABYTE GS27FA 27inch  IPS 180Hz chuyên game', 'Màn hình GIGABYTE GS27FA 27inch  IPS 180Hz chuyên game', 'giga_gs27fa_gearvn_0adabc0d220849fb9373808fdfe829ee_medium.jpg', 4190000, 13, 6, 11),
(869, 'Màn hình LG 27GS60F-B 27inch  IPS 180Hz HDR10 Gsync chuyên game', 'Màn hình LG 27GS60F-B 27inch  IPS 180Hz HDR10 Gsync chuyên game', 'lg_27gs60f-b_gearvn_fc98facddb5146fabc863841159e7011_medium.jpg', 4390000, 45, 4, 8),
(870, 'Màn hình Acer VG271U M3 27inch  IPS 2K 180Hz chuyên game', 'Màn hình Acer VG271U M3 27inch  IPS 2K 180Hz chuyên game', 'acer_vg271u_m3_gearvn_9a36f6ad9acb457594121de26949c60b_medium.jpg', 4990000, 47, 10, 2),
(871, 'Màn hình ASUS VY249HF-R 24inch  IPS 100Hz viền mỏng', 'Màn hình ASUS VY249HF-R 24inch  IPS 100Hz viền mỏng', 'asus_vy249hf-r_gearvn_31257400a38d40de989279ff66d96411_medium.jpg', 2290000, 67, 10, 6),
(872, 'Màn hình LG 25MS550-B 25inch  IPS 100Hz', 'Màn hình LG 25MS550-B 25inch  IPS 100Hz', 'lg_25ms550-b_gearvn_69374b8d96b44d989226664d832a1b12_medium.jpg', 2990000, 54, 3, 6),
(873, 'Màn hình LG 25MS500-B 25inch  IPS 100Hz', 'Màn hình LG 25MS500-B 25inch  IPS 100Hz', 'lg_25ms500-b_gearvn_043cbd32a958473b86949bdbfcbf5328_medium.jpg', 2490000, 39, 6, 4),
(874, 'Màn hình E-DRA EGM24F100P 24inch  IPS 100Hz', 'Màn hình E-DRA EGM24F100P 24inch  IPS 100Hz', 'gearvn-man-hinh-e-dra-egm24f100p-24-ips-100hz-1_9ee21b1a3f404807b7b9d2c923cc9679_medium.png', 1990000, 100, 1, 11),
(875, 'Màn hình AOC 27B36H 27inch  IPS 100Hz', 'Màn hình AOC 27B36H 27inch  IPS 100Hz', 'aoc_24b36h_gearvn_63daccdd7064460fb9e2c90f3b95c91d_medium.jpg', 2590000, 19, 13, 11),
(876, 'Màn hình AOC 24B36H 24inch  IPS 100Hz', 'Màn hình AOC 24B36H 24inch  IPS 100Hz', 'aoc_24b36h_gearvn_b7860b8dffeb438eacacc4f7f129ee82_medium.jpg', 2090000, 31, 2, 3),
(877, 'Màn hình MSI PRO MP251 E2 25inch  IPS 120Hz', 'Màn hình MSI PRO MP251 E2 25inch  IPS 120Hz', 'msi_mp251_e2_gearvn_a7b529f73a96430ab1079fab4ea58502_medium.jpg', 2490000, 72, 11, 1),
(878, 'Màn hình MSI PRO MP252 25inch  IPS 100Hz', 'Màn hình MSI PRO MP252 25inch  IPS 100Hz', 'msi_mp252_gearvn_75e6ff37eb364e1190df968762e987a0_medium.jpg', 2190000, 98, 2, 11),
(879, 'Màn hình cong ViewSonic VX2718-PC-MHD 27inch  180Hz chuyên game', 'Màn hình cong ViewSonic VX2718-PC-MHD 27inch  180Hz chuyên game', 'view_vx2718-pc-mhd_180hz_gearvn_4db7f95a48a94eb3964de121f5a42f07_medium.jpg', 3590000, 14, 4, 7),
(880, 'Màn hình Acer EK251Q E 25inch  IPS 100Hz', 'Màn hình Acer EK251Q E 25inch  IPS 100Hz', 'acer_ek251q_e_gearvn_97fb05f7744340fba74d09f1dcb2bb0d_medium.jpg', 2190000, 72, 9, 1),
(881, 'Màn hình AOC Q24G4E 24inch  IPS 2K 180Hz G-Sync chuyên game', 'Màn hình AOC Q24G4E 24inch  IPS 2K 180Hz G-Sync chuyên game', 'aoc_q24g4e_gearvn_bca5674c9f454f899e688ecc883111cc_medium.jpg', 4790000, 40, 6, 3),
(882, 'Màn hình Asus TUF GAMING VG259Q3A 25inch  Fast IPS 180Hz Gsync chuyên game', 'Màn hình Asus TUF GAMING VG259Q3A 25inch  Fast IPS 180Hz Gsync chuyên game', 'asus_vg259q3a_gearvn_e76558abb18946d7b7d51dd16d915d89_medium.jpg', 3390000, 7, 7, 9),
(883, 'Màn hình Asus TUF GAMING VG249Q3A 24inch  Fast IPS 180Hz Gsync chuyên game', 'Màn hình Asus TUF GAMING VG249Q3A 24inch  Fast IPS 180Hz Gsync chuyên game', 'download.png_1eb1cdf82aea4fcf9344d6652dcb071d_medium.jpg', 3190000, 38, 5, 14),
(884, 'Màn hình ASUS VZ24EHF 24inch  IPS 100Hz viền mỏng', 'Màn hình ASUS VZ24EHF 24inch  IPS 100Hz viền mỏng', 'image-removebg-preview__42_.png_6f75c144031d457382871204a2ea32f7_medium.jpg', 2390000, 99, 8, 14),
(885, 'Màn hình Philips 27M2N3200S 27inch  IPS 180Hz chuyên game', 'Màn hình Philips 27M2N3200S 27inch  IPS 180Hz chuyên game', 'philips_27m2n3200s_gearvn_31613a62a7c94e939a05feaca01c4c2a_medium.jpg', 3590000, 90, 13, 14),
(886, 'Màn hình ViewSonic VX2428J 24inch  Fast IPS 180Hz Gsync chuyên game / 9851', 'Màn hình ViewSonic VX2428J 24inch  Fast IPS 180Hz Gsync chuyên game / 9851', 'viewsonic_vx2428j_gearvn_60f31c4113114072b56e421577507e06_53fe3e1fa38d4845b222cb2d8497787f_medium.jpg', 3190000, 28, 3, 1),
(887, 'Màn hình Dahua DHI-LM25-E231 25inch  IPS 180Hz chuyên game', 'Màn hình Dahua DHI-LM25-E231 25inch  IPS 180Hz chuyên game', 'thit-k-cha-c-tn-_4__d80b68c7123a41b89bf213ffadb4d43f_medium.png', 2590000, 21, 3, 10),
(888, 'Màn hình Viewsonic VA2432-H 24inch  IPS 100Hz viền mỏng', 'Màn hình Viewsonic VA2432-H 24inch  IPS 100Hz viền mỏng', '1_6bf24e36cbd34fd990728781a18e1653_befa433a45b84594bf6aa5a5c8526365_medium.jpg', 2190000, 55, 5, 7),
(890, 'Seotoww', '13', '1730364787777.jpeg', 13, 13, 5, 1),
(891, 'Nguyen Hieu', 'Test', '1730364818361.jpeg', 10000000000, 11, 5, 2),
(892, 'Test3', 'Test 4', '1730371820499.jpg', 100000000, 13, 5, 1),
(893, '1', '313', '1730371690617.jpeg', 31, 313, 5, 14),
(894, 'Sản phẩm 1000', 'Test lần 10000', '1730371891090.jpeg', 100000000, 44, 5, 1),
(895, 'Sp 10010000', 'Mô tả 4', '1731827111198.jpg', 10000, 13, 5, 1),
(896, '123', '1', '1731832284367.jpeg', 1, 0, 5, 1),
(897, 'Nguyen Hieu', '12312', '1734252938985.jpg', 10000000000, 15555, 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `staffs`
--

CREATE TABLE `staffs` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `gender` tinyint(1) NOT NULL DEFAULT '0',
  `birthdate` date DEFAULT NULL,
  `phone` varchar(15) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `level` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `staffs`
--

INSERT INTO `staffs` (`id`, `name`, `gender`, `birthdate`, `phone`, `address`, `email`, `password`, `level`) VALUES
(1, 'Hieu', 0, '2004-03-15', '', '', 'trunghieu152004@gmail.com', '13', 1),
(3, 'Hieu', 0, NULL, '0327272297', '', 'trunghieu1520044@gmail.com', '13', 0),
(9, 'Hieu', 1, NULL, '012345678', '', 'hieu@gmail.com', '123', 1),
(10, 'Huy', 1, NULL, '012345677', '', 'huy@gmail.com', '123', 1),
(11, 'Hoan', 1, NULL, '012345676', '', 'hoan@gmail.com', '123', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- Indexes for table `details_bills`
--
ALTER TABLE `details_bills`
  ADD PRIMARY KEY (`bill_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `manufacturers`
--
ALTER TABLE `manufacturers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `manufacturer_id` (`manufacturer_id`);

--
-- Indexes for table `staffs`
--
ALTER TABLE `staffs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bills`
--
ALTER TABLE `bills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `manufacturers`
--
ALTER TABLE `manufacturers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=898;

--
-- AUTO_INCREMENT for table `staffs`
--
ALTER TABLE `staffs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bills`
--
ALTER TABLE `bills`
  ADD CONSTRAINT `bills_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `details_bills`
--
ALTER TABLE `details_bills`
  ADD CONSTRAINT `details_bills_ibfk_1` FOREIGN KEY (`bill_id`) REFERENCES `bills` (`id`),
  ADD CONSTRAINT `details_bills_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`manufacturer_id`) REFERENCES `manufacturers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

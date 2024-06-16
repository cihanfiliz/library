-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mariadb:3306
-- Generation Time: Jun 16, 2024 at 09:38 PM
-- Server version: 11.3.2-MariaDB
-- PHP Version: 8.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `publish_year` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `title`, `author`, `publish_year`) VALUES
(1, 'The Odyssey', 'Homer', 1910),
(2, 'The Oresteia: The Agamemnon', 'Aeschylus', 1900),
(3, 'The Iliad', 'Homer', 1870),
(4, 'The Prometheus', 'Aeschylus', 1899),
(5, 'Oedipus Rex', 'Sophocles', 1920),
(6, 'Oedipus at Colonus', 'Sophocles', 1903),
(7, 'Peloponnesian War', 'Thucydides', 1867),
(8, 'Hippolytus (Anthologized)', 'Euripides', 1904),
(9, 'Bacchae (Anthologized)', 'Euripides', 1904),
(10, 'Histories (Vol 1) Loeb', 'Herodotus', 1920),
(11, 'Histories (Vol 2) Loeb', 'Herodotus', 1921),
(12, 'Histories (Vol 3) Loeb', 'Herodotus', 1930),
(13, 'Clouds (Anthologized)', 'Aristophanes', 1898),
(14, 'Crito (Anthologized)', 'Plato', 1895),
(15, 'Phaedo', 'Plato', 1875),
(16, 'Parmenides', 'Plato', 1882),
(17, 'Metaphysics', 'Aristotle', 1907),
(18, 'Nichomachean Ethics', 'Aristotle', 1886),
(19, 'Politics', 'Aristotle', 1905),
(20, 'The Aeneid', 'Virgil', 1904);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

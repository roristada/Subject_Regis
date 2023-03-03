-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 03, 2023 at 10:04 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `miniproject_fullstack`
--

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `std_id` varchar(100) NOT NULL,
  `teacher_id` varchar(100) NOT NULL,
  `subject_id` varchar(100) NOT NULL,
  `section` varchar(100) NOT NULL,
  `unit` int(11) NOT NULL,
  `max_std` int(11) NOT NULL,
  `year` varchar(100) NOT NULL,
  `semester` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`std_id`, `teacher_id`, `subject_id`, `section`, `unit`, `max_std`, `year`, `semester`) VALUES
('6204062630441', '040201', '040203101', '2', 3, 40, '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `std_id` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `std_year` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `subject_id` varchar(100) NOT NULL,
  `section` varchar(100) NOT NULL,
  `subject_name` varchar(100) NOT NULL,
  `time` varchar(100) NOT NULL,
  `unit` varchar(100) NOT NULL,
  `max_std` varchar(100) NOT NULL,
  `year` varchar(100) NOT NULL,
  `semester` varchar(100) NOT NULL,
  `teacher_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`subject_id`, `section`, `subject_name`, `time`, `unit`, `max_std`, `year`, `semester`, `teacher_id`) VALUES
('040203101', '1', 'MATHEMATICS I', 'M 9:00-12:00', '3', '40', '1', '1', '040201'),
('040203101', '2', 'MATHEMATICS ', 'M 13:00-16:00', '3', '40', '1', '1', '040201'),
('040203102', '1', 'MATHEMATICS II', 'M 9:00-12:00', '3', '40', '1', '2', '040201'),
('040203201', '1', 'DIFFERENTIAL EQUATIONS', 'H 13:00-16:00', '3', '40', '2', '1', '040201'),
('040203201', '2', 'DIFFERENTIAL EQUATIONS', 'H 9:00-12:00', '3', '40', '2', '1', '040201'),
('040203202', '1', 'MATRICES AND VECTOR ANALYSIS', 'M 9:00-12:00', '3', '40', '2', '2', '040201'),
('040203202', '2', 'MATRICES AND VECTOR ANALYSIS', 'M 13:00-16:00', '3', '40', '2', '2', '040201'),
('040613102', '1', 'COMPUTER PROGRAMMING I', 'M 13:00-16:00', '3', '40', '1', '1', '040601'),
('040613102', '2', 'COMPUTER PROGRAMMING I', 'M 9:00-12:00', '3', '40', '1', '1', '040601'),
('040613121', '1', 'COMPUTER PROGRAMMING II', 'M 13:00-16:00', '3', '40', '1', '2', '040601'),
('040613121', '2', 'COMPUTER PROGRAMMING II', 'M 9:00-12:00', '3', '40', '1', '2', '040601'),
('040613202', '1', 'DATA STRUCTURE AND ALGORITHM', 'W 9:00-12:00', '3', '40', '2', '1', '040601'),
('040613202', '2', 'DATA STRUCTURE AND ALGORITHM', 'W 12:00-16:00', '3', '40', '2', '1', '040601'),
('040613292', '1', 'DESIGN AND ANALYSIS OF ALGOR', 'F 8:30-12:30', '3', '40', '2', '2', '040601'),
('040613292', '2', 'DESIGN AND ANALYSIS OF ALGOR', 'F 13:00-16:30', '3', '40', '2', '2', '040601'),
('040613326', '1', 'WEB DEVELOPMENT', 'F 8:30-12:30', '3', '40', '3', '1', '040602'),
('040613326', '2', 'WEB DEVELOPMENT', 'F 13:00-16:30', '3', '40', '3', '1', '040602'),
('040613393', '1', 'NUMERICAL METHODS', 'H 13:00-16:00', '3', '40', '3', '2', '040201'),
('040613393', '2', 'NUMERICAL METHODS', 'H 9:00-12:00', '3', '40', '3', '2', '040201'),
('040613476', '1', 'UNIX TOOLS', 'M 9:00-12:30', '3', '40', '3', '1', '040602'),
('040613476', '2', 'UNIX TOOLS', 'M 13:00-16:30', '3', '40', '3', '1', '040602');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `teacher_id` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `first_Name` varchar(100) NOT NULL,
  `last_Name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`std_id`,`subject_id`,`section`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`std_id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`subject_id`,`section`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`teacher_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 22, 2013 at 05:00 AM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `yourtri1_dwa15p4`
--

-- --------------------------------------------------------

--
-- Table structure for table `sat_vocabulary`
--

CREATE TABLE IF NOT EXISTS `sat_vocabulary` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `word` varchar(255) NOT NULL,
  `word_class` varchar(255) NOT NULL,
  `explanation` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=196 ;

--
-- Dumping data for table `sat_vocabulary`
--

INSERT INTO `sat_vocabulary` (`user_id`, `word`, `word_class`, `explanation`) VALUES
(1, 'abase', 'v.', 'To lower in position, estimation, or the like'),
(2, 'abbess', 'n.', 'The lady superior of a nunnery'),
(3, 'abbey', 'n.', 'The group of buildings which collectively form the dwelling-place of a society of monks or nuns'),
(4, 'abbot', 'n.', 'The superior of a community of monks'),
(5, 'abdicate', 'v.', 'To give up royal power or the like'),


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

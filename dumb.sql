-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3309
-- Généré le : lun. 01 août 2022 à 11:43
-- Version du serveur : 8.0.27
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `base`
--
CREATE DATABASE IF NOT EXISTS `base` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `base`;

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

DROP TABLE IF EXISTS `commentaire`;
CREATE TABLE IF NOT EXISTS `commentaire` (
  `id_commentaire` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) NOT NULL,
  `prenom` varchar(45) NOT NULL,
  `avis` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `note` int NOT NULL,
  `formation_typeformation` varchar(10) NOT NULL,
  PRIMARY KEY (`id_commentaire`,`formation_typeformation`),
  KEY `fk_commentaire_formation_idx` (`formation_typeformation`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `commentaire`
--

INSERT INTO `commentaire` (`id_commentaire`, `nom`, `prenom`, `avis`, `note`, `formation_typeformation`) VALUES
(3, 'jo', 'jo', 'good', 4, 'frontend'),
(5, 'dera', 'sedera', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 2, 'backend'),
(7, 'a', 'a', 'a', 4, 'frontend'),
(13, 'a', 'a', 'a', 3, 'frontend'),
(15, 'giovanni', 'ainga', 'très bien', 5, 'marketing'),
(16, 'Lydia', 'nan', 'assez bonne', 4, 'backend'),
(17, 'sabrina', 'key', 'le cours était vraiment mal présenter, manque d\'exercice. perso je suis pas assez satisfait ', 2, 'marketing');

-- --------------------------------------------------------

--
-- Structure de la table `formation`
--

DROP TABLE IF EXISTS `formation`;
CREATE TABLE IF NOT EXISTS `formation` (
  `typeformation` varchar(10) NOT NULL,
  PRIMARY KEY (`typeformation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `formation`
--

INSERT INTO `formation` (`typeformation`) VALUES
('backend'),
('frontend'),
('marketing'),
('ux');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD CONSTRAINT `fk_commentaire_formation` FOREIGN KEY (`formation_typeformation`) REFERENCES `formation` (`typeformation`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

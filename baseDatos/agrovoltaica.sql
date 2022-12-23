-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-12-2022 a las 01:33:02
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `agrovoltaica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE `historial` (
  `idhistorial` int(11) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  `promedio` double DEFAULT NULL,
  `varianza` double DEFAULT NULL,
  `desviacionstandar` double DEFAULT NULL,
  `fechacaptura` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `historial`
--

INSERT INTO `historial` (`idhistorial`, `tipo`, `promedio`, `varianza`, `desviacionstandar`, `fechacaptura`) VALUES
(1, 'general', 600, 260000, 509.9019513592785, '2022-12-22 02:13:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `panel`
--

CREATE TABLE `panel` (
  `idpanel` int(11) NOT NULL,
  `nombrePanel` varchar(45) NOT NULL,
  `kilowatts` double NOT NULL,
  `captura` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `panel`
--

INSERT INTO `panel` (`idpanel`, `nombrePanel`, `kilowatts`, `captura`) VALUES
(1, 'panel1', 30, '2022-12-20 06:00:00'),
(2, 'panel2', 80, '2022-12-20 06:00:00'),
(3, 'panel3', 120, '2022-12-20 06:00:00'),
(4, 'panel4', 10, '2022-12-20 06:00:00'),
(5, 'panel5', 40, '2022-12-20 06:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temperatura`
--

CREATE TABLE `temperatura` (
  `idtemperatura` int(11) NOT NULL,
  `centigrados` float NOT NULL,
  `captura` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `temperatura`
--

INSERT INTO `temperatura` (`idtemperatura`, `centigrados`, `captura`) VALUES
(1, 9, '2022-12-20 21:44:57'),
(2, 20, '2022-12-20 21:45:14'),
(3, 15, '2022-12-20 21:45:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `totalwatts`
--

CREATE TABLE `totalwatts` (
  `idwatts` int(11) NOT NULL,
  `watts` double DEFAULT NULL,
  `captura` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `totalwatts`
--

INSERT INTO `totalwatts` (`idwatts`, `watts`, `captura`) VALUES
(1, 500, '2022-12-20 08:11:05'),
(2, 900, '2022-12-20 08:11:51'),
(3, 1000, '2022-12-20 08:12:00'),
(4, 800, '2022-12-20 08:12:15'),
(5, 200, '2022-12-20 08:12:22'),
(6, 1500, '2022-12-20 08:12:32'),
(7, 400, '2022-12-20 08:12:42'),
(8, 100, '2022-12-20 08:12:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuarios` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `tipo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuarios`, `nombre`, `apellido`, `email`, `password`, `tipo`) VALUES
(1, 'Irving', 'Vanegas', 'irving@mail.com', '123456', 'administrador'),
(2, 'Pedro', 'Sanchez', 'pedro@mail.com', '123456', 'usuario');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `historial`
--
ALTER TABLE `historial`
  ADD PRIMARY KEY (`idhistorial`);

--
-- Indices de la tabla `panel`
--
ALTER TABLE `panel`
  ADD PRIMARY KEY (`idpanel`);

--
-- Indices de la tabla `temperatura`
--
ALTER TABLE `temperatura`
  ADD PRIMARY KEY (`idtemperatura`);

--
-- Indices de la tabla `totalwatts`
--
ALTER TABLE `totalwatts`
  ADD PRIMARY KEY (`idwatts`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuarios`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `historial`
--
ALTER TABLE `historial`
  MODIFY `idhistorial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `panel`
--
ALTER TABLE `panel`
  MODIFY `idpanel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `temperatura`
--
ALTER TABLE `temperatura`
  MODIFY `idtemperatura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `totalwatts`
--
ALTER TABLE `totalwatts`
  MODIFY `idwatts` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

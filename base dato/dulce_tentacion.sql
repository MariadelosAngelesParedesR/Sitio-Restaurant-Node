-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 16-08-2021 a las 22:29:18
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `dulce_tentacion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mis_portafolio`
--

CREATE TABLE IF NOT EXISTS `mis_portafolio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` varchar(250) NOT NULL,
  `noticia` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- Volcado de datos para la tabla `mis_portafolio`
--

INSERT INTO `mis_portafolio` (`id`, `titulo`, `subtitulo`, `noticia`) VALUES
(7, 'Los Nuevos Sabores ', 'Introducción de nuevo platos gastronómicos en nuestro menú, solo para los amantes del buen comer.  ', 'Roti en guayana (Venezuela)\r\n\r\nIngresó a El Callao desde Trinidad y Tobago por migrantes trinitarios con orígenes indios. Esta masa de trigo se rellena con guisos de arvejas, pollo o carne de res guisada, también hay otras variaciones como el roti relleno de vegetales en tiras delgadas sofritas con pasas, pollo al coco, pollo al curri y guiso de carne con pasas, (similar al quiso de la hallaca, comida típica navideña en Venezuela), y roti de champiñones pasas y aceitunas con queso crema, también la variación de preparación de masa, como agregar puré de plátano a la maza del roti, el roti simpre está presente al hablar de la gastronomía del Callao una comunidad hecha de migrantes proveniente de las antillas y nativos venezolanos.'),
(10, 'Pan Dulce Venezolano ', 'Receta de Pan dulce venezolano "Piñita"', 'El Pan Dulce Venezolano (Piñitas) es tradición en las mesas de ese país.  Se acostumbra acompañarlo con una taza de café, negro o con leche, puede ser con un rico vaso de leche fría o con una malta. Puede ser consumido en el desayuno o en la merienda o cuando a ca uno le apetezca. Lo cierto es que en Venezuela, es costumbre salir del trabajo y pasar a las panaderías a comprar las Piñitas de Pan Dulce.\r\n\r\nIngredientes\r\n1 kilo de harina 000\r\n3 cucharadas de manteca\r\n2 tazas de leche\r\n1 taza de azúcar\r\n1 cucharadita de sal\r\n2 cucharaditas de vainilla\r\n20 gramos de levadura instantánea\r\n1 cucharada de semillas de anís\r\n2 huevos\r\nPreparación\r\n\r\nPaso 1\r\n\r\nMezclar los ingredientes secos (levadura, anís, azúcar y sal) con la harina. Mezclar los ingredientes líquidos (leche, huevos y esencia) entre sí.\r\n\r\nPaso 2\r\n\r\nFormar un volcán con la mezcla de harina y secos, agregar los líquidos lentamente, hasta formar una masa suave y homogénea.\r\n\r\nPaso 3\r\n\r\nDejar levar la masa por 45 minutos y luego amasar ligeramente hasta desgasificarla.\r\n\r\nPaso 4\r\n\r\nDividir la masa en porciones de 100 gramos cada una y formar bolas. Cubrir con azúcar y colocarlas en una bandeja engrasada y dejar reposar hasta que doblen su tamaño.\r\n\r\nPaso 5\r\n\r\nPrecalentar el horno a 250º (fuerte) y hornear durante 15 minutos aproximadamente.'),
(11, 'PRUEBA', 'PRUEBA1', 'PRUEBA2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'MARIA', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-12-2022 a las 03:28:59
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `block_notas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add content type', 4, 'add_contenttype'),
(14, 'Can change content type', 4, 'change_contenttype'),
(15, 'Can delete content type', 4, 'delete_contenttype'),
(16, 'Can view content type', 4, 'view_contenttype'),
(17, 'Can add session', 5, 'add_session'),
(18, 'Can change session', 5, 'change_session'),
(19, 'Can delete session', 5, 'delete_session'),
(20, 'Can view session', 5, 'view_session'),
(21, 'Can add nota', 6, 'add_notas'),
(22, 'Can change nota', 6, 'change_notas'),
(23, 'Can delete nota', 6, 'delete_notas'),
(24, 'Can view nota', 6, 'view_notas'),
(25, 'Can add Usuario', 7, 'add_usuarios'),
(26, 'Can change Usuario', 7, 'change_usuarios'),
(27, 'Can delete Usuario', 7, 'delete_usuarios'),
(28, 'Can view Usuario', 7, 'view_usuarios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(6, 'Block_Notas', 'notas'),
(4, 'contenttypes', 'contenttype'),
(5, 'sessions', 'session'),
(7, 'Usuarios', 'usuarios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2022-12-14 00:19:53.513004'),
(2, 'contenttypes', '0002_remove_content_type_name', '2022-12-14 00:19:54.655468'),
(3, 'auth', '0001_initial', '2022-12-14 00:20:00.333754'),
(4, 'auth', '0002_alter_permission_name_max_length', '2022-12-14 00:20:01.249816'),
(5, 'auth', '0003_alter_user_email_max_length', '2022-12-14 00:20:01.335555'),
(6, 'auth', '0004_alter_user_username_opts', '2022-12-14 00:20:01.400831'),
(7, 'auth', '0005_alter_user_last_login_null', '2022-12-14 00:20:01.492376'),
(8, 'auth', '0006_require_contenttypes_0002', '2022-12-14 00:20:01.579246'),
(9, 'auth', '0007_alter_validators_add_error_messages', '2022-12-14 00:20:01.679145'),
(10, 'auth', '0008_alter_user_username_max_length', '2022-12-14 00:20:01.833287'),
(11, 'auth', '0009_alter_user_last_name_max_length', '2022-12-14 00:20:01.965403'),
(12, 'auth', '0010_alter_group_name_max_length', '2022-12-14 00:20:02.268290'),
(13, 'auth', '0011_update_proxy_permissions', '2022-12-14 00:20:02.431479'),
(14, 'auth', '0012_alter_user_first_name_max_length', '2022-12-14 00:20:02.548000'),
(15, 'Usuarios', '0001_initial', '2022-12-14 00:20:10.512093'),
(16, 'Block_Notas', '0001_initial', '2022-12-14 00:20:10.872507'),
(17, 'Block_Notas', '0002_initial', '2022-12-14 00:20:12.301592'),
(18, 'admin', '0001_initial', '2022-12-14 00:20:15.309683'),
(19, 'admin', '0002_logentry_remove_auto_add', '2022-12-14 00:20:15.396940'),
(20, 'admin', '0003_logentry_add_action_flag_choices', '2022-12-14 00:20:15.489442'),
(21, 'sessions', '0001_initial', '2022-12-14 00:20:16.202338');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notas`
--

CREATE TABLE `notas` (
  `id_notas` int(11) NOT NULL,
  `titulo` longtext NOT NULL,
  `cuerpo` longtext NOT NULL,
  `id_usuarios_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `notas`
--

INSERT INTO `notas` (`id_notas`, `titulo`, `cuerpo`, `id_usuarios_id`) VALUES
(19, 'Rendir', 'biologia', 1),
(20, 'nueva nota', 'Aquí se desarrolla tu nota', 2),
(22, 'Titulo', 'Aquí se desarrolla tu nota', 3),
(23, 'Titulo', 'Aquí se desarrolla tu nota', 2),
(24, 'Titulwefergergreo', 'Aquí se eargergergregdesarrolla tu nota', 2),
(25, 'cuarta nota', 'wefewgfewgwef', 2),
(26, 'quinta nota', 'safefwefwef', 2),
(27, 'sexta', 'rgergerg', 2),
(28, 'septima', 'wefewfwef', 2),
(29, 'Titulo Cambio', 'Aquí Cambio se desarrolla tu nota', 1),
(30, 'cambios', 'Cambiando todo', 1),
(31, 'nueva nota 1', 'nueva nota 1', 1),
(33, 'hthaergegre', 'yumntbvdrethyuj', 1),
(34, 'nueva nota ?', 'me crea en serio la nueva nota y me acepta la ruta dinamica ?', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_usuarios`
--

CREATE TABLE `usuarios_usuarios` (
  `password` varchar(128) NOT NULL,
  `id_usuarios` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `is_superuser` int(1) DEFAULT NULL,
  `last_login` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios_usuarios`
--

INSERT INTO `usuarios_usuarios` (`password`, `id_usuarios`, `username`, `email`, `nombre`, `apellido`, `is_superuser`, `last_login`) VALUES
('domingo1234', 1, 'Domingo', 'domingosanchez@gmail.com', 'Domingo', 'Sanchez', 0, NULL),
('pedro1234', 2, 'pedrito', 'pedromarquez@gmail.com', 'Pedro', 'Marquez', 0, NULL),
('pbkdf2_sha256$390000$sSIxZVWiZL9W0CAtfdHCbH$y2hBlDoFgJH3qXyJGL7T+/O79zCkEab5m1zGaaSaD1E=', 3, 'tadeo123', 'tadeo@gmail.com', 'Tadeo', 'Gomez', 0, NULL),
('pbkdf2_sha256$390000$Tdoa3ZJVaKvYA3tT7fmApo$IwScBPcQr8Jk7F7Za+FwSy72TW69ezhWIvkDvb3QCTw=', 4, 'wgregaerg', 'rgreger@egergre.com', 'ewgwgw', 'ewfwg', 0, NULL),
('pbkdf2_sha256$390000$LJyEab1i5DonU195R8GjEp$/kSm84cWJ5Qcveqe/59hP0HOZ7itA0nrj5p/yXAQbP8=', 5, 'Test3', 'test1@test3.com', 'Test3', 'Test3', 0, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_usuarios_groups`
--

CREATE TABLE `usuarios_usuarios_groups` (
  `id` bigint(20) NOT NULL,
  `usuarios_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_usuarios_user_permissions`
--

CREATE TABLE `usuarios_usuarios_user_permissions` (
  `id` bigint(20) NOT NULL,
  `usuarios_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indices de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_Usuarios_` (`user_id`);

--
-- Indices de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indices de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indices de la tabla `notas`
--
ALTER TABLE `notas`
  ADD PRIMARY KEY (`id_notas`),
  ADD UNIQUE KEY `id_notas` (`id_notas`),
  ADD KEY `notas_id_usuarios_id_07620472_fk_Usuarios_usuarios_id_usuarios` (`id_usuarios_id`);

--
-- Indices de la tabla `usuarios_usuarios`
--
ALTER TABLE `usuarios_usuarios`
  ADD PRIMARY KEY (`id_usuarios`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `username_2` (`username`);

--
-- Indices de la tabla `usuarios_usuarios_groups`
--
ALTER TABLE `usuarios_usuarios_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Usuarios_usuarios_groups_usuarios_id_group_id_f8d07711_uniq` (`usuarios_id`,`group_id`),
  ADD KEY `Usuarios_usuarios_groups_group_id_2984a8f7_fk_auth_group_id` (`group_id`);

--
-- Indices de la tabla `usuarios_usuarios_user_permissions`
--
ALTER TABLE `usuarios_usuarios_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Usuarios_usuarios_user_p_usuarios_id_permission_i_3b52bb54_uniq` (`usuarios_id`,`permission_id`),
  ADD KEY `Usuarios_usuarios_us_permission_id_3a4775da_fk_auth_perm` (`permission_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `notas`
--
ALTER TABLE `notas`
  MODIFY `id_notas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `usuarios_usuarios`
--
ALTER TABLE `usuarios_usuarios`
  MODIFY `id_usuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios_usuarios_groups`
--
ALTER TABLE `usuarios_usuarios_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios_usuarios_user_permissions`
--
ALTER TABLE `usuarios_usuarios_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Filtros para la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Filtros para la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_Usuarios_` FOREIGN KEY (`user_id`) REFERENCES `usuarios_usuarios` (`id_usuarios`);

--
-- Filtros para la tabla `notas`
--
ALTER TABLE `notas`
  ADD CONSTRAINT `notas_id_usuarios_id_07620472_fk_Usuarios_usuarios_id_usuarios` FOREIGN KEY (`id_usuarios_id`) REFERENCES `usuarios_usuarios` (`id_usuarios`);

--
-- Filtros para la tabla `usuarios_usuarios_groups`
--
ALTER TABLE `usuarios_usuarios_groups`
  ADD CONSTRAINT `Usuarios_usuarios_gr_usuarios_id_93601114_fk_Usuarios_` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios_usuarios` (`id_usuarios`),
  ADD CONSTRAINT `Usuarios_usuarios_groups_group_id_2984a8f7_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Filtros para la tabla `usuarios_usuarios_user_permissions`
--
ALTER TABLE `usuarios_usuarios_user_permissions`
  ADD CONSTRAINT `Usuarios_usuarios_us_permission_id_3a4775da_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `Usuarios_usuarios_us_usuarios_id_bbd236dc_fk_Usuarios_` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios_usuarios` (`id_usuarios`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

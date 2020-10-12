/*
Navicat MySQL Data Transfer

Source Server         : th
Source Server Version : 50731
Source Host           : localhost:3306
Source Database       : thapp

Target Server Type    : MYSQL
Target Server Version : 50731
File Encoding         : 65001

Date: 2020-10-12 15:39:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `dynamic_id` int(11) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `create_time` datetime NOT NULL,
  `account` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  PRIMARY KEY (`dynamic_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------

-- ----------------------------
-- Table structure for dynamic
-- ----------------------------
DROP TABLE IF EXISTS `dynamic`;
CREATE TABLE `dynamic` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `account` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `create_time` datetime NOT NULL,
  `context` longtext,
  `images` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dynamic
-- ----------------------------

-- ----------------------------
-- Table structure for files
-- ----------------------------
DROP TABLE IF EXISTS `files`;
CREATE TABLE `files` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `size` double NOT NULL,
  `type` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `account` varchar(255) NOT NULL,
  `create_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of files
-- ----------------------------
INSERT INTO `files` VALUES ('0900a951-0aec-11eb-b98e-6b3709d8a6f0', '1592554933838.jpeg', '60539', 'jpeg', '1592554933838.jpeg', '1314520', '2020-10-10 19:30:44');
INSERT INTO `files` VALUES ('58f81ab0-0ae7-11eb-aa11-f126b682fc52', 'kpi_qq.jpg', '55194', 'jpg', 'kpi_qq.jpg', '1314520', '2020-10-10 18:57:11');
INSERT INTO `files` VALUES ('5f1eacd1-0ae0-11eb-b304-a921e0719f17', 'kpi_qq.jpg', '55194', 'jpg', 'kpi_qq.jpg', '1314520', '2020-10-10 18:07:14');
INSERT INTO `files` VALUES ('66985ff1-0ae6-11eb-810b-85b473991f72', 'kpi_btn.png', '3006', 'png', 'kpi_btn.png', '1314520', '2020-10-10 18:50:24');
INSERT INTO `files` VALUES ('a9e125c1-0ae7-11eb-b85f-1f3caf56da69', 'triangle-bottom.png', '161', 'png', 'triangle-bottom.png', '1314520', '2020-10-10 18:59:26');
INSERT INTO `files` VALUES ('b08c9091-0ae6-11eb-810b-85b473991f72', 'ic_share.png', '572', 'png', 'ic_share.png', '1314520', '2020-10-10 18:52:28');
INSERT INTO `files` VALUES ('b9c03771-0ae6-11eb-810b-85b473991f72', 'enterIcon.png', '288', 'png', 'enterIcon.png', '1314520', '2020-10-10 18:52:44');
INSERT INTO `files` VALUES ('e7c1c441-0aeb-11eb-b98e-6b3709d8a6f0', 'IMG_20190130_011601.jpg', '2821787', 'jpg', 'IMG_20190130_011601.jpg', '1314520', '2020-10-10 19:29:48');

-- ----------------------------
-- Table structure for likes
-- ----------------------------
DROP TABLE IF EXISTS `likes`;
CREATE TABLE `likes` (
  `dynamic_id` int(11) NOT NULL,
  `account` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of likes
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `gender` tinyint(1) unsigned DEFAULT '0' COMMENT '0：位置 1：男 2：女',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '1314520', '111111', 'th', 'th', '1592554933838.jpeg', '18', '1');
INSERT INTO `user` VALUES ('2', 'test', '1', 'test', 'test', null, null, '0');

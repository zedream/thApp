/*
Navicat MySQL Data Transfer

Source Server         : th
Source Server Version : 50731
Source Host           : localhost:3306
Source Database       : thapp

Target Server Type    : MYSQL
Target Server Version : 50731
File Encoding         : 65001

Date: 2020-11-13 13:55:36
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
INSERT INTO `files` VALUES ('01fa5421-137b-11eb-8646-2505ea6458f8', 'img-916bc457b0be4fe2c7105b3e0ce5242b_mh1598520817994.jpg', '721509', 'jpg', 'img-916bc457b0be4fe2c7105b3e0ce5242b_mh1598520817994.jpg', '1314520', '2020-10-21 16:54:20');
INSERT INTO `files` VALUES ('0900a951-0aec-11eb-b98e-6b3709d8a6f0', '1592554933838.jpeg', '60539', 'jpeg', '1592554933838.jpeg', '1314520', '2020-10-10 19:30:44');
INSERT INTO `files` VALUES ('0af5e5f1-1379-11eb-8646-2505ea6458f8', '1587516659754.jpeg', '133594', 'jpeg', '1587516659754.jpeg', '1314520', '2020-10-21 16:40:16');
INSERT INTO `files` VALUES ('0ece11a1-142a-11eb-8646-2505ea6458f8', '1592554916276.jpeg', '79279', 'jpeg', '1592554916276.jpeg', '1314520', '2020-10-22 13:47:23');
INSERT INTO `files` VALUES ('2215e451-137a-11eb-8646-2505ea6458f8', 'img-916bc457b0be4fe2c7105b3e0ce5242b_mh1598520817994.jpg', '721509', 'jpg', 'img-916bc457b0be4fe2c7105b3e0ce5242b_mh1598520817994.jpg', '1314520', '2020-10-21 16:48:04');
INSERT INTO `files` VALUES ('57779341-18df-11eb-9ac4-a138d2291101', 'img-df1a35f0e2c6f5a57fbac81eace39fa4.jpg', '197226', 'jpg', 'img-df1a35f0e2c6f5a57fbac81eace39fa4.jpg', 'undefined', '2020-10-28 13:35:08');
INSERT INTO `files` VALUES ('5c40db21-18df-11eb-9ac4-a138d2291101', 'img-df1a35f0e2c6f5a57fbac81eace39fa4.jpg', '197226', 'jpg', 'img-df1a35f0e2c6f5a57fbac81eace39fa4.jpg', '1314520', '2020-10-28 13:35:16');
INSERT INTO `files` VALUES ('5f820861-1379-11eb-8646-2505ea6458f8', '-62942aefcc64176e.jpg', '229019', 'jpg', '-62942aefcc64176e.jpg', '1314520', '2020-10-21 16:42:37');
INSERT INTO `files` VALUES ('c88bb8f1-137a-11eb-8646-2505ea6458f8', 'img-916bc457b0be4fe2c7105b3e0ce5242b_mh1598520817994.jpg', '721509', 'jpg', 'img-916bc457b0be4fe2c7105b3e0ce5242b_mh1598520817994.jpg', '1314520', '2020-10-21 16:52:43');
INSERT INTO `files` VALUES ('c8ee62b1-1056-11eb-9a76-570b1bc42e36', '-60c2f7066150942e.jpg', '60233', 'jpg', '-60c2f7066150942e.jpg', 'th', '2020-10-17 16:57:28');
INSERT INTO `files` VALUES ('d07a4c01-1061-11eb-8646-2505ea6458f8', '-5ff03517d692aba9.gif', '4296', 'gif', '-5ff03517d692aba9.gif', '1314520', '2020-10-17 18:16:26');
INSERT INTO `files` VALUES ('d5709d71-1379-11eb-8646-2505ea6458f8', 'img-916bc457b0be4fe2c7105b3e0ce5242b_mh1598520817994.jpg', '721509', 'jpg', 'img-916bc457b0be4fe2c7105b3e0ce5242b_mh1598520817994.jpg', '1314520', '2020-10-21 16:45:55');
INSERT INTO `files` VALUES ('f1d5bfe1-1379-11eb-8646-2505ea6458f8', '-62942aefcc64176e.jpg', '229019', 'jpg', '-62942aefcc64176e.jpg', '1314520', '2020-10-21 16:46:43');

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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '1314520', '111111', 'th', 'thao', 'img-df1a35f0e2c6f5a57fbac81eace39fa4.jpg', '18', '1');
INSERT INTO `user` VALUES ('2', 'test', '1', 'test', 'test', null, null, '0');
INSERT INTO `user` VALUES ('7', 'test1', '1', null, 'test1', null, null, '0');
INSERT INTO `user` VALUES ('8', 'th', '1', 'null', 'th', '-60c2f7066150942e.jpg', null, '0');
INSERT INTO `user` VALUES ('9', 'thao', '1', null, 'thao', null, null, '0');

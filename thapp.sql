/*
Navicat MySQL Data Transfer

Source Server         : th
Source Server Version : 50731
Source Host           : localhost:3306
Source Database       : thapp

Target Server Type    : MYSQL
Target Server Version : 50731
File Encoding         : 65001

Date: 2020-09-30 18:46:29
*/

SET FOREIGN_KEY_CHECKS=0;

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
INSERT INTO `user` VALUES ('1', '1314520', '111111', 'th', 'th', 'http://th.vaiwan.com/files/1592554916276.jpeg', '18', '1');
INSERT INTO `user` VALUES ('2', 'test', '1', 'test', 'test', null, null, '0');

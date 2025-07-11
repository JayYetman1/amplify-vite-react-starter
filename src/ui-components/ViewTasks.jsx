import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { View, Text, Flex } from '@aws-amplify/ui-react';


export default function ViewTasks(props) {
  const { overrides, ...rest } = props;

  return (
  <View
    width="1462px"
    height="767px"
    display="block"
    overflow="hidden"
    position="relative"
    backgroundColor="rgba(255,255,255,1)"
    {...getOverrideProps(overrides, "ViewTasks")}
    {...rest}
  >
    <View
      width="1240px"
      height="611px"
      display="block"
      position="absolute"
      top="80px"
      left="96px"
      backgroundColor="rgba(221,231,255,1)"
      {...getOverrideProps(overrides, "Rectangle 1164")}
    />
    <Text
      fontFamily="Inter"
      fontSize="64px"
      fontWeight="400"
      color="rgba(0,0,0,1)"
      lineHeight="96px"
      textAlign="left"
      display="block"
      width="521px"
      height="87px"
      position="absolute"
      top="132px"
      left="161px"
      whiteSpace="pre-wrap"
      {...getOverrideProps(overrides, "Jay Yetman")}
    >
      Jay Yetman
    </Text>
    <Text
      fontFamily="Inter"
      fontSize="32px"
      fontWeight="200"
      color="rgba(0,0,0,1)"
      fontStyle="italic"
      lineHeight="48px"
      textAlign="left"
      display="block"
      width="354px"
      height="51px"
      position="absolute"
      top="230px"
      left="164px"
      whiteSpace="pre-wrap"
      {...getOverrideProps(overrides, "yetmanjay@gmail.com")}
    >
      yetmanjay@gmail.com
    </Text>
    <Text
      fontFamily="Inter"
      fontSize="32px"
      fontWeight="400"
      color="rgba(0,0,0,1)"
      lineHeight="48px"
      textAlign="left"
      display="block"
      width="757px"
      height="129px"
      position="absolute"
      top="321px"
      left="164px"
      whiteSpace="pre-wrap"
      {...getOverrideProps(overrides, "Come do some mowing for me and make sre to bring your own mower and gloves.")}
    >
      Come do some mowing for me and make sre to bring your own mower and gloves.
    </Text>
    <Text
      fontFamily="Instrument Sans"
      fontSize="40px"
      fontWeight="600"
      color="rgba(0,0,0,1)"
      lineHeight="60px"
      textAlign="left"
      display="block"
      width="346px"
      height="67px"
      position="absolute"
      top="196px"
      left="956px"
      whiteSpace="pre-wrap"
      {...getOverrideProps(overrides, "90 Merritt Ave")}
    >
      90 Merritt Ave
    </Text>
    <Text
      fontFamily="Instrument Sans"
      fontSize="40px"
      fontWeight="400"
      color="rgba(0,0,0,1)"
      fontStyle="italic"
      lineHeight="60px"
      textAlign="left"
      display="block"
      width="184px"
      height="67px"
      position="absolute"
      top="132px"
      left="992px"
      whiteSpace="pre-wrap"
      {...getOverrideProps(overrides, "200")}
    >
      200
    </Text>
    <Text
      fontFamily="Instrument Sans"
      fontSize="36px"
      fontWeight="400"
      color="rgba(0,0,0,1)"
      fontStyle="italic"
      lineHeight="54px"
      textAlign="left"
      display="block"
      width="595px"
      height="86px"
      position="absolute"
      top="510px"
      left="161px"
      whiteSpace="pre-wrap"
      {...getOverrideProps(overrides, "2-3 hours")}
    >
      2-3 hours
    </Text>
    <Text
      fontFamily="Instrument Sans"
      fontSize="36px"
      fontWeight="400"
      color="rgba(0,0,0,1)"
      fontStyle="italic"
      lineHeight="54px"
      textAlign="left"
      display="block"
      width="488px"
      height="115px"
      position="absolute"
      top="596px"
      left="164px"
      whiteSpace="pre-wrap"
      {...getOverrideProps(overrides, "Monday - Friday 3pm-8pm")}
    >
      Monday - Friday 3pm-8pm
    </Text>
    <Flex
      width="100px"
      height="100px"
      overflow="hidden"
      position="absolute"
      top="395px"
      left="1467px"
      {...getOverrideProps(overrides, "Frame 4383")}
    />
    <Text
      fontFamily="Instrument Sans"
      fontSize="40px"
      fontWeight="400"
      color="rgba(0,0,0,1)"
      fontStyle="italic"
      lineHeight="60px"
      textAlign="left"
      display="block"
      width="99px"
      height="64px"
      position="absolute"
      top="132px"
      left="956px"
      whiteSpace="pre-wrap"
      {...getOverrideProps(overrides, "$")}
    >
      $
    </Text>
  </View>
  )
}

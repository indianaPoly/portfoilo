"use client";

import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

const motionProps = {
  shouldForwardProp: (prop: string) => isValidMotionProp(prop) || shouldForwardProp(prop),
};

export const MotionBox = chakra(motion.div, motionProps);

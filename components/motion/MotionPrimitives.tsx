'use client';

import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

const motionProps = {
  shouldForwardProp: (prop: string) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
};

export const MotionBox = chakra(motion.div, motionProps);

// 파일명과 일치하는 export 추가
export const MotionPrimitives = {
  MotionBox,
};

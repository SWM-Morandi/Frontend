'use client';

import './styles.css';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

import SamsungIcon from '@/assets/logos/samsung_logo.png';
import NaverIcon from '@/assets/logos/naver_logo.png';
import KakaoIcon from '@/assets/logos/kakao_logo.png';
import LineIcon from '@/assets/logos/line_logo.png';
import CoupangIcon from '@/assets/logos/coupang_logo.png';
import BaeminIcon from '@/assets/logos/baemin_logo.png';

import Image from 'next/image';

interface ParallaxProps {
  children: any;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="overflow-hidden tracking-tight leading-5 m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="font-semibold uppercase text-4xl flex whitespace-nowrap"
        style={{ x }}
      >
        <span className="block mr-30">{children} </span>
        <span className="block mr-30">{children} </span>
        <span className="block mr-30">{children} </span>
        <span className="block mr-30">{children} </span>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <section className="w-9/12 overflow-hidden">
      <ParallaxText baseVelocity={-2}>
        <div className="flex flex-row w-[1210px]">
          <Image src={NaverIcon} width={370} alt="네이버 아이콘" />
          <div className="w-[50px]" />
          <Image src={BaeminIcon} width={370} alt="배민 아이콘" />
          <div className="w-[50px]" />
          <Image src={CoupangIcon} width={370} alt="쿠팡 아이콘" />
        </div>
      </ParallaxText>
      <ParallaxText baseVelocity={2}>
        <div className="flex flex-row w-[1145px]">
          <Image src={SamsungIcon} width={370} alt="삼성 아이콘" />
          <div className="w-[25px]" />
          <Image src={KakaoIcon} width={370} alt="카카오 아이콘" />
          <div className="w-[10px]" />
          <Image src={LineIcon} width={370} alt="라인 아이콘" />
        </div>
      </ParallaxText>
    </section>
  );
}

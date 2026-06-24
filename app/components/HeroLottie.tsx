"use client";

import Lottie from "lottie-react";

const learningAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 120,
  w: 500,
  h: 500,
  nm: "Learning orbit",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Outer orbit",
      sr: 1,
      ks: {
        o: { a: 0, k: 45 },
        r: { a: 1, k: [{ t: 0, s: [0] }, { t: 120, s: [360] }] },
        p: { a: 0, k: [250, 250, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [300, 300] },
        },
        {
          ty: "st",
          c: { a: 0, k: [0.13, 0.45, 1, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 6 },
        },
      ],
      ip: 0,
      op: 120,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Center screen",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [250, 250, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "rc",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [190, 125] },
          r: { a: 0, k: 18 },
        },
        {
          ty: "gf",
          o: { a: 0, k: 100 },
          r: 1,
          s: { a: 0, k: [-95, -62] },
          e: { a: 0, k: [95, 62] },
          t: 1,
          g: {
            p: 3,
            k: {
              a: 0,
              k: [0, 0.02, 0.1, 0.25, 0.55, 0.04, 0.28, 0.75, 1, 0.2, 0.58, 1],
            },
          },
        },
      ],
      ip: 0,
      op: 120,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Pulse dot",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [250, 94, 0] },
            { t: 30, s: [406, 250, 0] },
            { t: 60, s: [250, 406, 0] },
            { t: 90, s: [94, 250, 0] },
            { t: 120, s: [250, 94, 0] },
          ],
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [90, 90, 100] }, { t: 60, s: [125, 125, 100] }, { t: 120, s: [90, 90, 100] }] },
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [34, 34] },
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.12, 0.84, 0.9, 1] },
          o: { a: 0, k: 100 },
        },
      ],
      ip: 0,
      op: 120,
    },
  ],
};

export function HeroLottie() {
  return (
    <Lottie
      animationData={learningAnimation}
      loop
      className="mx-auto h-72 w-72 max-w-full sm:h-96 sm:w-96"
      aria-label="Animated technology learning illustration"
    />
  );
}

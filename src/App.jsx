import * as b from "react";
import * as O from "react/jsx-runtime";
import {
  motion as Q,
  AnimatePresence as Wp,
  useScroll as kg,
  useSpring as Lg,
  useTransform as Ng,
} from "framer-motion";
import Credit from "./Credit";
import { startMusic, preloadMusic, MusicToggle } from "./Music";

var Rg = (...e) =>
  e
    .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
    .join(` `)
    .trim();
var zg = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase();
var Bg = (e) =>
  e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
    n ? n.toUpperCase() : t.toLowerCase(),
  );
var Vg = (e) => {
  let t = Bg(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var Hg = {
  xmlns: `http://www.w3.org/2000/svg`,
  width: 24,
  height: 24,
  viewBox: `0 0 24 24`,
  fill: `none`,
  stroke: `currentColor`,
  strokeWidth: 2,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
};
var Ug = (e) => {
  for (let t in e)
    if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
  return !1;
};
var Wg = (0, b.forwardRef)(
  (
    {
      color: e = `currentColor`,
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = ``,
      children: a,
      iconNode: o,
      ...s
    },
    c,
  ) =>
    (0, b.createElement)(
      `svg`,
      {
        ref: c,
        ...Hg,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Rg(`lucide`, i),
        ...(!a && !Ug(s) && { "aria-hidden": `true` }),
        ...s,
      },
      [
        ...o.map(([e, t]) => (0, b.createElement)(e, t)),
        ...(Array.isArray(a) ? a : [a]),
      ],
    ),
);
var Gg = (e, t) => {
  let n = (0, b.forwardRef)(({ className: n, ...r }, i) =>
    (0, b.createElement)(Wg, {
      ref: i,
      iconNode: t,
      className: Rg(`lucide-${zg(Vg(e))}`, `lucide-${e}`, n),
      ...r,
    }),
  );
  return ((n.displayName = Vg(e)), n);
};
var Kg = Gg(`calendar-plus`, [
  [`path`, { d: `M16 19h6`, key: `xwg31i` }],
  [`path`, { d: `M16 2v4`, key: `4m81vk` }],
  [`path`, { d: `M19 16v6`, key: `tddt3s` }],
  [
    `path`,
    {
      d: `M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5`,
      key: `1glfrc`,
    },
  ],
  [`path`, { d: `M3 10h18`, key: `8toen8` }],
  [`path`, { d: `M8 2v4`, key: `1cmpym` }],
]);
var qg = Gg(`chevron-down`, [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]]);
var Jg = Gg(`clock`, [
  [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
  [`path`, { d: `M12 6v6l4 2`, key: `mmk7yg` }],
]);
var Yg = Gg(`heart`, [
  [
    `path`,
    {
      d: `M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,
      key: `mvr1a0`,
    },
  ],
]);
var Xg = Gg(`map-pin`, [
  [
    `path`,
    {
      d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,
      key: `1r0f0z`,
    },
  ],
  [`circle`, { cx: `12`, cy: `10`, r: `3`, key: `ilqhr7` }],
]);
var Zg = Gg(`navigation`, [
  [`polygon`, { points: `3 11 22 2 13 21 11 13 3 11`, key: `1ltx0t` }],
]);
var Qg = Gg(`sparkles`, [
  [
    `path`,
    {
      d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
      key: `1s2grr`,
    },
  ],
  [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
  [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
  [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }],
]);
function $g({ className: e = ``, intensity: t = 1 }) {
  return (0, O.jsxs)(`div`, {
    "aria-hidden": !0,
    className: `pointer-events-none absolute inset-0 overflow-hidden ${e}`,
    style: { opacity: t },
    children: [
      (0, O.jsx)(`div`, {
        className: `absolute -top-1/3 left-[-20%] h-[80%] w-[90%] rounded-full blur-3xl`,
        style: {
          background: `radial-gradient(circle at 50% 50%, oklch(0.55 0.13 160 / 0.55), transparent 65%)`,
          animation: `aurora-drift 18s ease-in-out infinite`,
        },
      }),
      (0, O.jsx)(`div`, {
        className: `absolute top-[10%] right-[-25%] h-[75%] w-[85%] rounded-full blur-3xl`,
        style: {
          background: `radial-gradient(circle at 50% 50%, oklch(0.8 0.12 85 / 0.5), transparent 65%)`,
          animation: `aurora-drift 24s ease-in-out infinite reverse`,
        },
      }),
      (0, O.jsx)(`div`, {
        className: `absolute bottom-[-25%] left-[10%] h-[70%] w-[80%] rounded-full blur-3xl`,
        style: {
          background: `radial-gradient(circle at 50% 50%, oklch(0.52 0.16 18 / 0.4), transparent 65%)`,
          animation: `aurora-drift 30s ease-in-out infinite`,
        },
      }),
      (0, O.jsx)(`div`, {
        className: `absolute inset-0 mix-blend-soft-light`,
        style: {
          backgroundImage: `radial-gradient(oklch(0.98 0.02 92 / 0.35) 1px, transparent 1px)`,
          backgroundSize: `22px 22px`,
        },
      }),
    ],
  });
}
function e_({ count: e = 14, burst: t = !1 }) {
  return (0, O.jsx)(`div`, {
    "aria-hidden": !0,
    className: `pointer-events-none absolute inset-0 overflow-hidden`,
    children: (0, b.useMemo)(
      () =>
        Array.from({ length: e }, (e, n) => ({
          id: n,
          left: Math.random() * 100,
          size: 8 + Math.random() * 12,
          delay: t ? Math.random() * 0.4 : Math.random() * 12,
          duration: (t ? 3.2 : 11) + Math.random() * 6,
          drift: (Math.random() - 0.5) * 140,
          spin: 180 + Math.random() * 540,
          hue:
            Math.random() > 0.5
              ? `oklch(0.78 0.115 85)`
              : `oklch(0.62 0.13 18)`,
          opacity: 0.35 + Math.random() * 0.45,
        })),
      [e, t],
    ).map((e) =>
      (0, O.jsx)(
        Q.span,
        {
          className: `absolute top-[-8%]`,
          style: {
            left: `${e.left}%`,
            width: e.size,
            height: e.size * 0.62,
            borderRadius: `60% 10% 60% 10%`,
            background: e.hue,
            opacity: e.opacity,
          },
          initial: { y: `-10vh`, x: 0, rotate: 0 },
          animate: { y: `115vh`, x: e.drift, rotate: e.spin },
          transition: {
            duration: e.duration,
            delay: e.delay,
            repeat: t ? 0 : 1 / 0,
            ease: `linear`,
          },
        },
        e.id,
      ),
    ),
  });
}
var $ = {
  groom: {
    name: `Anandhu`,
    fullName: `Anandhu`,
    line: `Son of Mr. Anilkumar & Mrs. Vanajakumari`,
    note: `A cherished son, and the joy of a loving family.`,
    image: `/images/groom.jpg`,
  },
  bride: {
    name: `Aiswarya`,
    fullName: `Aiswarya`,
    line: `Daughter of Mr. Sureshkumar & Mrs. Ambily`,
    note: `A cherished daughter, and the light of a loving family.`,
    image: `/images/bride.jpg`,
  },
  dateISO: `2026-12-03T08:30:00+05:30`,
  endISO: `2026-12-03T12:30:00+05:30`,
  dateLabel: `Thursday, 3 December 2026`,
  timeLabel: `Thursday · 8:30 AM`,
  ceremonyLabel: `Wedding`,
  venue: {
    name: `Arafa Palace Auditorium`,
    address: `Mangaram, Kerala`,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=Arafa+Palace+Auditorium+Mangaram+Kerala`,
  },
  reception: {
    dateISO: `2026-12-04T17:30:00+05:30`,
    endISO: `2026-12-04T21:00:00+05:30`,
    day: `04`,
    monthYear: `December 2026`,
    timeLabel: `Friday · 5:30 PM`,
    venue: {
      name: `Mattammal Auditorium`,
      mapUrl: `https://www.google.com/maps/search/?api=1&query=Mattammal+Auditorium+Kerala`,
    },
  },
};
function t_() {
  let e = (0, b.useRef)(null),
    { scrollYProgress: t } = kg({
      target: e,
      offset: [`start start`, `end start`],
    }),
    n = Lg(t, { stiffness: 100, damping: 24, mass: 0.4 }),
    r = Ng(n, [0, 1], [`0%`, `22%`]),
    i = Ng(n, [0, 1], [`0%`, `38%`]),
    a = Ng(n, [0, 1], [`0%`, `80%`]),
    o = Ng(n, [0, 0.55], [1, 0]),
    s = Ng(n, [0, 1], [`0%`, `-18%`]),
    c = Ng(n, [0, 1], [1, 1.12]);
  return (0, O.jsxs)(`section`, {
    ref: e,
    className: `bg-emerald-deep relative flex h-[100svh] min-h-[640px] w-full flex-col items-center overflow-hidden`,
    children: [
      (0, O.jsx)($g, { intensity: 1 }),
      (0, O.jsx)(`div`, {
        className: `from-emerald-ink/50 via-emerald-deep/20 to-emerald-ink/90 absolute inset-0 bg-gradient-to-b`,
      }),
      (0, O.jsx)(Q.div, {
        "aria-hidden": !0,
        style: {
          y: r,
          background: `radial-gradient(ellipse at 50% 80%, oklch(0.93 0.05 92 / 0.55), transparent 62%)`,
        },
        className: `absolute bottom-0 left-1/2 h-[62%] w-[130%] -translate-x-1/2 rounded-t-full blur-2xl`,
      }),
      (0, O.jsx)(e_, { count: 12 }),
      (0, O.jsx)(Q.img, {
        src: `/images/garland.png`,
        alt: ``,
        "aria-hidden": !0,
        style: { y: i },
        className: `pointer-events-none absolute -top-2 left-1/2 w-[135%] max-w-none -translate-x-1/2 opacity-90`,
      }),
      (0, O.jsxs)(`div`, {
        className: `relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col items-center px-6 pt-32 text-center`,
        children: [
          (0, O.jsxs)(Q.div, {
            style: { y: a, opacity: o },
            className: `flex flex-col items-center`,
            children: [
              (0, O.jsx)(Q.p, {
                initial: { opacity: 0, y: 14 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2, duration: 0.9 },
                className: `text-gold-soft/90 text-[0.6rem] tracking-[0.5em] uppercase`,
                children: `Together with their families`,
              }),
              (0, O.jsxs)(Q.h1, {
                initial: { opacity: 0, y: 24, filter: `blur(8px)` },
                animate: { opacity: 1, y: 0, filter: `blur(0px)` },
                transition: {
                  delay: 0.4,
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                },
                className: `mt-5 flex flex-col items-center leading-[0.82]`,
                children: [
                  (0, O.jsx)(`span`, {
                    className: `text-gold-foil font-display text-[4.25rem] font-light`,
                    children: $.groom.name,
                  }),
                  (0, O.jsx)(`span`, {
                    className: `font-script text-gold/80 my-1 text-3xl`,
                    children: `and`,
                  }),
                  (0, O.jsx)(`span`, {
                    className: `text-gold-foil font-display text-[4.25rem] font-light`,
                    children: $.bride.name,
                  }),
                ],
              }),
              (0, O.jsx)(Q.div, {
                initial: { opacity: 0, scaleX: 0 },
                animate: { opacity: 1, scaleX: 1 },
                transition: { delay: 1, duration: 0.9 },
                className: `rule-gold mt-7 w-40`,
              }),
              (0, O.jsx)(Q.p, {
                initial: { opacity: 0, y: 14 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 1.15, duration: 0.9 },
                className: `text-ivory/85 mt-5 text-sm tracking-[0.35em] uppercase`,
                children: `03 · 12 · 2026`,
              }),
              (0, O.jsx)(Q.p, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 1.35, duration: 0.9 },
                className: `text-ivory/60 mt-2 text-[0.7rem] tracking-[0.25em] uppercase`,
                children: `Mangaram, Kerala`,
              }),
            ],
          }),
          (0, O.jsx)(Q.img, {
            src: `/images/couple-hero.png`,
            alt: `Watercolour illustration of the couple`,
            width: 1024,
            height: 1408,
            initial: { opacity: 0, y: 40, scale: 0.96 },
            animate: { opacity: 1, y: 0, scale: 1 },
            transition: { delay: 0.7, duration: 1.3, ease: [0.22, 1, 0.36, 1] },
            style: { y: s, scale: c },
            className: `mt-auto w-[88%] max-w-[350px] brightness-110 contrast-105 drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]`,
          }),
        ],
      }),
      (0, O.jsxs)(Q.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.8 },
        style: { opacity: o },
        className: `text-gold/70 absolute bottom-4 z-20 flex flex-col items-center`,
        children: [
          (0, O.jsx)(`span`, {
            className: `text-[0.55rem] tracking-[0.4em] uppercase`,
            children: `Scroll`,
          }),
          (0, O.jsx)(Q.span, {
            animate: { y: [0, 6, 0] },
            transition: { repeat: 1 / 0, duration: 2 },
            children: (0, O.jsx)(qg, { className: `h-4 w-4` }),
          }),
        ],
      }),
    ],
  });
}
function n_({ children: e, speed: t = 40, scaleRange: n, className: r = `` }) {
  let i = (0, b.useRef)(null),
    { scrollYProgress: a } = kg({
      target: i,
      offset: [`start end`, `end start`],
    }),
    o = Lg(a, { stiffness: 90, damping: 22, mass: 0.4 }),
    s = Ng(o, [0, 1], [t, -t]),
    c = Ng(o, [0, 0.5, 1], [n?.[0] ?? 1, n?.[1] ?? 1, n?.[0] ?? 1]);
  return (0, O.jsx)(`div`, {
    ref: i,
    className: r,
    children: (0, O.jsx)(Q.div, { style: { y: s, scale: c }, children: e }),
  });
}
var r_ = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};
function i_({ children: e, delay: t = 0, className: n = `` }) {
  return (0, O.jsx)(Q.div, {
    className: n,
    variants: r_,
    initial: `hidden`,
    whileInView: `show`,
    viewport: { once: !0, amount: 0.25 },
    transition: { delay: t },
    children: e,
  });
}
function a_({ label: e }) {
  return (0, O.jsxs)(`div`, {
    className: `flex items-center justify-center gap-3`,
    children: [
      (0, O.jsx)(`span`, { className: `rule-gold w-16` }),
      e
        ? (0, O.jsx)(`span`, {
            className: `font-sans text-[0.65rem] tracking-[0.42em] text-gold uppercase`,
            children: e,
          })
        : (0, O.jsx)(`span`, { className: `text-gold text-sm`, children: `✦` }),
      (0, O.jsx)(`span`, { className: `rule-gold w-16` }),
    ],
  });
}
function o_({ person: e, role: t, flip: n }) {
  return (0, O.jsx)(i_, {
    className: `relative`,
    children: (0, O.jsxs)(`div`, {
      className: `bg-card/70 border-gold/30 shadow-luxe relative overflow-hidden rounded-[2rem] border p-6 backdrop-blur-sm`,
      children: [
        (0, O.jsx)(`div`, {
          className: `pointer-events-none absolute inset-0 opacity-[0.07]`,
          style: {
            backgroundImage: `url('/images/mandala-texture.jpg')`,
            backgroundSize: `cover`,
          },
        }),
        (0, O.jsxs)(`div`, {
          className: `relative flex flex-col items-center text-center`,
          children: [
            (0, O.jsx)(`div`, {
              className: `from-gold/25 relative h-40 w-40 overflow-hidden rounded-full bg-gradient-to-b to-transparent`,
              children: (0, O.jsx)(`img`, {
                src: e.image,
                alt: e.fullName,
                loading: `lazy`,
                width: 768,
                height: 896,
                className: `h-full w-full object-cover object-top ${n ? `scale-x-[-1]` : ``}`,
              }),
            }),
            (0, O.jsx)(`span`, {
              className: `text-gold mt-5 text-[0.6rem] tracking-[0.45em] uppercase`,
              children: t,
            }),
            (0, O.jsx)(`h3`, {
              className: `text-primary mt-2 text-3xl font-light`,
              children: e.fullName,
            }),
            (0, O.jsx)(`p`, {
              className: `text-muted-foreground mt-1 text-xs tracking-wide`,
              children: e.line,
            }),
            (0, O.jsx)(`span`, { className: `rule-gold my-4 w-20` }),
            (0, O.jsx)(`p`, {
              className: `text-foreground/75 text-sm leading-relaxed`,
              children: e.note,
            }),
          ],
        }),
      ],
    }),
  });
}
function s_() {
  return (0, O.jsxs)(`section`, {
    className: `relative overflow-hidden px-5 py-20`,
    children: [
      (0, O.jsx)(`img`, {
        src: `/images/floral-corner.png`,
        alt: ``,
        "aria-hidden": !0,
        loading: `lazy`,
        className: `pointer-events-none absolute -top-6 -left-10 w-44 opacity-40`,
      }),
      (0, O.jsx)(`img`, {
        src: `/images/floral-corner.png`,
        alt: ``,
        "aria-hidden": !0,
        loading: `lazy`,
        className: `pointer-events-none absolute -right-10 -bottom-6 w-44 rotate-180 opacity-40`,
      }),
      (0, O.jsxs)(`div`, {
        className: `relative mx-auto max-w-md`,
        children: [
          (0, O.jsxs)(i_, {
            className: `text-center`,
            children: [
              (0, O.jsx)(a_, { label: `The Couple` }),
              (0, O.jsx)(`h2`, {
                className: `text-primary mt-5 text-4xl font-light`,
                children: `Two hearts, one thread`,
              }),
              (0, O.jsx)(`p`, {
                className: `text-muted-foreground mx-auto mt-3 max-w-xs text-sm leading-relaxed`,
                children: `Seven vows, seven steps, and a lifetime of ordinary mornings made beautiful.`,
              }),
            ],
          }),
          (0, O.jsxs)(`div`, {
            className: `mt-10 space-y-8`,
            children: [
              (0, O.jsx)(n_, {
                speed: 26,
                children: (0, O.jsx)(o_, {
                  person: $.groom,
                  role: `The Groom`,
                }),
              }),
              (0, O.jsx)(`div`, {
                className: `flex justify-center`,
                children: (0, O.jsx)(`span`, {
                  className: `font-script text-gold animate-float-soft text-5xl`,
                  children: `&`,
                }),
              }),
              (0, O.jsx)(n_, {
                speed: -26,
                children: (0, O.jsx)(o_, {
                  person: $.bride,
                  role: `The Bride`,
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var c_ = new Date($.dateISO).getTime();
function l_() {
  let e = Math.max(0, c_ - Date.now());
  return {
    days: Math.floor(e / 864e5),
    hours: Math.floor((e / 36e5) % 24),
    minutes: Math.floor((e / 6e4) % 60),
    seconds: Math.floor((e / 1e3) % 60),
  };
}
function u_({ value: e, label: t }) {
  let n = String(e).padStart(2, `0`);
  return (0, O.jsxs)(`div`, {
    className: `border-gold/25 bg-emerald-ink/40 relative flex flex-col items-center overflow-hidden rounded-2xl border px-2 py-4 backdrop-blur-sm`,
    children: [
      (0, O.jsx)(`div`, {
        className: `relative h-11 w-full overflow-hidden`,
        children: (0, O.jsx)(Wp, {
          mode: `popLayout`,
          initial: !1,
          children: (0, O.jsx)(
            Q.span,
            {
              initial: { y: `70%`, opacity: 0, filter: `blur(4px)` },
              animate: { y: `0%`, opacity: 1, filter: `blur(0px)` },
              exit: { y: `-70%`, opacity: 0, filter: `blur(4px)` },
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              className: `text-gold-foil font-display absolute inset-0 flex items-center justify-center text-4xl font-light tabular-nums`,
              children: n,
            },
            n,
          ),
        }),
      }),
      (0, O.jsx)(`span`, {
        className: `text-ivory/55 mt-2 text-[0.55rem] tracking-[0.3em] uppercase`,
        children: t,
      }),
    ],
  });
}
function d_() {
  let [e, t] = (0, b.useState)(l_);
  return (
    (0, b.useEffect)(() => {
      let e = setInterval(() => t(l_()), 1e3);
      return () => clearInterval(e);
    }, []),
    (0, O.jsxs)(`section`, {
      className: `bg-emerald-ink relative overflow-hidden px-5 py-20`,
      children: [
        (0, O.jsx)(`div`, {
          className: `pointer-events-none absolute inset-0 opacity-20`,
          style: {
            backgroundImage: `url('/images/mandala-texture.jpg')`,
            backgroundSize: `140%`,
            backgroundPosition: `center`,
          },
        }),
        (0, O.jsx)(`div`, {
          className: `from-emerald-ink via-emerald-ink/60 to-emerald-ink absolute inset-0 bg-gradient-to-b`,
        }),
        (0, O.jsxs)(`div`, {
          className: `relative mx-auto max-w-md text-center`,
          children: [
            (0, O.jsxs)(i_, {
              children: [
                (0, O.jsx)(a_, { label: `Counting down` }),
                (0, O.jsxs)(`h2`, {
                  className: `text-ivory mt-5 text-4xl font-light`,
                  children: [
                    `Until we say `,
                    (0, O.jsx)(`span`, {
                      className: `font-script text-gold-foil`,
                      children: `forever`,
                    }),
                  ],
                }),
              ],
            }),
            (0, O.jsx)(i_, {
              delay: 0.12,
              children: (0, O.jsxs)(`div`, {
                className: `mt-9 grid grid-cols-4 gap-2.5`,
                children: [
                  (0, O.jsx)(u_, { value: e.days, label: `Days` }),
                  (0, O.jsx)(u_, { value: e.hours, label: `Hours` }),
                  (0, O.jsx)(u_, { value: e.minutes, label: `Mins` }),
                  (0, O.jsx)(u_, { value: e.seconds, label: `Secs` }),
                ],
              }),
            }),
            (0, O.jsx)(i_, {
              delay: 0.2,
              children: (0, O.jsx)(`p`, {
                className: `text-ivory/55 mt-6 text-xs tracking-[0.25em] uppercase`,
                children: $.dateLabel,
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function f_(e) {
  return new Date(e).toISOString().replace(/[-:]/g, ``).split(`.`)[0] + `Z`;
}
var icsEscape = (s) => s.replace(/([,;\\])/g, `\\$1`);
function icsEvent(id, start, end, title, location, description) {
  return [
    `BEGIN:VEVENT`,
    `UID:${Date.now()}-${id}@wedding`,
    `DTSTAMP:${f_(new Date().toISOString())}`,
    `DTSTART:${f_(start)}`,
    `DTEND:${f_(end)}`,
    `SUMMARY:${icsEscape(`${$.groom.name} & ${$.bride.name} — ${title}`)}`,
    `LOCATION:${icsEscape(location)}`,
    `DESCRIPTION:${icsEscape(description)}`,
    `END:VEVENT`,
  ];
}
function p_() {
  let e = [
      `BEGIN:VCALENDAR`,
      `VERSION:2.0`,
      `PRODID:-//Wedding Invite//EN`,
      ...icsEvent(
        `wedding`,
        $.dateISO,
        $.endISO,
        `Wedding`,
        `${$.venue.name}, ${$.venue.address}`,
        `With love, we invite you to our wedding.`,
      ),
      ...icsEvent(
        `reception`,
        $.reception.dateISO,
        $.reception.endISO,
        `Reception`,
        $.reception.venue.name,
        `With love, we invite you to our reception.`,
      ),
      `END:VCALENDAR`,
    ].join(`\r
`),
    t = URL.createObjectURL(new Blob([e], { type: `text/calendar` })),
    n = document.createElement(`a`);
  ((n.href = t),
    (n.download = `our-wedding.ics`),
    n.click(),
    URL.revokeObjectURL(t));
}
var m_ = [
  { icon: Qg, label: `The Ceremony`, value: $.ceremonyLabel },
  { icon: Jg, label: `Time`, value: $.timeLabel },
  { icon: Xg, label: `Venue`, value: $.venue.name },
];
function h_() {
  return (0, O.jsx)(`section`, {
    className: `relative px-5 py-20`,
    children: (0, O.jsxs)(`div`, {
      className: `mx-auto max-w-md`,
      children: [
        (0, O.jsxs)(i_, {
          className: `text-center`,
          children: [
            (0, O.jsx)(a_, { label: `When & Where` }),
            (0, O.jsx)(`h2`, {
              className: `text-primary mt-5 text-4xl font-light`,
              children: `The celebration`,
            }),
          ],
        }),
        (0, O.jsx)(i_, {
          delay: 0.1,
          children: (0, O.jsxs)(`div`, {
            className: `border-gold/30 bg-card shadow-luxe mt-8 overflow-hidden rounded-[2rem] border`,
            children: [
              (0, O.jsxs)(`div`, {
                className: `from-primary to-emerald-ink bg-gradient-to-br px-6 py-7 text-center`,
                children: [
                  (0, O.jsx)(`p`, {
                    className: `text-gold/80 text-[0.6rem] tracking-[0.45em] uppercase`,
                    children: `Save the date`,
                  }),
                  (0, O.jsx)(`p`, {
                    className: `text-ivory font-display mt-2 text-5xl font-light`,
                    children: `03`,
                  }),
                  (0, O.jsx)(`p`, {
                    className: `text-ivory/85 text-sm tracking-[0.35em] uppercase`,
                    children: `December 2026`,
                  }),
                ],
              }),
              (0, O.jsx)(`div`, {
                className: `divide-gold/15 divide-y`,
                children: m_.map(({ icon: e, label: t, value: n }) =>
                  (0, O.jsxs)(
                    `div`,
                    {
                      className: `flex items-center gap-4 px-6 py-4`,
                      children: [
                        (0, O.jsx)(`span`, {
                          className: `bg-secondary text-primary grid h-10 w-10 shrink-0 place-items-center rounded-full`,
                          children: (0, O.jsx)(e, { className: `h-4 w-4` }),
                        }),
                        (0, O.jsxs)(`div`, {
                          className: `min-w-0`,
                          children: [
                            (0, O.jsx)(`p`, {
                              className: `text-muted-foreground text-[0.6rem] tracking-[0.3em] uppercase`,
                              children: t,
                            }),
                            (0, O.jsx)(`p`, {
                              className: `text-foreground truncate text-sm`,
                              children: n,
                            }),
                          ],
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
              (0, O.jsx)(`div`, {
                className: `px-6 pt-2 pb-6`,
                children: (0, O.jsxs)(Q.button, {
                  whileTap: { scale: 0.97 },
                  onClick: p_,
                  className: `from-primary to-emerald-ink text-ivory shadow-gold flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r py-4 text-xs tracking-[0.3em] uppercase`,
                  children: [
                    (0, O.jsx)(Kg, { className: `h-4 w-4` }),
                    `Add to calendar`,
                  ],
                }),
              }),
            ],
          }),
        }),
        (0, O.jsx)(i_, {
          delay: 0.16,
          children: (0, O.jsxs)(`div`, {
            className: `border-gold/30 bg-card shadow-luxe mt-6 overflow-hidden rounded-[2rem] border`,
            children: [
              (0, O.jsxs)(`div`, {
                className: `relative`,
                children: [
                  (0, O.jsx)(`img`, {
                    src: `/images/map-preview.jpg`,
                    alt: `Map to ${$.venue.name}`,
                    loading: `lazy`,
                    width: 1024,
                    height: 768,
                    className: `h-48 w-full object-cover`,
                  }),
                  (0, O.jsx)(`div`, {
                    className: `from-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent`,
                  }),
                ],
              }),
              (0, O.jsxs)(`div`, {
                className: `px-6 pt-2 pb-6 text-center`,
                children: [
                  (0, O.jsx)(`p`, {
                    className: `text-primary text-xl`,
                    children: $.venue.name,
                  }),
                  (0, O.jsx)(`p`, {
                    className: `text-muted-foreground mt-1 text-xs`,
                    children: $.venue.address,
                  }),
                  (0, O.jsxs)(Q.a, {
                    whileTap: { scale: 0.97 },
                    href: $.venue.mapUrl,
                    target: `_blank`,
                    rel: `noreferrer`,
                    className: `border-gold/50 text-primary hover:bg-secondary mt-5 inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-xs tracking-[0.3em] uppercase transition-colors`,
                    children: [
                      (0, O.jsx)(Zg, { className: `h-4 w-4` }),
                      `Get directions`,
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, O.jsx)(ReceptionCard, {}),
      ],
    }),
  });
}
function ReceptionCard() {
  let rows = [
    { icon: Jg, label: `Time`, value: $.reception.timeLabel },
    { icon: Xg, label: `Venue`, value: $.reception.venue.name },
  ];
  return (0, O.jsx)(i_, {
    delay: 0.22,
    children: (0, O.jsxs)(`div`, {
      className: `border-gold/30 bg-card shadow-luxe mt-6 overflow-hidden rounded-[2rem] border`,
      children: [
        (0, O.jsxs)(`div`, {
          className: `from-primary to-emerald-ink bg-gradient-to-br px-6 py-7 text-center`,
          children: [
            (0, O.jsx)(`p`, {
              className: `text-gold/80 text-[0.6rem] tracking-[0.45em] uppercase`,
              children: `The Reception`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-ivory font-display mt-2 text-5xl font-light`,
              children: $.reception.day,
            }),
            (0, O.jsx)(`p`, {
              className: `text-ivory/85 text-sm tracking-[0.35em] uppercase`,
              children: $.reception.monthYear,
            }),
          ],
        }),
        (0, O.jsx)(`div`, {
          className: `divide-gold/15 divide-y`,
          children: rows.map(({ icon: e, label: t, value: n }) =>
            (0, O.jsxs)(
              `div`,
              {
                className: `flex items-center gap-4 px-6 py-4`,
                children: [
                  (0, O.jsx)(`span`, {
                    className: `bg-secondary text-primary grid h-10 w-10 shrink-0 place-items-center rounded-full`,
                    children: (0, O.jsx)(e, { className: `h-4 w-4` }),
                  }),
                  (0, O.jsxs)(`div`, {
                    className: `min-w-0`,
                    children: [
                      (0, O.jsx)(`p`, {
                        className: `text-muted-foreground text-[0.6rem] tracking-[0.3em] uppercase`,
                        children: t,
                      }),
                      (0, O.jsx)(`p`, {
                        className: `text-foreground truncate text-sm`,
                        children: n,
                      }),
                    ],
                  }),
                ],
              },
              t,
            ),
          ),
        }),
        (0, O.jsx)(`div`, {
          className: `px-6 pt-2 pb-6 text-center`,
          children: (0, O.jsxs)(Q.a, {
            whileTap: { scale: 0.97 },
            href: $.reception.venue.mapUrl,
            target: `_blank`,
            rel: `noreferrer`,
            className: `border-gold/50 text-primary hover:bg-secondary mt-5 inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-xs tracking-[0.3em] uppercase transition-colors`,
            children: [
              (0, O.jsx)(Zg, { className: `h-4 w-4` }),
              `Get directions`,
            ],
          }),
        }),
      ],
    }),
  });
}
function g_() {
  return (0, O.jsxs)(`footer`, {
    className: `bg-emerald-ink relative overflow-hidden px-5 pt-20 pb-10`,
    children: [
      (0, O.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 opacity-25`,
        style: {
          backgroundImage: `url('/images/mandala-texture.jpg')`,
          backgroundSize: `120%`,
          backgroundPosition: `top center`,
        },
      }),
      (0, O.jsx)($g, { intensity: 0.5 }),
      (0, O.jsx)(`div`, {
        className: `from-emerald-ink/70 via-emerald-ink/85 to-emerald-ink absolute inset-0 bg-gradient-to-b`,
      }),
      (0, O.jsx)(`img`, {
        src: `/images/floral-corner.png`,
        alt: ``,
        "aria-hidden": !0,
        loading: `lazy`,
        className: `pointer-events-none absolute -top-4 -left-8 w-36 opacity-30`,
      }),
      (0, O.jsx)(`img`, {
        src: `/images/floral-corner.png`,
        alt: ``,
        "aria-hidden": !0,
        loading: `lazy`,
        className: `pointer-events-none absolute -top-4 -right-8 w-36 -scale-x-100 opacity-30`,
      }),
      (0, O.jsxs)(`div`, {
        className: `relative mx-auto max-w-md text-center`,
        children: [
          (0, O.jsxs)(i_, {
            children: [
              (0, O.jsx)(a_, { label: `With love` }),
              (0, O.jsx)(`p`, {
                className: `font-script text-gold-foil mt-6 text-4xl leading-snug`,
                children: `Come bless our beginning`,
              }),
              (0, O.jsx)(`p`, {
                className: `text-ivory/70 mx-auto mt-5 max-w-sm text-sm leading-relaxed`,
                children: `Your presence is the only gift we ask for. Bring your laughter, your appetite and your dancing shoes — we have saved a seat, and a story, for you.`,
              }),
            ],
          }),
          (0, O.jsx)(i_, {
            delay: 0.12,
            children: (0, O.jsxs)(`div`, {
              className: `mt-9 flex flex-col items-center`,
              children: [
                (0, O.jsx)(`span`, { className: `rule-gold w-28` }),
                (0, O.jsxs)(`p`, {
                  className: `text-ivory font-display mt-6 text-3xl font-light`,
                  children: [
                    $.groom.name,
                    ` `,
                    (0, O.jsx)(`span`, {
                      className: `font-script text-gold`,
                      children: `&`,
                    }),
                    ` `,
                    $.bride.name,
                  ],
                }),
                (0, O.jsx)(`p`, {
                  className: `text-ivory/50 mt-2 text-[0.6rem] tracking-[0.4em] uppercase`,
                  children: `03 · 12 · 2026 · Mangaram`,
                }),
              ],
            }),
          }),
          (0, O.jsxs)(`p`, {
            className: `text-ivory/35 mt-12 flex items-center justify-center gap-1.5 text-[0.6rem] tracking-[0.3em] uppercase`,
            children: [
              `Made with `,
              (0, O.jsx)(Yg, { className: `text-gold h-3 w-3 fill-current` }),
              ` for our people`,
            ],
          }),
        ],
      }),
      (0, O.jsx)(`div`, {
        className: `text-ivory/50 relative mt-3 text-center text-[10px] uppercase tracking-[0.35em]`,
        style: { paddingBottom: `calc(52px + env(safe-area-inset-bottom))` },
        children: (0, O.jsx)(Credit, {}),
      }),
    ],
  });
}
function __({ onOpen: e }) {
  let [t, n] = (0, b.useState)(!1);
  (0, b.useEffect)(() => preloadMusic(), []);
  return (0, O.jsxs)(Q.div, {
    className: `fixed inset-0 z-50 flex items-center justify-center overflow-hidden`,
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
    children: [
      [-1, 1].map((e) =>
        (0, O.jsxs)(
          Q.div,
          {
            className: `bg-emerald-ink absolute inset-y-0 w-[51%] overflow-hidden`,
            style: { [e === -1 ? `left` : `right`]: 0 },
            animate: t ? { x: `${e * 105}%` } : { x: 0 },
            transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] },
            children: [
              (0, O.jsx)($g, { intensity: 0.55 }),
              (0, O.jsx)(`div`, {
                className: `pointer-events-none absolute inset-0 opacity-20`,
                style: {
                  backgroundImage: `url('/images/mandala-texture.jpg')`,
                  backgroundSize: `cover`,
                  backgroundPosition: e === -1 ? `right center` : `left center`,
                },
              }),
              (0, O.jsx)(`div`, {
                className: `absolute inset-y-0 w-[2px]`,
                style: {
                  [e === -1 ? `right` : `left`]: 0,
                  background: `var(--gradient-gold)`,
                },
              }),
            ],
          },
          e,
        ),
      ),
      (0, O.jsx)(e_, { count: 10 }),
      (0, O.jsx)(Wp, {
        children:
          !t &&
          (0, O.jsxs)(Q.div, {
            className: `relative z-10 flex flex-col items-center px-8 text-center`,
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, scale: 0.9, filter: `blur(6px)` },
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            children: [
              (0, O.jsx)(`span`, {
                className: `text-gold/80 text-[0.55rem] tracking-[0.5em] uppercase`,
                children: `A wedding invitation`,
              }),
              (0, O.jsxs)(`h1`, {
                className: `text-gold-foil font-display mt-5 leading-none font-light`,
                style: { fontSize: `clamp(1.75rem, 9.5vw, 3rem)` },
                children: [
                  $.groom.name,
                  (0, O.jsx)(`span`, {
                    className: `font-script text-gold/80 mx-3 text-3xl`,
                    children: `&`,
                  }),
                  $.bride.name,
                ],
              }),
              (0, O.jsx)(`span`, { className: `rule-gold mt-6 w-32` }),
              (0, O.jsxs)(Q.button, {
                onClick: () => {
                  t || (n(!0), startMusic(), window.setTimeout(e, 1500));
                },
                whileTap: { scale: 0.92 },
                whileHover: { scale: 1.05 },
                className: `group relative mt-12 grid h-28 w-28 place-items-center`,
                "aria-label": `Open the invitation`,
                children: [
                  (0, O.jsx)(Q.span, {
                    className: `border-gold/40 absolute inset-0 rounded-full border`,
                    animate: { scale: [1, 1.28, 1], opacity: [0.7, 0, 0.7] },
                    transition: {
                      repeat: 1 / 0,
                      duration: 2.6,
                      ease: `easeOut`,
                    },
                  }),
                  (0, O.jsx)(Q.span, {
                    className: `shadow-gold grid h-20 w-20 place-items-center rounded-full`,
                    style: { backgroundImage: `var(--gradient-gold)` },
                    animate: { y: [0, -5, 0] },
                    transition: {
                      repeat: 1 / 0,
                      duration: 3.4,
                      ease: `easeInOut`,
                    },
                    children: (0, O.jsxs)(`span`, {
                      className: `font-script text-emerald-ink text-3xl leading-none`,
                      children: [$.groom.name[0], $.bride.name[0]],
                    }),
                  }),
                ],
              }),
              (0, O.jsx)(Q.p, {
                className: `text-ivory/60 mt-8 text-[0.6rem] tracking-[0.4em] uppercase`,
                animate: { opacity: [0.4, 1, 0.4] },
                transition: { repeat: 1 / 0, duration: 2.4 },
                children: `Tap the seal to open`,
              }),
            ],
          }),
      }),
    ],
  });
}
function v_() {
  let { scrollYProgress: e } = kg(),
    t = Lg(e, { stiffness: 120, damping: 26, mass: 0.3 });
  return (0, O.jsx)(Q.div, {
    "aria-hidden": !0,
    className: `fixed top-0 right-0 left-0 z-40 h-[3px] origin-left`,
    style: { scaleX: t, backgroundImage: `var(--gradient-gold)` },
  });
}
function S_() {
  let [e, t] = (0, b.useState)(!1);
  return (
    (0, b.useEffect)(
      () => (
        (document.body.style.overflow = e ? `` : `hidden`),
        () => {
          document.body.style.overflow = ``;
        }
      ),
      [e],
    ),
    (0, O.jsxs)(O.Fragment, {
      children: [
        (0, O.jsx)(Wp, {
          children: !e && (0, O.jsx)(__, { onOpen: () => t(!0) }, `opener`),
        }),
        e && (0, O.jsx)(v_, {}),
        e && (0, O.jsx)(MusicToggle, {}),
        (0, O.jsxs)(Q.main, {
          initial: { opacity: 0, scale: 1.03 },
          animate: e ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 },
          transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
          className: `bg-background mx-auto w-full max-w-[520px] overflow-hidden`,
          children: [
            (0, O.jsx)(t_, {}),
            (0, O.jsx)(s_, {}),
            (0, O.jsx)(d_, {}),
            (0, O.jsx)(h_, {}),
            (0, O.jsx)(g_, {}),
          ],
        }),
      ],
    })
  );
}
export default S_;

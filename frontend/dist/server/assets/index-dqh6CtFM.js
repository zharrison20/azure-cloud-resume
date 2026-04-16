import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-AqqrMaND.js";
import { z } from "./router-DHj2OD0D.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$h = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$h);
const __iconNode$g = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$g);
const __iconNode$f = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$f);
const __iconNode$e = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$e);
const __iconNode$d = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
];
const CodeXml = createLucideIcon("code-xml", __iconNode$d);
const __iconNode$c = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$c);
const __iconNode$b = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$b);
const __iconNode$a = [
  ["path", { d: "M18 19a5 5 0 0 1-5-5v8", key: "sz5oeg" }],
  [
    "path",
    {
      d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",
      key: "1w6njk"
    }
  ],
  ["circle", { cx: "13", cy: "12", r: "2", key: "1j92g6" }],
  ["circle", { cx: "20", cy: "19", r: "2", key: "1obnsp" }]
];
const FolderGit2 = createLucideIcon("folder-git-2", __iconNode$a);
const __iconNode$9 = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode$9);
const __iconNode$8 = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$8);
const __iconNode$7 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$7);
const __iconNode$6 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$6);
const __iconNode$5 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
const Moon = createLucideIcon("moon", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
];
const Music = createLucideIcon("music", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M15 18h-5", key: "95g1m2" }],
  ["path", { d: "M18 14h-8", key: "sponae" }],
  [
    "path",
    {
      d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",
      key: "39pd36"
    }
  ],
  ["rect", { width: "8", height: "4", x: "10", y: "6", rx: "1", key: "aywv1n" }]
];
const Newspaper = createLucideIcon("newspaper", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode);
function ThemeToggle() {
  const { resolvedTheme, setTheme } = z();
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => setMounted(true), []);
  if (!mounted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9" });
  }
  const isDark = resolvedTheme === "dark";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      "aria-label": "Toggle theme",
      onClick: () => setTheme(isDark ? "light" : "dark"),
      className: "inline-flex h-9 w-9 items-center justify-center rounded-full text-nav-foreground/80 transition-colors hover:bg-white/10 hover:text-nav-foreground",
      children: isDark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
    }
  );
}
function Navbar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 w-full bg-nav text-nav-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/", className: "flex items-center gap-2 font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-5 w-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tracking-tight", children: "zharrison" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {})
  ] }) });
}
const avatar = "/assets/avatar-JBcQ4CoM.jpg";
const techBadges = ["Windows Server", "Azure", "Intune", "PowerShell", "SQL", "Python"];
function ProfileHeader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-44 w-44 overflow-hidden rounded-full ring-4 ring-card shadow-lg sm:h-52 sm:w-52", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: avatar,
          alt: "Zachary Harrison profile photo",
          width: 208,
          height: 208,
          className: "h-full w-full object-cover object-[68%_22%] scale-[2.6] origin-[68%_22%]"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute -bottom-2 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-3 w-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AZ-900 & A+ Certified" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center sm:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight sm:text-4xl", children: "Zachary Harrison" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-mono text-muted-foreground", children: "System Administrator · IT Manager" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-foreground/80", children: "IT professional with 10+ years of experience managing infrastructure, leading migrations, and supporting end users across cloud and on-prem environments." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm sm:justify-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "mailto:zharrison20@gmail.com",
            className: "inline-flex items-center gap-1.5 text-primary hover:underline",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "zharrison20@gmail.com" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "tel:+16197339643",
            className: "inline-flex items-center gap-1.5 text-primary hover:underline",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "(619) 733-9643" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Portland, OR" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://github.com/",
            className: "inline-flex items-center gap-1.5 text-primary hover:underline",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GitHub" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://linkedin.com/",
            className: "inline-flex items-center gap-1.5 text-primary hover:underline",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "LinkedIn" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap justify-center gap-2 sm:justify-start", children: techBadges.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground",
          children: t
        },
        t
      )) })
    ] })
  ] }) });
}
const tabs = [
  { id: "overview", label: "Overview", icon: BookOpen, count: null },
  { id: "certifications", label: "Certifications", icon: Award, count: 2 },
  { id: "projects", label: "Notable Work", icon: FolderGit2, count: 4 },
  { id: "blog", label: "Beyond Work", icon: Newspaper, count: null },
  { id: "cv", label: "CV", icon: FileText, count: null }
];
function SectionTabs({ activeTab, onTabChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-10 max-w-6xl border-b border-border px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex gap-1 overflow-x-auto", children: tabs.map((t) => {
    const Icon2 = t.icon;
    const isActive = t.id === activeTab;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => onTabChange(t.id),
        className: `inline-flex shrink-0 items-center gap-2 border-b-2 px-3 py-3 text-sm font-medium transition-colors ${isActive ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-4 w-4" }),
          t.label,
          t.count !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground", children: t.count })
        ]
      },
      t.id
    );
  }) }) });
}
const focus = [
  "Systems Administration",
  "Cloud (Azure / EntraID)",
  "Windows Server & AD",
  "MSP / Helpdesk",
  "Migrations & Deployments",
  "Documentation",
  "Team Training"
];
function AboutCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto mt-6 max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-card p-6 text-card-foreground shadow-sm ring-1 ring-border sm:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base leading-relaxed", children: [
      "I'm an IT professional with",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "10+ years" }),
      " of hands-on experience administering systems for organizations ranging from small businesses to 150-person enterprises."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-foreground/85", children: "My work spans Windows Server & Active Directory, Microsoft 365, Azure / EntraID, Intune, Google Workspace, and Linux — covering everything from day-to-day helpdesk to multi-site migrations, CRM rollouts, and infrastructure documentation." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-foreground/85", children: "Outside of IT I'm a lifelong musician with a background in audio production, which still informs how I approach systems: signal flow, clear documentation, and reliable performance under pressure." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: focus.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground",
        children: f
      },
      f
    )) })
  ] }) });
}
const MONTHS = ["Jan", "Mar", "May", "Jul", "Sep", "Nov"];
function generateData() {
  const out = [];
  let seed = 42;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let i = 0; i < 53 * 7; i++) {
    const r = rand();
    if (r < 0.45) out.push(0);
    else if (r < 0.7) out.push(1);
    else if (r < 0.85) out.push(2);
    else if (r < 0.95) out.push(3);
    else out.push(4);
  }
  return out;
}
const heatClasses = ["bg-heat-0", "bg-heat-1", "bg-heat-2", "bg-heat-3", "bg-heat-4"];
function ActivityHeatmap() {
  const data = reactExports.useMemo(generateData, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mt-10 max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-3 flex items-center gap-2 text-lg font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-5 w-5 text-primary" }),
      "Activity"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-card p-4 ring-1 ring-border sm:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[680px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 grid grid-cols-6 px-1 text-xs text-muted-foreground", children: MONTHS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m }, m)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-flow-col grid-rows-7 gap-[3px]", children: data.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `h-[11px] w-[11px] rounded-[2px] ${heatClasses[v]}`,
          title: `Level ${v}`
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-end gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Less" }),
        heatClasses.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-[11px] w-[11px] rounded-[2px] ${c}` }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "More" })
      ] })
    ] }) }) })
  ] });
}
const groups = [
  {
    title: "Cloud & Identity",
    items: ["Azure", "EntraID", "Azure CSP", "Intune", "Office 365", "Google Workspace"]
  },
  {
    title: "Systems & Infrastructure",
    items: ["Windows Server", "Active Directory", "RDSH / Terminal Server", "Linux", "Networking"]
  },
  {
    title: "Scripting & Data",
    items: ["PowerShell", "Python", "SQL", "Git"]
  },
  {
    title: "Other",
    items: [
      "AZ-900 Certified",
      "CompTIA A+ Certified",
      "AutoCAD",
      "Signal Flow",
      "Audio/Visual Content",
      "Problem Solving"
    ]
  }
];
function SkillsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mt-10 max-w-6xl px-4 pb-16 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-3 flex items-center gap-2 text-lg font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "h-5 w-5 text-primary" }),
      "Technical Skills"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-card p-6 ring-1 ring-border sm:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2", children: groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-muted-foreground", children: g.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: g.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground",
          children: it
        },
        it
      )) })
    ] }, g.title)) }) })
  ] });
}
const certifications = [
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "Active",
    badge: "AZ-900"
  },
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    date: "Active",
    badge: "A+"
  }
];
function CertificationsPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mt-6 max-w-6xl px-4 pb-16 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-4 flex items-center gap-2 text-lg font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5 text-primary" }),
      "Certifications"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: certifications.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-start gap-4 rounded-xl bg-card p-5 ring-1 ring-border",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary", children: c.badge }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-card-foreground", children: c.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
              c.issuer,
              " · ",
              c.date
            ] })
          ] })
        ]
      },
      c.name
    )) })
  ] });
}
const projects = [
  {
    title: "Multi-Tenant MSP Operations",
    description: "Manage IT infrastructure across 40+ client companies with mixed Windows AD, Azure CSP, EntraID, Google Workspace, and RDSH/Terminal Server environments.",
    tech: ["Azure CSP", "EntraID", "Windows AD", "Google Workspace"],
    role: "24x7 I.T. Solutions"
  },
  {
    title: "Internal CRM Platform Rollout",
    description: "Project lead for ASI Hastings' CRM migration: moved data from on-prem SQL Server to cloud, deployed tablets to 120 field workers, and trained 150 employees on the new workflow.",
    tech: ["SQL Server", "Cloud Migration", "Field Deployment", "Training"],
    role: "ASI Hastings Inc."
  },
  {
    title: "Client Onboarding Playbook",
    description: "Built a repeatable onboarding process for new MSP clients — provisioning tools, hardening security baselines, and documenting infrastructure for long-term maintainability.",
    tech: ["Onboarding", "Security", "Documentation", "Process Design"],
    role: "24x7 I.T. Solutions"
  },
  {
    title: "Solar CAD Permitting Support",
    description: "Partnered with the solar department to design and produce CAD drawings used for project permitting submissions.",
    tech: ["AutoCAD", "Cross-Team Collaboration"],
    role: "ASI Hastings Inc."
  }
];
function ProjectsPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mt-6 max-w-6xl px-4 pb-16 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-4 flex items-center gap-2 text-lg font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FolderGit2, { className: "h-5 w-5 text-primary" }),
      "Notable Work"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col rounded-xl bg-card p-5 ring-1 ring-border",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-card-foreground", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] uppercase tracking-wide text-muted-foreground", children: p.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 flex-1 text-xs leading-relaxed text-muted-foreground", children: p.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground",
              children: t
            },
            t
          )) })
        ]
      },
      p.title
    )) })
  ] });
}
function BlogPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mt-6 max-w-6xl px-4 pb-16 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-4 flex items-center gap-2 text-lg font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Newspaper, { className: "h-5 w-5 text-primary" }),
      "Beyond Work"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-card p-6 ring-1 ring-border sm:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-card-foreground", children: "Music & Audio Production" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: "I've been passionate about music since I was a kid — playing in multiple bands growing up and even getting signed to a label for a couple of years. That eventually led to a B.S. in Audio Production, which I now keep alive as a side project. Producing keeps me sharp on signal flow, attention to detail, and shipping work that sounds (and runs) great." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-center text-xs text-muted-foreground", children: "Posts coming soon — this is where I'll share notes on IT, automation, and audio." })
  ] });
}
const experience = [
  {
    role: "System Administrator",
    company: "24x7 I.T. Solutions",
    location: "Portland, OR",
    period: "Apr 2022 – Dec 2025",
    bullets: [
      "Manage I.T. infrastructure across 40+ companies, including Windows AD, Azure CSP, EntraID, Google Workspace, and RDSH/Terminal Server",
      "Troubleshoot issues through the client helpdesk, providing fast support to minimize downtime",
      "Onboard new clients, implementing tools and applications to improve workflow efficiency and security",
      "Document infrastructure, processes, and procedures regularly to maintain accurate records",
      "Contribute to projects including system upgrades, migrations, and deployments",
      "Train new team members on company and client infrastructure and best practices"
    ]
  },
  {
    role: "IT Manager",
    company: "ASI Hastings Inc.",
    location: "San Diego, CA",
    period: "Dec 2012 – Jan 2020",
    bullets: [
      "Project lead for the integration of a new internal CRM platform: migrated data from SQL Server to cloud-based software, deployed tablets to 120 field workers, and trained 150 employees on the new system",
      "Managed all on-site and remote IT needs including helpdesk, Windows Server, Active Directory, workstation installation/upkeep, and phone & security vendor relationships",
      "Created Excel spreadsheets for other departments to track performance and sales",
      "Assisted the solar department with the design and building of CAD drawings for project permitting"
    ]
  },
  {
    role: "Event Technician",
    company: "The Museum of Contemporary Art",
    location: "San Diego, CA",
    period: "Sep 2015 – Mar 2016",
    bullets: [
      "Ran all audio/visual needs for events at the museum auditorium — plays, concerts, lectures, weddings, and art showings",
      "Worked closely with performing talent and directors to follow lighting and audio cues"
    ]
  }
];
const education = [
  {
    degree: "B.S. Audio Production",
    school: "The Art Institute of CA – San Diego",
    year: "Jun 2015",
    location: "San Diego, CA"
  }
];
function CVPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mt-6 max-w-6xl px-4 pb-16 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "flex items-center gap-2 text-lg font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5 text-primary" }),
        "Curriculum Vitae"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
        "Download PDF"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-card p-6 ring-1 ring-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 text-sm font-semibold text-card-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4 text-primary" }),
          "Experience"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-6", children: experience.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-l-2 border-border pl-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-card-foreground", children: e.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-xs text-muted-foreground", children: [
            e.company,
            " · ",
            e.location,
            " · ",
            e.period
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1", children: e.bullets.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs leading-relaxed text-foreground/80", children: [
            "• ",
            b
          ] }, i)) })
        ] }, e.role + e.company)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-card p-6 ring-1 ring-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 text-sm font-semibold text-card-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4 w-4 text-primary" }),
          "Education"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: education.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-l-2 border-border pl-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-card-foreground", children: e.degree }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-xs text-muted-foreground", children: [
            e.school,
            " · ",
            e.location,
            " · ",
            e.year
          ] })
        ] }, e.degree)) })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 py-6 text-center text-sm text-muted-foreground sm:px-6", children: [
    "© ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " Zachary Harrison. Built with care."
  ] }) });
}
function Index() {
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTabs, { activeTab, onTabChange: setActiveTab }),
      activeTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AboutCard, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActivityHeatmap, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsSection, {})
      ] }),
      activeTab === "certifications" && /* @__PURE__ */ jsxRuntimeExports.jsx(CertificationsPanel, {}),
      activeTab === "projects" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsPanel, {}),
      activeTab === "blog" && /* @__PURE__ */ jsxRuntimeExports.jsx(BlogPanel, {}),
      activeTab === "cv" && /* @__PURE__ */ jsxRuntimeExports.jsx(CVPanel, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};

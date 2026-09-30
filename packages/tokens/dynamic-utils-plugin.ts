import type { Plugin } from 'rollup';
import type { ViteDevServer } from 'vite';

interface UtilityPattern {
  name: string;
  regex: RegExp;
  generate: (val: string, match: RegExpMatchArray) => string;
}

export default function DynamicUtilsPlugin(): Plugin {
  const virtualModuleId = 'virtual:dynamic-utils.css';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;
  const generatedStyles = new Map<string, string>();
  let viteServer: ViteDevServer | null = null;

  const patterns: UtilityPattern[] = [
    {
      name: 'border-arbitrary',
      regex: /bd-\[(#[a-fA-F0-9]{3,8}|rgba?\(.*?\)|hsla?\(.*?\)|[a-zA-Z]+)\]/,
      generate: (val) => {
        return `border-color: ${val} !important; border-style: solid !important;`;
      }
    },
    {
      name: 'background-arbitrary',
      regex: /bg-\[(#[a-fA-F0-9]{3,8}|rgba?\(.*?\)|hsla?\(.*?\)|[a-zA-Z]+)\]/,
      generate: (val) => {
        return `background-color: ${val} !important;`;
      }
    },
    {
      name: 'text-arbitrary',
      regex: /tx-\[(#[a-fA-F0-9]{3,8}|rgba?\(.*?\)|hsla?\(.*?\)|[a-zA-Z]+)\]/,
      generate: (val) => {
        return `color: ${val} !important;`;
      }
    },
    {
      name: 'list-image-arbitrary',
      regex: /list-image-\[([^\]]+)\]/,
      generate: (val) => {
        
        return `list-style-image: ${val} !important;`;
      }
    },
    {
      name: 'transition',
      regex: /transition-\[([^\]]+)\]/,
      generate: (val) => {
        const property = val.trim().startsWith('--') ? `var(${val.trim()})` : val.replace(/\s/g, '');
        return `
          transition-property: ${property} !important;
          transition-timing-function: var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)) !important;
          transition-duration: var(--default-transition-duration, 150ms) !important;
        `;
      }
    },
    {
      name: 'duration',
      regex: /duration-\[([^\]]+)\]/,
      generate: (val) => `transition-duration: ${val} !important;`
    },
    {
      name: 'delay',
      regex: /delay-\[([^\]]+)\]/,
      generate: (val) => `transition-delay: ${val} !important;`
    },
    {
      name: 'ease',
      regex: /ease-\[([^\]]+)\]/,
      generate: (val) => `transition-timing-function: ${val} !important;`
    },
    {
      name: 'scale',
      regex: /scale-\[([\d.]+)\]/,
      generate: (val) => `transform: scale(${val}) !important;`
    },
    {
      name: 'scale-x',
      regex: /scale-x-\[([^\]]+)\]/,
      generate: (val) => `transform: scale(${val}, 1) !important;`
    },
    {
      name: 'scale-y',
      regex: /scale-y-\[([^\]]+)\]/,
      generate: (val) => `transform: scale(1, ${val}) !important;`
    },
    {
      name: 'scale-z',
      regex: /scale-z-\[([^\]]+)\]/,
      generate: (val) => `transform: scale3d(1, 1, ${val}) !important;`
    },
    {
      name: 'rotate',
      regex: /rotate-\[([^\]]+)\]/,
      generate: (val) => `transform: rotate(${val}) !important;`
    },
    
     {
  name: 'rotate-x',
  regex: /rotate-x-\[([^\]]+)\]/,
  generate: (val) => `transform: rotateX(${val}) rotateY(0deg) !important;`
},
{
  name: 'rotate-y',
  regex: /rotate-y-\[([^\]]+)\]/,
  generate: (val) => `transform: rotateX(0deg) rotateY(${val}) !important;`
},
{
  name: 'rotate-z',
  regex: /rotate-z-\[([^\]]+)\]/,
  generate: (val) => `transform: rotateX(0deg) rotateY(0deg) rotateZ(${val}) !important;`
},
{
  name: 'translate',
  regex: /^translate-\[([^\]]+)\]$/,
  generate: (val) => `transform: translate(${val}, ${val}) !important; `
},
{
  name: 'translate-x',
  regex: /translate-x-\[([^\]]+)\]/,
  generate: (val) => `
    translate: ${val} 0 !important;
  `
},
{
  name: 'translate-y',
  regex: /translate-y-\[([^\]]+)\]/,
  generate: (val) => `
    translate: 0 ${val} !important;
  `
},
{
  name: 'translate-z',
  regex: /translate-z-\[([^\]]+)\]/,
  generate: (val) => `
    translate: 0 0 ${val} !important;
  `
},
    {
      name: 'skew',
      regex: /skew-\[([^\]]+)\]/,
      generate: (val) => `transform: skewX(${val}) skewY(${val}) !important;`
    },
    {
      name: 'skew-x',
      regex: /skew-x-\[([^\]]+)\]/,
      generate: (val) => `transform: skewX(${val}) !important;`
    },
    {
      name: 'skew-y',
      regex: /skew-y-\[([^\]]+)\]/,
      generate: (val) => `transform: skewY(${val}) !important;`
    },

    {
       name: 'origin',
       regex: /^origin-\[([^\]]+)\]$/,
       generate: (val) => {
       const formatted = val.replace(/_/g, ' ');
       return `transform-origin: ${formatted} !important;`;
  }
},
   
  ];

  const variants = ['hover', 'focus', 'active'];

  return {
    name: 'rollup-plugin-dynamic-utils',

    // @ts-ignore - Vite specific hook partially compatible with Rollup Plugin type
    configureServer(server: ViteDevServer) {
      viteServer = server;
    },

    resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
      return null;
    },

    load(id: string) {
      if (id === resolvedVirtualModuleId) {
        const css = Array.from(generatedStyles.values()).join('\n');
        return css;
      }
      return null;
    },

    transform(code: string, id: string) {
      const cleanId = id.split('?')[0];
      if (!cleanId.endsWith('.tsx') && !cleanId.endsWith('.ts')) return null;

      let changed = false;

      // Extract potential class names (simple split by quotes)
      const matches = code.match(/["'`]([^"'`]+)["'`]/g);
      if (matches) {
        for (const match of matches) {
          const content = match.slice(1, -1);
          const classes = content.split(/\s+/);

          for (const cls of classes) {
            if (!cls) continue;
            if (generatedStyles.has(cls)) continue;

            let targetClass = cls;
            let activeVariant = '';

            for (const v of variants) {
              if (cls.startsWith(`${v}:`)) {
                activeVariant = v;
                targetClass = cls.slice(v.length + 1);
                break;
              }
            }

            for (const p of patterns) {
              const patternMatch = targetClass.match(p.regex);
              if (patternMatch) {
                const val = patternMatch[1];
                const safeClassName = cls.replace(/[\[\]#(),:%.]/g, '\\$&');
                const rule = `.${safeClassName}${activeVariant ? ':' + activeVariant : ''} { ${p.generate(val, patternMatch)} }`;

                generatedStyles.set(cls, rule);
                changed = true;
                break;
              }
            }
          }
        }
      }

      if (changed && viteServer) {
        const mod = viteServer.moduleGraph.getModuleById(resolvedVirtualModuleId);
        if (mod) {
          viteServer.moduleGraph.invalidateModule(mod);
          viteServer.ws.send({
            type: 'full-reload',
            path: '*'
          });
        }
      }

      return null;
    }
  };
}


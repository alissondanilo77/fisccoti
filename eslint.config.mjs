import { defineConfig, globalIgnores } from "eslint/config";
// NOTE: Keep ESLint config minimal to avoid runtime issues across eslint-config-next versions.
// Next's config provides the recommended rules for Next.js apps.
import next from "eslint-config-next";

const eslintConfig = defineConfig([
  ...(Array.isArray(next) ? next : [next]),
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

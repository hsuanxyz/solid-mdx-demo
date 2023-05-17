import { resolve } from "path";
import solid from "solid-start/vite";
import { defineConfig } from "vite";
import solidStyled from "vite-plugin-solid-styled";
import mdx from "solid-start-mdx";

export default defineConfig({
  plugins: [
    await mdx(),
    solid({
      rootEntry: resolve("src/root.tsx"),
      extensions: [".mdx", ".md"],
      islandsRouter: true,
      islands: true,
      ssr: true,
    }),
    solidStyled({
      filter: {
        include: "src/**/*.tsx",
        exclude: "node_modules/**/*.{ts,js}",
      },
    }),
  ]
});

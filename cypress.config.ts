// import { defineConfig } from "cypress"

// export default defineConfig({
//   projectId: 'zfkm4y',
//   component: {
//     devServer: {
//       framework: "react",
//       bundler: "vite"
//     }
//   }
// })

import { defineConfig } from "cypress"

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      // optionally pass in vite config
      // or a function - the result is merged with
      // any `vite.config` file that is detected
      viteConfig: async () => {
        // ... do things ...
      }
    }
  }
})

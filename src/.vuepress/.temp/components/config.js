import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "I:/Desktop/Halo-Theme-Hao-Docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.172_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "I:/Desktop/Halo-Theme-Hao-Docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.172_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "I:/Desktop/Halo-Theme-Hao-Docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.172_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "I:/Desktop/Halo-Theme-Hao-Docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.172_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "I:/Desktop/Halo-Theme-Hao-Docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.172_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


import "I:/Desktop/Halo-Theme-Hao-Docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.172_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
      useStyleTag(`\
      @import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
      `);
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});

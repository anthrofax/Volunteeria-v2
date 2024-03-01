import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'black1': '#26292B',
      'black2': '#2E3239',
      'black3': '#2C2F32',
      'purple1': '#5F7ADB',
      'purple2': '#A2B2EE',
      'palewhite': '#CACACA',
      'white2': '#F3F5FA',
    },
    fontFamily: {
      'inria': "Inria",
      'poppins':'Poppins'
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;

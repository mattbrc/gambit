/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    // themes: ["light"],
    themes: [
      {
        mytheme: {
          primary: "#75FBCD",
          secondary: "#F000B8",
          accent: "#75FBCD",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      accentGreen: "#68CABE",
      agGreen: "#75FBCD",
      agGray: "#31363F",
      borderGray: "	#e2e8f0",
      red: "#f87171",
      white: "#ffffff",
    },
    extend: {
      backgroundImage: {
        my_image: "url('../public/enter.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

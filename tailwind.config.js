/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        limitation: "1246px",
      },
      height: {
        nav_item: "42px",
      },
      spacing: {
        "22px": "22px",
        "30px": "30px",
      },
      fontSize: {
        "11.5px": "11.5px",
        "22px": "22px",
        "40px": "40px",
      },
      lineHeight: {
        "22px": "22px",
        "42px": "42px",
      },
      borderRadius: {
        "11.5px": "11.5px",
      },
      colors: {
        background: "var(--background)",
        swiper_bg: "var(--swiper-bg)",
        gray: "var(--gray)",
        light_gray: "var(--light-gray)",
        title_gray: "var(--title-gray)",
        description_blue: "var(--description-blue)",
        menu_text_gray: "var(--menu-text-gray)",
        dark: "var(--dark)",
        light_button_hover: "var(--light-button-hover)",
        medium_button_hover: "var(--medium-button-hover)",
        dark_btn_hover: "var(--dark-btn-hover)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};

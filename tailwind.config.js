/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors:{
        input:"#EBEBEB",
        buttuns: "#3772FF",
        paragraph: "#737373"
      },
      fontFamily:{
        inter: ["inter"]
      },
      width:{
        largura_input: "644px",
        title_apresentation: "576px",
        title_obras: "200px"
      },
      height:{
        altura_input: "40px"  
      },
      margin:{
        page: "346px",
        title_input_header:"233px",
        input_button_header: "104px",
        header_apresentation: "107px",
        title_art: "256px"
      }
    },
  },
  plugins: [],
}

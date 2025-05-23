/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable prefer-const */
import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		animation: {
  			aurora: 'aurora 60s linear infinite',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
  			move: 'move 5s linear infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			meteor: 'meteor 5s linear infinite'
  		},
  		keyframes: {
  			aurora: {
  				from: {
  					backgroundPosition: '50% 50%, 50% 50%'
  				},
  				to: {
  					backgroundPosition: '350% 50%, 350% 50%'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			move: {
  				'0%': {
  					transform: 'translateX(-200px)'
  				},
  				'100%': {
  					transform: 'translateX(200px)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			meteor: {
  				'0%': {
  					transform: 'rotate(var(--angle)) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(var(--angle)) translateX(-500px)',
  					opacity: '0'
  				}
  			}
  		},
  		colors: {
  			light: {
  				'200': '#E8E9E9',
  				'300': '#FAFBFD'
  			},
  			dark: {
  				'200': '#0D0F10',
  				'300': '#131619',
  				'400': '#1A1D21',
  				'500': '#363A3D',
  				'600': '#76828D',
  				'700': '#ABB8C4'
  			},
  			blueprimary: '#1b4974',
  			bluesecondary: '#0762D9',
  			link_inactive: '#7E8AB1',
  			link_active: '#204B78',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			button: {
  				primary: '#204B78'
  			},
  			text: {
  				primary: '#204B78'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			Poppins: 'Poppins'
  		},
  		fontSize: {
  			paragraph: [
  				'16px',
  				'32px'
  			],
  			'heading-1': [
  				'40px',
  				'50px'
  			],
  			'heading-2': [
  				'32px',
  				'50px'
  			],
  			'heading-3': [
  				'18px',
  				'32px'
  			],
  			'admin-title': [
  				'34px',
  				'42px'
  			],
  			'card-admin': [
  				'24px',
  				'42px'
  			]
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    // require("tailwindcss-debug-screens"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],

  // darkMode: ["class"],
  // content: [
  // 	"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  // 	"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  // 	"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  // theme: {
  // 	container: {
  // 		center: true,
  // 		padding: '2rem',
  // 		screens: {
  // 			'2xl': '1400px'
  // 		}
  // 	},
  // 	extend: {
  // 		animation: {
  // 			aurora: 'aurora 60s linear infinite',
  // 			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
  // 			move: 'move 5s linear infinite',
  // 			'accordion-down': 'accordion-down 0.2s ease-out',
  // 			'accordion-up': 'accordion-up 0.2s ease-out'
  // 		},
  // 		keyframes: {
  // 			aurora: {
  // 				from: {
  // 					backgroundPosition: '50% 50%, 50% 50%'
  // 				},
  // 				to: {
  // 					backgroundPosition: '350% 50%, 350% 50%'
  // 				}
  // 			},
  // 			'border-beam': {
  // 				'100%': {
  // 					'offset-distance': '100%'
  // 				}
  // 			},
  // 			move: {
  // 				'0%': {
  // 					transform: 'translateX(-200px)'
  // 				},
  // 				'100%': {
  // 					transform: 'translateX(200px)'
  // 				}
  // 			},
  // 			'accordion-down': {
  // 				from: {
  // 					height: '0'
  // 				},
  // 				to: {
  // 					height: 'var(--radix-accordion-content-height)'
  // 				}
  // 			},
  // 			'accordion-up': {
  // 				from: {
  // 					height: 'var(--radix-accordion-content-height)'
  // 				},
  // 				to: {
  // 					height: '0'
  // 				}
  // 			}
  // 		},
  // 		colors: {
  // 			dark: {
  // 				'100': '#04050C',
  // 				'200': '#131524'
  // 			},
  // 			blueprimary: '#1b4974',
  // 			bluesecondary: '#0762D9',
  // 			link_inactive:"#7E8AB1",
  // 			link_active:"#204B78",
  // 			background: 'hsl(var(--background))',
  // 			foreground: 'hsl(var(--foreground))',
  // 			card: {
  // 				DEFAULT: 'hsl(var(--card))',
  // 				foreground: 'hsl(var(--card-foreground))'
  // 			},
  // 			popover: {
  // 				DEFAULT: 'hsl(var(--popover))',
  // 				foreground: 'hsl(var(--popover-foreground))'
  // 			},
  // 			primary: {
  // 				DEFAULT: 'hsl(var(--primary))',
  // 				foreground: 'hsl(var(--primary-foreground))'
  // 			},
  // 			secondary: {
  // 				DEFAULT: 'hsl(var(--secondary))',
  // 				foreground: 'hsl(var(--secondary-foreground))'
  // 			},
  // 			muted: {
  // 				DEFAULT: 'hsl(var(--muted))',
  // 				foreground: 'hsl(var(--muted-foreground))'
  // 			},
  // 			accent: {
  // 				DEFAULT: 'hsl(var(--accent))',
  // 				foreground: 'hsl(var(--accent-foreground))'
  // 			},
  // 			destructive: {
  // 				DEFAULT: 'hsl(var(--destructive))',
  // 				foreground: 'hsl(var(--destructive-foreground))'
  // 			},
  // 			border: 'hsl(var(--border))',
  // 			input: 'hsl(var(--input))',
  // 			ring: 'hsl(var(--ring))',
  // 			chart: {
  // 				'1': 'hsl(var(--chart-1))',
  // 				'2': 'hsl(var(--chart-2))',
  // 				'3': 'hsl(var(--chart-3))',
  // 				'4': 'hsl(var(--chart-4))',
  // 				'5': 'hsl(var(--chart-5))'
  // 			},
  // 			sidebar: {
  // 				DEFAULT: 'hsl(var(--sidebar-background))',
  // 				foreground: 'hsl(var(--sidebar-foreground))',
  // 				primary: 'hsl(var(--sidebar-primary))',
  // 				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  // 				accent: 'hsl(var(--sidebar-accent))',
  // 				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  // 				border: 'hsl(var(--sidebar-border))',
  // 				ring: 'hsl(var(--sidebar-ring))'
  // 			},
  // 			button: {
  // 				primary: "#204B78"
  // 			},
  // 			text:{
  // 				primary:"#204B78"
  // 			}
  // 		},
  // 		borderRadius: {
  // 			lg: 'var(--radius)',
  // 			md: 'calc(var(--radius) - 2px)',
  // 			sm: 'calc(var(--radius) - 4px)'
  // 		},
  // 		fontFamily: {
  // 			Poppins: "Poppins"
  // 		},
  // 		fontSize:{
  // 			"paragraph":['16px','32px'],
  // 			"heading-1":['40px','50px'],
  // 			"heading-2":['32px','50px'],
  // 			"heading-3":['18px','32px'],
  // 			// "admin-title":['34px','42px'],
  // 			"admin-title":['28px','34px'],
  // 			"card-admin":['24px','42px'],
  // 		}
  // 	}
  // },
  // plugins: [
  // 	require("tailwindcss-animate"),
  // 	// require("tailwindcss-debug-screens"),
  // 	addVariablesForColors,
  // 	function ({ matchUtilities, theme }: any) {
  // 		matchUtilities(
  // 			{
  // 				"bg-grid": (value: any) => ({
  // 					backgroundImage: `url("${svgToDataUri(
  // 						`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
  // 					)}")`,
  // 				}),
  // 				"bg-grid-small": (value: any) => ({
  // 					backgroundImage: `url("${svgToDataUri(
  // 						`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
  // 					)}")`,
  // 				}),
  // 				"bg-dot": (value: any) => ({
  // 					backgroundImage: `url("${svgToDataUri(
  // 						`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
  // 					)}")`,
  // 				}),
  // 			},
  // 			{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
  // 		);
  // 	},
  // ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

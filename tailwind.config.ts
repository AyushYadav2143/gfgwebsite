
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
				// Green theme colors
				gfg: {
					DEFAULT: '#308D46',
					light: '#4CAF50',
					dark: '#1B5E20',
					accent: '#A5D6A7',
					muted: '#E8F5E9'
				},
				// Cyberpunk theme colors
				cyber: {
					dark: '#1A1F2C',
					purple: '#8B5CF6',
					pink: '#D946EF',
					orange: '#F97316',
					blue: '#1EAEDB',
					green: '#39FF14'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
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
				'neon-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14'
					},
					'50%': {
						boxShadow: '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14'
					}
				},
				'glitch': {
					'0%, 100%': {
						transform: 'translate(0)'
					},
					'20%': {
						transform: 'translate(-5px, 5px)'
					},
					'40%': {
						transform: 'translate(-5px, -5px)'
					},
					'60%': {
						transform: 'translate(5px, 5px)'
					},
					'80%': {
						transform: 'translate(5px, -5px)'
					}
				},
				'scanlines': {
					'0%': {
						backgroundPosition: '0 0'
					},
					'100%': {
						backgroundPosition: '0 100%'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neon-pulse': 'neon-pulse 2s infinite',
				'glitch': 'glitch 0.3s infinite',
				'scanlines': 'scanlines 8s linear infinite',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-in': 'slide-in 0.5s ease-out forwards'
			},
			backgroundImage: {
				'cyber-grid': "linear-gradient(rgba(16, 16, 28, 0.8), rgba(16, 16, 28, 0.8)), url('/lovable-uploads/1eacc20e-3096-4ce6-8cac-5d904a63e2f2.png')",
				'scanline': "linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.2) 51%)",
				'gfg-pattern': "radial-gradient(#4CAF50 1px, transparent 1px)", 
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Pretendard가 로드되지 않아도 한글이 깨지지 않도록 시스템 폰트를 대체로 둠
        sans: ['Pretendard Variable', 'Pretendard', 'system-ui', 'sans-serif'],
      },
      colors: {
        // 학술 사이트다운 차분한 녹색. 700 이상이면 흰 배경 위에서 충분한 대비 확보
        brand: {
          50: '#f0f7f2', 100: '#dcede1', 200: '#bbdac4', 500: '#3f8a5a',
          600: '#2f7348', 700: '#265d3b', 800: '#204a31', 900: '#1b3d2a',
        },
      },
    },
  },
  plugins: [],
}

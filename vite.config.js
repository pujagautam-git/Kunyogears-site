// telemko@deskgooliveserver:~/kunyo$ cat vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load env file based on current mode
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_PORT) || 5173, // fallback to default
      host: true,
    },
  }
})
// telemko@deskgooliveserver:~/kunyo$
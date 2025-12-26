module.exports = {
  apps: [
    {
      name: 'kunyo-dev',
      script: 'npm',
      args: 'run dev',
      cwd: '/home/telemko/kunyo',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
module.exports = {
  apps: [
    {
      name: 'Delta Beverages',
      port: '3004',
      exec_mode: 'cluster',
      instances: '1',
      script: './.output/server/index.mjs' ,
      env: {
        NODE_ENV: 'production',
        JWT_SECRET: 'SIL325325zZZxsCdvdhvlV43Sprofml'
      },
      env_production: {
        NODE_ENV: 'production',
        JWT_SECRET: 'SIL325325zZZxsCdvdhvlV43Sprofml'
      }
    }
  ]
}
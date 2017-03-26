module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: "vue",
      script: "server.js",
      watch: false,
      // instances: 2,
      // exec_mode: "cluster",
      ignore_watch: ["node_modules"],
      env: {
        NODE_ENV: "production"
      },
      env_production: {
        NODE_ENV: "production"
      },
      env_dev: {
        NODE_ENV: "development"
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: "root",
      host: "47.92.7.204:22",
      ref: "origin/master",
      repo: "git@github.com:lc8882972/vue.git",
      path: "/var/www/production",
      "post-deploy": "yarn install && yarn run build && pm2 startOrRestart ecosystem.config.js --env production"
    }
  }
}
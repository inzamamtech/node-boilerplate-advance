module.exports = {
  apps: [
    {
      name: "meetup",
      script: "bin/www",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
  deploy: {
    production: {
      user: "nodejs",
      host: "meetup.demo.khan.io",
      ref: "origin/master",
      repo: "https://github.com/danielkhan/linkedin-meetup-sample",
      path: "/home/nodejs/deploy",
      "post-deploy":
        "cp ../.env ./ && npm install && pm2 startOrRestart ecosystem.config.js --env production",
    },
  },
};

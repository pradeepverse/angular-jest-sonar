const gulp = require('gulp');
const scanner = require('sonarqube-scanner');
require('dotenv').config();
const SONAR_TOKEN = process.env.SONAR_TOKEN;
gulp.task('sonar', function (callback) {
    scanner(
        {
            "serverUrl": "http://localhost:9000/",
            "options": {
                "sonar.projectName": "angular-sonar-demo",
                "sonar.projectKey": "angular-sonar-demo",
                "sonar.token": SONAR_TOKEN,
                "sonar.javascript.lcov.reportPaths": "coverge/lcov.info",
                "sonar.qualitygate.wait": "true"
            }
        },
        callback
    );
});
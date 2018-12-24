pipeline {
    agent {
        docker {
            image 'node:8.11.3' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Kill before') {
            steps {
                sh './jenkins/scripts/checkandkill.sh'
            }
        }
        stage('Build') { 
            steps {
                sh 'node --version'
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
            }
        }
    }
}
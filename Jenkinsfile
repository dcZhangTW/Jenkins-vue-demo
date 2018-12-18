pipeline {
    agent {
        docker {
            image 'node:8.11.3' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'node --version'
                sh 'npm install' 
            }
        }
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Pack') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Delploy') {
            steps {
                sh 'npm run start'
            }
        }
    }
}
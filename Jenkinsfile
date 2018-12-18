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
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/kill.sh'
            }
        }
    }
}
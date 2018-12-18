pipeline {
  agent {
    docker { image 'node:7-alpine' }
  }

  stages {
    stage('Lint') {
      steps {
        sh 'node --version'
        sh 'npm install'
        sh 'npm run lint'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
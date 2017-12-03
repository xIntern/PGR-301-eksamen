pipeline {
    agent any

    tools {
        nodejs "NodeJS8"
    }

    stages {
        stage('Build') {
            steps {
            	sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
pipeline {
    agent any

    tools {
        nodejs "NodeJS8"
    }

    stages {
        stage('Build') {
            steps {
                sh 'cd ./app'
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
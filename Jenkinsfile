pipeline {
    agent any

    tools {
        nodejs "NodeJS8"
    }

    stages {
        stage('Install packages') {
            steps {
                sh('cd app')
                sh 'ls'
            	sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
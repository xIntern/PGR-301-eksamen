pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
            	sh 'yarn'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
pipeline {
    agent any

    tools {
        nodejs "NodeJS8"
    }

    stages {
        stage('Install packages') {
            steps {
            	sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build app') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Build docker image') {
            app = docker.build("waaand14/pg301")
        }
        stage('Push image') {
            docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                app.push("${env.BUILD_NUMBER}")
                app.push("latest")
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
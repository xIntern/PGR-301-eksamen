pipeline {
    agent any

    tools {
        nodejs "NodeJS"
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
            steps {
                // echo 'Building...'
                script {
                    // app = docker.build("eksamen")
                    def app = docker.build "waaand14/pgr301:${env.BUILD_TAG}"
                }
                // sh 'docker build -t eksamen .'
            }
        }
        stage('Push image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

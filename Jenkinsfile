pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Install npm packages') {
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
        stage('Build and push docker image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        def app = docker.build "waaand14/pgr301"
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    }
                }
            }
        }
        stage('Create GC Compute Engine') {
            steps {
                sh 'ansible-playbook ansible/vm.yml'
            }
        }
        stage('Set up Compute Engine env') {
            steps {
                // sh 'ansible-playbook ansible/env.yml'
                echo 'Set up Compute Engine env'
            }
        }
    }
}

pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Make docker available') {
            steps {
                sh 'sudo chmod 777 /var/run/docker.sock'
            }
        }
        stage('install ansible') {
            steps {
                sh 'sudo apt-get update'
                sh 'sudo apt-get install software-properties-common'
                sh 'sudo apt-add-repository ppa:ansible/ansible'
                sh 'sudo apt-get update'
                sh 'sudo apt-get install ansible'
            }
        }
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
                sh 'ansible-playbook ansible/env.yml'
            }
        }
    }
}

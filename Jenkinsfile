pipeline {
    agent any 

    tools {nodejs "node"}

    stages{
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('test'){
            steps {
                bat 'npm test'
            }
        }
        stage('Deploy'){
            steps {
                bat 'npm install'
            }
        }
    }
}

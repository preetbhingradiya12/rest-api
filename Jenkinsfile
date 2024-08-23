pipeline { 
    agent any
    environment {
        PATH = "/home/crawlapps/.nvm/versions/node/v20.12.0/bin:${env.PATH}"
    }
    stages{
        stage("Checkout"){
            steps{
                checkout scm
            }
        }

        stage('Print Environment') {
            steps { 
                sh 'which node'
                sh 'which npm'
            }
        }

        stage('Update npm') {
            steps {
                sh 'npm install -g npm@latest'
            }
        }

        stage("Test"){
            steps{
                echo 'Testing...'
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
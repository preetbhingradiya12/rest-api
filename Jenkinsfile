pipeline { 
    agent any
    stages{
        stage("Checkout"){
            steps{
                checkout scm
            }
        }

        stage('Update npm') {
            steps {
                // Update npm to the latest version
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
pipeline { 
    agent any
    stages{
        stage("checkout"){
            steps{
                checkout scm
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
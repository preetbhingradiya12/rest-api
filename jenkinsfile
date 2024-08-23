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
                sh 'sudo apt install npm'
                sh 'npm test'
            }
        }
    }
}
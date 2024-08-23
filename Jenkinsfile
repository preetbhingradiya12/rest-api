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
                sh '''
                echo "Updating npm to the latest version"
                npm install -g npm@latest
                '''
            }
        }


        stage("Test") {
            steps {
                sh '''
                source /home/crawlapps/.nvm/nvm.sh
                echo 'Testing...'
                echo "Installing dependencies"
                npm install
                echo "Running tests"
                npm test
                '''
            }
        }
    }
}
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
                script {
                    try {
                        sh '''
                        echo "Node version:"
                        node --version
                        echo "NPM version:"
                        npm --version
                        '''
                    } catch (Exception e) {
                        echo "Error in Print Environment stage: ${e.getMessage()}"
                        throw e
                    }
                }
            }
        }


        stage("Test") {
            steps {
                script {
                    try {
                        sh '''
                        source /home/crawlapps/.nvm/nvm.sh
                        echo 'Testing...'
                        echo "Installing dependencies"
                        npm install --verbose
                        echo "Running tests"
                        npm test --verbose
                        '''
                    } catch (Exception e) {
                        echo "Error in Test stage: ${e.getMessage()}"
                        throw e
                    }
                }
            }
        }
    }
}
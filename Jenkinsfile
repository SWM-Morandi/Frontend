pipeline {
    agent any

    triggers {
        pollSCM('*/3 * * * *')
    }

    environment {
        imagename = "yeobi/front"
        registryCredential = 'yeobi'
        dockerImage = ''
    }

    stages {
        // Git에서 레포지토리 클론
        stage('Prepare') {
          steps {
            echo 'Cloning Repository'
            git url: 'https://github.com/yeobi01/morandi-client/',
              branch: 'main',
              credentialsId: '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'
          }
          post {
             success { 
               echo 'Successfully Cloned Repository'
             }
             failure {
               error 'This pipeline stops here...'
             }
          }
        }
        
        // Docker 빌드
        stage('Build Docker') {
          agent any
          steps {
            echo 'Build Docker'
            script {
                dockerImage = docker.build("yeobi/front", '--file Dockerfile .')
            }
          }
          post {
            failure {
              error 'This pipeline stops here...'
            }
          }
        }

        // Docker 푸시
        stage('Push Docker') {
          agent any
          steps {
            echo 'Push Docker'
            script {
                docker.withRegistry( '', registryCredential) {
                    dockerImage.push("docker tag name")  // ex) "1.0"
                }
            }
          }
          post {
            failure {
              error 'This pipeline stops here...'
            }
          }
        }
    }
}

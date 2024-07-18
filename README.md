Steps for creating a payment-gateway backend application

1) Build Schema using Mongoose  
            -paymentMethod Schema
            -User Schema
            -Transaction Schema


2)Create controller functions that carry out a specifc task when they they are triggered
           
            -Auth controller-
-Login and Register

            -PaymentMethod-

-addPaymentMethod(to selecet a specific payment)

            -Transaction controller
-create Transaction
-getTransactionStatus
-processTransaction
-handleRefund

3)set-up the middle ware to ensure only authorized users are able to make payments

4) SetUP Routes in for each function separatly

5)set up the backend in server.js to connect with the server and db and specify the Routes

6)create a Docker file that encompasses ur application dependencies

7) login into aws console

8) launch an ec2 instance

9) install jenkins on ec2 instance

10) connect ur jenkins to ur github

11) install docker plugins in ur jenkins system

12) jenkins is configured with Docker

13) Succesfully contanerized the app in Docker via Jenkins

#cloudWorker

###about
cloudWorker utilizes the computing power of the browsers connecting to your webpage. By using webworkers, you can start background processes, which won't block the webpage (they are seperate processes). Why not use them to do some heavy computing?

###setup

####in the app.js (server)
There are two endpoints:
* _GET /jobs_ : serves the data to process
* _POST /results_ : process the results

####on the client
#####ExternalFunction.js
Modify the _process_ function to do some more complex stuff.
#####worker.js
Now a setTimeout is there, so it won't take up much of the user's system resource. Modify it with caution! 
# Social_Network_Challange
 
## Description
This API stores data about a social network and provides a solution to the shorthest chain of friends between two people.
 
## Discussion

### Representation
The social network is represented as an oriented graph. Meaning that if person A is a friend of B, this doesn't necessarily mean that B is a friend of A.
I chose this representation to reduce this challange to a graph problem.

### Algorithm
Backtracking is the algorithm I chose for this implementation. 
Some of the alternatives would be:
<ul>
  <li>DFS - yields similar results to backtracking</li>
  <li>BFS - similar to DFS and backtracking and could provide better results on larger networks</li>
  <li>Bidirectional Search - fast and memory efficient</li>
</ul>

The reason why I chose backracking was beacuse I'm using a smaller network. BFS and bidirectional search can sometimes have worse results on smalled networks. Bidirectional search would be the best algorithm for this kind of problem. BFS could also be a soulution since it's easier to implement. 

Bidirection search and BFS would be better for larger networks because, if this network would respect the real world statistics, the average chain length between two people would be 7. Meaning that the search depth would only reach 7.

### Test Cases
I used unit tests to test pretty much every GET endpoint because GET is a safe request which doesn't modify the database. In order to unit test the other requests (POST,PUT,DELETE), I would need a test database.
Since most of the errors are handeled on the server side, I only tested that the output and the status codes(ex. output should not be empty, status code should be 404(Not Found), etc..).

In order tot test the POST,PUT and DELETE, I used POSTMAN. Social_Network_Challange_Postman_Collection.postman_collection.json file contains a postman collection which exemplifies how the API works.


### Observations
<ul>
 <li>The database is stored on heroku so it can be accessed on different machines.</li>
 <li>The config file contains the host and the port on which the server runs and can be modified.</li>
 <li>The server can be ran using node ./server.js</li>
 <li>Unit tests can be ran using npm test</li>
</ul>

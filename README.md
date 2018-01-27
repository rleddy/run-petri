# run-petri
A simple Petri Net class for modeling sequencing.

# Node Module providing Classes

run-petri is a node.js module that exports two classes, RunPetri, and pNode. A third, class, pTransition, is not exported. It is sufficiently abstract that it might not be subclassed. 

The class pNode may be subclassed. The way it may be subclassed will be discussed later. 

The pNode class provides a default Petri Net behavior, keeping track of a token count. And, the token count is updated when a transition is triggered. The transition merely moves input resource (dectrement the token count of input nodes) to a reduction in the output nodes (increments output nodes). 

The class, RunPetri, is the class that takes in the net definition, a JSON object, so that the network model may be store and used. The class RunPetri exposes methods for adding in resources. running transition, and finally executing pNode methods on nodes that deliver outputs to applications. 

Every time the 'step' method of RunPetri is called, RunPetri objects will examine each transition element to see if it has enough inputs to fire. If it does, the transition methods will reduce the input resources and transition them to the output nodes.

The application program creates a new instance of the RunPetri class.

var pNet = new RunPetri();
var net_def = <any way of defining the JSON object.>

Then, the application program calls pNet.setNetworkFromJson(net_def), where the variale net_def refers to a JSON defined object with a particular structure. The JSON object has an array of nodes definitions, and a an array of transitions. 

The JSON object may contain definitions of nodes that will be called 'sources'. The RunPetri instance compiles event handlers for events named with the ids of the source nodes. In this way, processes that take in data asynchronously may emit values to the source nodes, creating new resources to flow throught the net. For example, if a source node is named, "sensor1", the applcation may call, pNet.emit("sensor1",value).

At any time, the application may call pNet.step(), and drive the values forward. 

# The JSON definition object


# A Command Line Example


# Overriding pNode classes 






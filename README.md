# run-petri
A simple Petri Net class for modeling sequencing.

# Node Module providing Classes

run-petri is a node.js module that exports two classes, *RunPetri*, and *pNode*. 

A third, class, pTransition, is not exported. It is sufficiently abstract that it might not be subclassed.

So, the list of classes implemented is the following:

* RunPetri
* pNode
* pTransition

And, the exported classes are:

* RunPetri
* pNode

Changes of behavior from the default are to be made by subclassing: *pNode*.
The way pNode may be subclassed will be discussed later.


The pNode class provides a default Petri Net behavior, keeping track of a token count. And, the token count is updated when a transition is triggered. The transition merely moves input node resources (decrements the token count of input nodes) to a reduction in the output nodes (increments the token count of output nodes). 

The class, RunPetri, is the class that takes in the net definition, a JSON object, so that the network model may be stored and used. The class RunPetri exposes methods for adding in resources. running transitions, and finally executing pNode methods on nodes that deliver outputs to applications. 

Every time the 'step' method of RunPetri is called, RunPetri objects will examine each transition element to see if it has enough inputs to fire. If it does, the transition methods will reduce the input resources and transition the result of the reduction to the output nodes. (The default behavior for reduction is to AND the inputs and use the result to increment the outputs.)

The application program may require the module. The requirement statement will produce an object exposing the class definitions. For example: 
```
var PetriClasses = require('run-petri');
var RunPetri = PetriClasses.RunPetri
var pNode = PetriClasses.pNode;
```

The application program creates a new instance of the RunPetri class. Then it passes a net definition object to a RunPetri method on the instance, *setNetworkFromJson*

```
var pNet = new RunPetri();
var net_def = <any way of defining the JSON object.>
pNet.setNetworkFromJson(net_def)
```

The JSON object referenced by net_def in the example above has an array of nodes definitions and an array of transitions.

Once the nodes and transitions are compiled by the RunPetri instance, the nodes (circels in Petri net diagrams) may receive values.

When all the inputs nodes of a transition contain values, the Petri net may perform actions that move the values forward through reductions. Transitions that have all of their inputs containing values, are called "active" transitions. 

It is up to the application program to trigger the execution of the active transitions. At any time, the application may call pNet.step(), and drive the values forward. 

When the appliation calls pNet.step(), *step* examines all transitions for activation and then calls upon the reduction methods of the transition move the values. 


The RunPetri class is defined with a way for the application program to pass values into it asynchronoulsy. The JSON object may contain definitions of nodes that will be called *sources*. The RunPetri instance compiles event handlers for events named with the ids of the source nodes. In this way, processes that take in data asynchronously may emit values to the source nodes, creating new resources that may flow throught the net. For example, if a source node is named, "sensor1", the applcation may call, pNet.emit("sensor1",value).


# The JSON definition object


Here is an example of a JSON definition object for RunPeti:

```
{
	"nodes" : [
			{ "id" : "L-sensor-1", "type" : "source" },
			{ "id" : "Pump1", "type" : "exit" },
			{ "id" : "mixer2", "type" : "exit" }
	],

	"transitions" : [
				{
					 "label" : "pump when ready",
					 "inputs" : [ "L-sensor-1" ],
					 "outputs" : [ "Pump1", "mixer2" ]
				}
	]
}

```

In the example, you can see an array of "_nodes_" and an array of "_transitions_".

Each _node_ has an _id_ field and a _type_ field. If the type is not specified, it will be assumed to be "internal". If a node represents a subclass, the node definition should contain an additional _class_ field with a value being the name of a pNode subclass defined by the application.

_Source_ nodes automatically have event identifiers made out of them for use in node.js. _Exit_ nodes are used to release values. Each exit node recieves a reference to a value consuming callback function. It is up to the application to implement the most useful verions of this.


# A Command Line Example

A basic cli application for the run-petri model can be found in the module directory. The JavaScript code is "tryout.js".

You should be able to run it: * node tryout.js *

You will see in the code that there is a switch statement. By looking at the cases, you will see that the program accepts four basic comamnds: load, report, send, step. 

- Use ```load <filename>``` to load the PetriNet description.
- Use ```report``` to see the states of the nodes. 
- Use ```send <node-name>``` to put some number of tokens into a node.
- Use ```step``` to make transitions fire.

For example load our example Petr net, p1.json.
Then, 
* send L-sensor-1 3
* step
* report
* step
* step
* report

This example always shows 0 values for the exit nodes. But, step outputs that they receive the values to perform their tasks 

 
# Creating subclasses of the pNode class.

more later.





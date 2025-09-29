  

  

  

  

Introduction — We can let the history of the blockchain guide us into understanding consensus, what motivates it and why it is peer to peer, and then we can get an understanding as to how smart contracts are distributed for the purpose of validation as opposed to execution.

  

Goal(s) — We should attempt to understand consensus and why that is a distributed (peer to peer) process, and then we may understand how smart contracts execute so that the entire blockchain using a particular form of consensus may maintain a valid state of the world.

  

Requirements — some programming knowledge.

There may be a few exercises that can be done in JavaScript.  These will focus more on experimenting with simulations of blockchain properties than with actual programming of contracts. So, some probability may be used lightly.

  

  

# ***Thinking About Consensus***

  

Since 2009, Bitcoin has been with us. And, it has given rise to a quorum of blockchain infrastructures aming to improve the job or offer some particular function that is beyond the special scope of Bitcoin proper. For exmple, Ethereum provides a platform for processing smart contracts in a manner that is much more powerful than what Bitcoin offers. But, even if the blockchain offering does only the functions of Bitcoin, it can still differentiate itself so as to increase security, improve politics, reduce energy consumption, or greatly improve efficiency. One way different blockchain offerings can differntiate from others so as to achieve some of these improvements is to change the manner in which ***consensus*** is managed.

So, what's that all about? Let's take a closer look at ***consensus*** and see if we can understand it better.

We have questions to ask about it.  For example:

> What do we really mean by ***consensus*** ?
> Is this a totally new idea created by the living person Satoshi Nakamoto?
> How does ***consensus*** relate to the blockchain ledger?
> What does the ***consensus*** control? Incentives? Security? Reality?
> Does ***consensus*** come at a price or is it totally free since all this Bitcoin stuff is totally public?
> Consensus usually means more than one entity agrees on something, but who or what are those entities? Is it everyone?
> What if I want to explore my own idea about consensus? Do existing blockchain systems make that easy?
> Can I write a Smart Contract that does consensus? Is that a good idea?


If you already know about this topic, then you already know that I have asked some silly questions. But, the whole blockchain is new to a lot of people. And, those of us who know anything about this, probably were asking some of those questions not long ago. After all, some of the recent additions to the world of peer-to-peer blockchain offerings are only a few years old. Ethereum's initial release date was July 30, 2015. So, it is only just a little over three years old (just past the terrible two's).

The term ***consensus***  is a common word. Let's review it. And, what does it mean in the realm of peer-to-peer computers? Let's have a look.

First, keep in mind that ***consensus***  is something that happens among members of a group. So, that's more than one. So, the term carries with it the notions of many separate communicating entities or people. It carries with it the notion of talking to those entities. That is, we must be able to ask questions and get answers out. When it comes to computers, the expectation is that they are separate and networked.

The term ***consensus*** means that a particular answer to a question posed to a number of individuals, qualified to answer, will be similar if not exactly the same.  Here, the qualification aspect may simply mean able to answer intelligibly in a language spoken by a group and perhaps in which the question was posed.  For example, if you asked many English speakers, "Do most people have mothers?", then you would expect most people to answer "Yes". Also, you could ask if in general ***consensus*** has to do with general agreement about a topic or definition.  So, you could go looking to see if there is a consensus about ***consensus***.

When the individuals are computers, we have to get more precise about communication and the process of agreement. Separate computers (or processes), called nodes,  who participate in agreement over data points may do so if they can send, receive, and process messages that notate the question about certain data points in a common language. And, if one group of nodes is to come to an agreement, they should each act according to a pre-established set of rules for determining the acceptance of the data points.  The computer programs that adhere to a set of rules for a particular version of consensus are said to execute (runs) a consensus algorithm.

If you go looking for ways of doing consensus with computers, you might find that there are many ideas about how to establish among many computers a consensus about a value.  Yet,  while there are many versions of consensus algorithms, there are some high-level guiding principles for developing the alogrithms that people are beginning to come to a consensus on. These principles are as follows:

- ***Agreement***: this is the general nature of consensus.
- ***Integrity***:  a node accepts a data point that other honest nodes accept.
-  ***Safety***: given some input (query), all nodes produce the same output (response).
- ***Validity***: accepted data points have been proposed by some node prior to the agreement among nodes.
- ***Termination***: (also referred to as liveness) eventually well-behaved nodes propose some data point and also accept some data point.
-  ***Fault Tolerance***: if some small number of nodes (less than some threshold) fail to act in accordance with the consensus algorithm, the remaining majority nodes will recover and continue to operate normally.

Now, when the stream of data points handled by nodes is a ledger, as in a blockchain ledger, a consensus is about many copies of the ledger being kept the same or in synch. And, any question about the ledger asked of any node should be in accordance with the general consensus. And, while the details are complex, if you go looking, you will find that the guiding principles are being addressed in the management of these ledgers.

While we have spoken of independent communicating nodes, we have not discussed the manner in which nodes talk to each other nor the order in which node are addressed. But, the manner in which the computers converse, what they do with information provided to each other, and the asynchronicity of the communication has a lot to do with how consensus algorithms differ. For instance, consensus might be controlled by a central authority, or it might be completely peer-to-peer with no apparent single authority.

Bitcoin is in fact, peer-to-peer. Interesting! How does bitcoin achieve security and move forward? It's all in the consensus algorithm.  We examine that idea numerically a little later in this tutorial.

For now. we should appreciate the idea that the ficticious person Satoshi Nakamoto put together some ideas that had been around in distributed computing and cryptocurrency for a while. The innovation made by Satoshi Nakamoto was in the way distirbuted computing consensus was applied to a cryptographically tied ledger enabling an irrefutable ledger of transactions established by a *trustless* consensus process. And, here, by *trustless* we mean that the nodes don't have to be trusted 100%.

So, Satoshi Nakamoto's consensus is based on preexisting ideas. How did those ideas arise and evolve into Bitcoin. We can take a quick look at that. And, then we can take a peek at how the evolution has been going since Bitcoin up to now. And, then we can get to know  ***consensus*** a little better. We can explore what it means to create our own consensus and how to do that. Maybe we could write  ***consensus*** into a smart contract. is that a good idea? Let's find out.

## ***Evolving to Blockchain Consensus***

Using the term *evolving*  makes some sense.  The kind of consensus used by Bitcoin to vary its blockchain has been around considerably longer than Bitcoin. The Blochain, the highly specialized database, has been around, too.  It does not even have to be distributed to be a blockchain. In some sense, some the implementations were the parents and grandparents of Bitcoin. And, Bitcoin might be the parent of Ethereum and other rebelious youths of the cryptocurrency world.

We can begin with currencies and ledgers. 

### ***Crypto Currencies Existed before Bitcoin***

Before Bitcoin, there were already experiments in the use of crypocurrency. Cryptography was used to sign and secure informatino about transactions. But, many utilized just the cryptography and attempted to create protocols in which services took care of the currency users. 

Here are two articles that take use from the first notable uses of electronic payments, Blinded Money and SmartCards in the Netherlands, up through the introduction of HashCash. [Bitcoin Magazine](https://bitcoinmagazine.com/articles/quick-history-cryptocurrencies-bbtc-bitcoin-1397682630/) and [Coindesk](https://www.coindesk.com/3-pre-bitcoin-virtual-currencies-bit-dust/). 

It was a novel attempt in the early to mid 1980's to use cryptography to conceal transactions that could go over the wire. [BlindCash](http://www.hit.bme.hu/~buttyan/courses/BMEVIHIM219/2009/Chaum.BlindSigForPayment.1982.PDF). And, the SmartCard use in the Netherlands was the first time that a whole system got off paper. The plastic cards were around. But, they still had to be pressed onto carbon paper, with bank copies being delivered.  These innovations took place shortly after the patent of RSA in September 20, 1983, following just a few years later. By taking cash away from places, problems of theft were solved. However, new problems arose.

The idea that money could be exchanged over the web also came later. PayPal got its start in the late 1990's, in 1998. This is a few years after the first web browser, Mozaic, whose first version appeared in March 1993. 

In the same year that PayPal launched, Wei Dai launched B-Money. Many features found in Bitcoin were part of it. It was served by an anonymous peer to peer network. It use the idea of an arbitrator. But, there is a subset of validators among those who keep track of transactions. These validators have to come to a consensus in some way. The notion of a database is used, but not of a blockchain.  *How* consensu is reacehd is not clear. But, there is something akin to Proof of Stake for bad behavior. Wei Dai's descriptino of b-money is here: [b-money](http://www.weidai.com/bmoney.txt).

B-money did not get enough interest to keep a company going. Later, Satoshi makes reference to it.

HashCash introduced Proof of Work. HashCash is supposed to protect a receiver from spam. The idea is that the send solves a cryptographic puzzle to prove to the receiver that the message (e-mail or other) is worth recieving. Receviers are supposed to be able to discern that the proof has been done. Proof of Work was introduced in 1992 by [Dwork and Naor](http://www.wisdom.weizmann.ac.il/~naor/PAPERS/pvp.pdf).  HashCash used PoW to send new money. But, HashCash was thought to be too greedy with resources [Laurie and Clayton](http://www.hashcash.org/papers/proof-work.pdf)

For the attempts at cryptocurrency mentioned so far, there were no shared ledgers. Wei Dai had something like distributed consensus, but it was not tied to a blockchain. In fact, there does not seem to be a blockchain in use in those systems.  But, blockchain might have been used by them. It was not new at all. 


### ***Blockchain existed before Bitcoin***

A blockchain is a set of records (or pages) that are linked by their headers. Often, the linking is done by storing the hash of a one block in the header of the next block. The newer block identifies a unique block in this way out of whole universe of possible blocks. To prevent tampering in the bew block, the header can be encrypted and a has of the header can be made public.

There is nothing about a block chain that is distributed. It could be. Since the linking is purely cryptographic, blocks don't have to be stored together to on the same machined or disk. The linking is in fact a physical state of the universe independent of machines. 

Similarly, there is nothing saying that the blockchain has to be distirbuted in pieces. There is nothing that says that it has to copied many times over. It is just a data structure, a higly specialized Database.

The blockchain is not a typical database that has *CRUD* capabilities. In the first place, there is no *destroy*.  There is no *update*.  All you can do is *create* and *read*.  And, the linking has to be acheived. The ideas is that a ledger has to be created. And, the ledger has to be an accurate history of transactions.

In a blockchain used to implement a ledger, there is a need to ensure that the blocks move forward in time. The use of linking for timestamping digital documents is introduced here in a 1992 paper: [Linking and Timestamps](http://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=7AF1F5AE98D18612F1CF74CA1A01C4FC?doi=10.1.1.46.8740&rep=rep1&type=pdf). The forward progression has to be established to prevent a rewrite of history. When history can be rewritten, double spending attacks can be created. The blockchain secures both crypographic taceability and a forward progress in time making such attacks unlikely after a few more conditions on processing are met. This is the point where the ledger become immutable and irrefutable. 

In order to make the long list of transactions manageable, searchable, and verifiable (especially the linking), the developers of the new usees of the blockchain turned to the Merkle Tree, a data structure that was invented in 1979.

We think of binary trees made up of nodes, edges, which are the branches.  The root is the highes parent. And, each parent has one or two children. The Merkel Tree is a binary tree tat realizes a link between parent nodes and children nodes by making the data of the parent node the hash of the combined data of each of its children.

Here are two descriptions of the Merkle Tree. [WikiPedia](https://en.wikipedia.org/wiki/Merkle_tree). Merkle's Thesis [Merkle 1979]( http://www.merkle.com/papers/Thesis1979.pdf)

Merkle Trees come with benefits common to binary tress, such as logrithmic searching and partial storage of information.


### ***Bitcoin Utilizes Consensus for Security***

In the blockchain offerings that arise around Bitcoin, entire chains are stored at every node. The reason for that has to do with consensus. 

Each time a block is linked on to the end of the blockchain, the growing ledger, the block has to be accepted as the true set of transactions being stored on the ledger. So, the nodes of consensus network work at coming to consensus on the data point, which is the the new addition to historical record of transactions.

This consensus is not different than what is needed by distributed systems to agree on anything, or in other words, any kind of data point. ***Consensus*** is a distributed systems concept.

So, we can see a sort of duality here. Many copies of the ledger are made because each node will keep a private copy to examine by way of using it to make a decision about the validity of a new block that is proposed by some node.  And, many separate nodes are used to manufacture of society of individuals who reach a consensus in such a way that they can report that a block is valid. If at any time, a block comes into question, we should be able to query any node or collection of nodes in the system for the validity of a block. The nodes will make a quick search of the Merlkle tree and report back about the block according to the network's consensus. 

At this point, it may be good to read the Satoshi Nakamoto paper: [Bitcoin: A Peer-to-Peer Electronic Cash System, Satoshi Nakamoto, 2009](https://bitcoin.org/bitcoin.pdf).

##### ***Decentralization***

Let's make note of the fact that Bitcoin consensus does not require any kind of centralized authoity. There is no single arbitrator. The system is totally public. No single entity is requried to own all the nodes. And, in fact, the Bitcoin community has plent of incentive to make sure that many players own nodes. 

> The multiplicity of validators allows "trustless" transaction validation

Given that no one organization owns more than some number of nodes, one can be sure that the ***consensus*** cannot be compromised. So, the system is not just peer-to-peer. Miners only win if there are many competing miners. Since the system is peer-to-peer and open to anyone coming in and mining, there is always a force acting against aggregation nodes into a single controlling entity. This is a good thing. We can take a look at the to see how the numbers of nodes stack up to keep ***consensus*** honest. 

##### ***Concordance - Byzantine Generals***

The Byzantine Generals problem is a good place to start thinking about how to solve consensus problems in environments where trust can break down betweem nodes. Thinking about these problems leads us to consider not only the nature of consensus, but also the number of nodes needed to reach consensus. 

In the paper by [LAMPORT,SHOSTAK, and PEASE  (SRI) 1982](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.126.9525&rep=rep1&type=pdf), we are asked to imagine a group of generals planning an attack on an a city.  In the scenario, generals may only communicate by messenger.  They define oral messages and text messages. Traitors are generals, messegners, lower level officers who alter messages. Perhaps there can be forgetful messengers, but they can be regarded as traitors.

If the messages are oral (meaning that they cannot be encypted) and there are m traitors, then there has to be 3m + 1 generals to reach a consensus.

So, we have our first requirement for the a number of nodes in a consensus scheme. 3n + 1 nodes for data point agreement. But, we can do better than that. 

[LAMPORT,SHOSTAK, and PEASE  (SRI) 1982](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.126.9525&rep=rep1&type=pdf) then go further and introduce an algorirhtm in which each general may or may not be a traitor, while the lieutenants faithfully record the message they get from all the other lieutenants in the network. In this algorithm, each message starting with a general is signed and passed to lieutenants. Each lieutenant then ***copies** the message and appends his signature to the message and sends it to all the other lieutenants. 

Sounds a little like blockchain, right? The algorithm they introduce allows lieutenants to collect all the values they receive through from all the messages coming in. If they collect just one value, then they noe the generals are trustworthy and that the can use the value. 

The signed message aglorithm allows m lieutenants to make a safe and sane decision even if all m generals are traitors. So, this is a network with m messages creators and m message validators. That means there are 2m nodes in the system, but they have slightly different functions. 

But, in some sense we have progressed from a requirement of 67% trustworty nodes to a requirement of 50% trustworthy nodes.

[LAMPORT,SHOSTAK, and PEASE  (SRI) 1982](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.126.9525&rep=rep1&type=pdf) go on to talk about more configurations in the same Byzantine General's setup. Have a look for yourself. For this article, the point is making progress. But, is there better?

So, far we have some ideas of messages being passed around. But, what if we start making requirements about messages all being passed at the same time, *synchronously*, or at random times, *asynchronously*?  Does that have anything to do with how many processors are required to be honest?

 Fischer-Lynch-Paterson (FLP) impossibility tells us that no agreements can be reached in a completely asynchronous network of nodes if even a single node crashes. [FLP](https://groups.csail.mit.edu/tds/papers/Lynch/jacm85.pdf).  At the end, their article, the provide a theorem that says that a partially correct consensus protocol can be acheived provided no nodes crash. However, they are using a very stict sense of asynchrony. That is, a node can take an infinite amount of time to respond to a message. 

But, viable systems can be created if certain conditions on synchrony can be adjusted. One way to make an adjustment it is to enforce a partial-synchrony. See [Dolev, Dwork and Stockmeyer 1987](https://www.cs.huji.ac.il/~dolev/pubs/p77-dolev.pdf).  Partial-synchrony simply puts an upper limit on the amount of time for a node to respond. But, in order for a partially  synchronous network to be resilient, the consensus algorithms are required to broadcast messages to as least as many processors as the number of faulty procesors they are trying to avoid.

In 1999, the first algorithm that can be proven to reach consensus in an asynchronous nework was presented by Castro and Liskov. This is consensus is known as Practical Byzantine Fault Tolerance.  Practical Byzantine Fault Tolerance  assures a liveness in the network with at least 67% trustworty nodes, but also works in an asynchronous context. [PBFT] http://pmg.csail.mit.edu/papers/osdi99.pdf

So, there is a way to work within asynchronous networks. But, the number of processors to be trusted can be fewer.  And, the only ones that seem to get down to fifty percent of processors use ***wormholes***.  Wormholes are trusted components that cannot fail in a Byzantine way. To  find out more, have a look at two versions of wormhole use, 
[wormholes 2010](http://www.gsd.inesc-id.pt/~mpc/pubs/consensus2f+1.pdf)  and [wormholes 2007](http://www.sosp2007.org/papers/sosp134-chun.pdf).  The first make use of a *trusted timely computing base*. The second uses *append only memory*

A good place to find out more about limits on consensus algorithms is this 2011 survey: [survey 2011](http://homepages.di.fc.ul.pt/~nuno/PAPERS/IJCCBS11.pdf)

What can we say about Bitcoin, which only needs 50%  trustworty nodes? Can we call it asynchronous? Perhaps it is employing a wormhole of sorts.  With the paper by Chun et al.. the A2M wormhole, we can take information from the abstract:

>"We propose Attested Append-Only Memory (A2M), a trusted system facility that is small, easy to implement and easy to verify formally. A2M provides the programming abstraction of a trusted log, which leads to protocol designs immune to equivocation – the ability of a faulty host to lie in different ways to different clients or servers – which is a common source of Byzantine headaches."

Well, that sounds to me like a blockchain ledger. 


#### ***The Cost of Bad Behavior: 51% Attack***

We now know how many computers (as a percentage of nodes) are needed to launch an attack on a blockchain. And, you also know that the choice of ***consensus*** algorithm figures into th determination of that percentage. If you want to attack the system and get around its ***consensus***, in the case of Bitcoin, you will need 51% of the nodes in the network working on your behalf in order to start rewriting history.

But, just having  51% of the node is not enough. You have to have computing power to recreate the blockchain starting from a point in time where you put your double spending target transaction. In many blockchain implementations you have to outpace the nicely behaving nodes by some significant factor - say two to one. In the case of Bitcoin, the only way to rewrite history is to have all your many attack nodes solve all the puzzles for each block that you have created. There is no shortcut. That means that besides buying the processing power, you have to spend on electricity as well.

You might get that will cost a lot of money - not for the casual attacker.  Not only that, you are not gauranteed to succeed. You only have a chance, one you wouldn't have if you did not have 51% of all the nodes.

You might wonder what the cost is for attempting.  Well, there is a website that claims to be able to provide the current cost of doing so for a number of blockchain offerings. You can find it here: [Crypto51](https://www.crypto51.app/).  Take a look. It says (at the time of this writing) that the cost of attacking Bitcoin is approaching $0.5M USD per hour.  So, I hope your attack doesn't take several days, which it might be required in order to avoid getting caught.
  

#### ***Convergence to Security***

In the paper by Satoshin Nakamoto, there is a small program in the **C** programming, that can be used to see how the setup of probabilities for honest nodes v.s. attackers can determine a convergence to zero for the probability of creating a dominant side chain in Bitcoin.  The program is given in section 11. 
  
Satoshi Nakamoto defines the following probabilities in the context of a Binomial Random Walk.

  p = probability an honest node finds the next block
  q = probability the attacker finds the next block
  
The probability of the attacker catching up from *z* blocks behind is 1.0 if p < q (the house always wins with a bigger bank). Otherwise, the attacker looses at as a power of the ratio of the two probabilties: (q/p)^z.

For the Poisson series formation please refer to section 11 of  [Bitcoin: Satoshi Nakamoto, 2009](https://bitcoin.org/bitcoin.pdf).

Here is a little node.js applicationt that you can play with to different probabilities to see this convergence.  This is basically the same program as given by Satoshi Nakamoto, except that is it in JavaScript and you can just run it with node.js.

If you set gQ = 0.49,  you will see that the value of P gets smaller. But, the loop only goes up to 100, so you can see that it will take a very high *z* value to catch get convergence. If you set gQ over 0.5, say at 0.51, you will see that P starts growing, which ensures us that the attacker wins the game. 

```
// This is the Nakamoto calculation rendered in JavaScript.
// It is called below.

function attackerSuccessProbability(q,z) {
    //
    var p = 1.0 - q;
    var lambda = z * (q / p);
    var sum = 1.0;
    var i, k;
    for (k = 0; k <= z; k++) {
        var poisson = Math.exp(-lambda);
        for ( i = 1; i <= k; i++ ) {
            poisson *= lambda / i;
        }
        sum -= poisson * (1 - Math.pow(q / p, z - k));
    }
    //
    return sum;
}


// Format the data and try different values.

var gQ = 0.1;
console.log("Q = " + gQ);

var z_hat = 0;
for ( z_hat = 0; z_hat < 100; z_hat++ ) {
    var P = attackerSuccessProbability(gQ,z_hat);
    console.log("z: " + z_hat  + "  Q: " + gQ + " -> P: " + P);
    if ( P < 0.00005 ) break;
}


var gQ = 0.3;
console.log("\nQ = " + gQ);
var z_hat = 0;
for ( z_hat = 0; z_hat < 100; z_hat++ ) {
    var P = attackerSuccessProbability(gQ,z_hat);
    console.log("z: " + z_hat  + "  Q: " + gQ + " -> P: " + P);
    if ( P < 0.00005 ) break;
}

```

### ***Some Types of Consensus***

Now that we have gone over the Bitcoin consensus process.  We might be curious to know about what other types of consensus algorithms there are. 

In order to help you appreciate that there is a growing zoo of consensus algorithms,  a brief rundown of algorithms is given here.
As there is a limited time for this writing, this writer had to make a quick search for a list of consensus algorithms.
As a result, the list that follows is very likely not exhaustive. We have here only about twenty consensus alogrithms, including Proof of Work. 

For the sake of brevity, only one or two sentences will be given as a desciption. Some but not all will have external links to more information about the particular algorithm. 

- **PoW - Proof of Work**
MIning rewards are given to the first node that finds a block hash that is shorter than a required size. All nodes receive all transactions. All miners participate in the consensus process to extend the ledger.  *BitCoin* introduced this method and uses it.  [See the white paper]( https://bitcoin.org/bitcoin.pdf)

- **PoS - Proof of Stake**
Priority is given to miners who have purchased the most stake in the blockchain systems. See a definition here: [PoS](https://www.investopedia.com/terms/p/proof-stake-pos.asp).

- **DPoS - Delegated Proof of Stake**
This form of consensus mirros the election of members in governing bodies.  Witnesses, those who validate transactions, are elected. That is, the one with the most votes wins the mining privilege. In this scheme, those who are in a pool of candidates risk reputation and income for bad behavior.   Here is a simple explanatin of [DPos](https://hackernoon.com/what-is-delegated-proof-of-stake-897a2f0558f9). Here are some users of this form of consensus: Lisk, [EOS](https://eos.io/), [Steem](https://steemit.com/), [BitShares](https://bitshares.org/). Here is a more detailed description: [delegated-proof-of-stake-consensus](https://bitshares.org/technology/delegated-proof-of-stake-consensus/)

- **PoET - Proof of Elapsed Time**
Whichever node reaches the end of a random wait period first has mining priority - without expending CPU energy.  In this scheme, used by Hyperledger's Sawtooth, special trusted cores, on the same chip as a miner's CPU, produce the wait period. The cores are supposed to be tamper-proof, however they were hacked by a research team at Austria's Graz University of Technology. [SGX attack](https://www.theregister.co.uk/2017/03/07/eggheadsslipanoteunderintelsdoorsgxcanleakcryptokeys/)  More attacks have been reported: [Speculative execution attack](https://arstechnica.com/gadgets/2018/08/intels-sgx-blown-wide-open-by-you-guessed-it-a-speculative-execution-attack/). Of course, the vendors developed counter measures. Here is the Sawtooth documentation on PoET: [PoET](https://sawtooth.hyperledger.org/docs/core/releases/1.0/architecture/poet.html)

- **PBFT - Practical Byzantine Fault Tolerance**
PBFT is often refered to as a traditional fault tolerance algorithm. It operate by state machine replication, with the state machines providing the examination and evaluation of data points. Each node publishes the result of runnin the state machine and broadcasts it to the network. A voting round determines the acceptance of data points.  Some refer to [Ripple](https://ripple.com/files/rippleconsensuswhitepaper.pdf) and  [Stellar](https://www.stellar.org/papers/stellar-consensus-protocol.pdf) as modern varients of PBFT. 

- **DBFT - Democratic BFT Byzantine Fault Tolerance**
Some would say that Tendermint is a democratic version of PBFT.  Tendermint introduces voting at more stages than PBFT and is more geared to blockchain management. It utilizes a gossip protocol: [gossip](https://arxiv.org/pdf/1807.04938.pdf)]. Find out more about Tendermint here: [tendermint](https://github.com/tendermint/tendermint/tree/master/docs/spec)

- **PoAct  - Proof of Activity**
A hybrid of PoW and PoS. In this scheme, a PoW winner publishes his block, but then a randomly selected set of validators prioritized by their stake sign the block. After all the validators have signed, the block is added to the blockchain.  Further description may be found here [PoA](https://www.investopedia.com/terms/p/proof-activity-cryptocurrency.asp)

- **Casper FFG and CBC**
Ethereum is transitioning from PoW to PoS.  As part of the transition, both schemes will be used for a while.  Here is a useful discussion of these flavors: [Casper FFG and CBC](https://medium.com/@jonchoi/ethereum-casper-101-7a851a4f1eb0)

- **MARPLE**
This is a synchronous, no leader protocol. The following is a quote from the [Gorbyte introduction](http://gorbyte.com/documents/Gorbyte%20Introduction.pdf).
> The kernel of these mechanisms is the MARPLE protocol: a Majority Agreement Recursive Protocol based on Logical Environs

For a deeper look into MARPLE here is a [technical discussion](http://gorbyte.com/documents/Gorbyte%20Technical%20Notes.pdf)

- **Raft**
Raft is derived from Paxos. But, it touts itself as simpler to understand. It uses state machine replication and leader election. Here is the [techinal descriptiong](https://raft.github.io/raft.pdf) and here is the [Raft High Level](https://raft.github.io/).  (It has a nice animation to help visualize Raft).

- **JP Morgan's Quorum-Chain Voting**
This is a simple majority voting scheme where those who may vote are granted the right to do so. Those privilged nodes also may grant rights. Here is a discussion this scheme: [JPM](https://blockchainatberkeley.blog/introduction-to-quorum-blockchain-for-the-financial-sector-58813f84e88c).

- **PoM - Proof of Mass = Proof-of-Weight**
I decided to call this Proof of Mass since PoW is already taken. But, you will find [Proof-of-Weight](https://nulltx.com/what-is-proof-of-weight/) described in more than one place. Basically, this is very much like PoS, but instead of buying in a user only needs to have a higher account balance to be prefered in mining.  This is almost like a reward for savings. [Filecoin](https://filecoin.io/) falls into this category by equating used storage to the amount. This is not incentivized.  More informatino about this form of consensus can be found here: [algorand](https://people.csail.mit.edu/nickolai/papers/gilad-algorand-eprint.pdf)

- **PoAI - Proof of Aritificial Intelligence - Proof of Intelligence**
In this consensus scheme, a node must train a neural network and use it to solve puzzles provided by the network in order to gain the right to propose the validity of transactions. Here is a detailed use case which includes PoAI: [aion](https://aion.network/media/en-aion-network-technical-introduction.pdf)

- **PoB  - Proof of Burn**
This is the consensus mechanism most like a slot machine. Whoever throws away the most money wins. Find out more about [Proof of Burn](https://blockonomi.com/proof-of-burn/)

- **PoA = Proof of Authority**
Taking a quote from this ariticle,[medium.com PoA article](https://medium.com/poa-network/proof-of-authority-consensus-model-with-identity-at-stake-d5bd15463256) ,PoA may be briefly explained as such: Proof of Authority (PoA) is a modified form of Proof of Stake (PoS) where instead of stake with the monetary value, a validator’s identity performs the role of stake.
> Here are a few examples where the basic PoA stance is taken further: 
1)  Reputation Mining[Colony](https://colony.io/whitepaper.pdf)
2) Proof of Ranking is a kind a Proof of Authority. Rublix uses a set a features to ranke a trader. [Trader Ranking](https://github.com/rublixdev/whitepaper)

- **PoSV = Proof-of-Stake Voting**
Like PoS, this requires a buy in. In the TOMO system, the currency is TOMO and 50K of them are required to become a master node.  Members of the community for the MasterNodes, who then do mining.  The Tomo white paper is here: [TOMO](https://tomochain.com/docs/technical-whitepaper--1.0.pdf)

- **PoC - Proof of Capacity = Proof of Space**
Here is a description on WikiPedia [PoC](https://en.wikipedia.org/wiki/Proof-of-space).  Burst uses PoC by constructing plot files, which retain a number of slots for hold information about transactions. Burst has a wiki with more explanation: [Burst](https://burstwiki.org/wiki/Technicalinformationaboutminingandblockforging)

- **PoI - Proof of Importance**
This is about the amount of transaction processing that a node does. More can be found here: [XEM](https://cryptoslate.com/nem/)

- **PoD - Proof of Devotion**
PoD constrasts itself with PoI. It selects validators based on their influence in the ecology of the blockchain. To gain a deeper understanding of this, read the Nebulas [white paper](https://nebulas.io/docs/NebulasTechnicalWhitepaper.pdf)

- **IOTA - Direct Acyclic Graphs (DAGs)**
The Tangle is a DAG that can be extened on many fronts and then be pulled together to get fairly highly reliable consensus. The more terminals of the consensus that there are, the more security. The design is for high speed small transactions. Check it out here: [Iota](https://iota.org/IOTAWhitepaper.pdf)


## ***Smart Contracts and EVM's***

So, there are many ways to go at ***consensus***.  And, now we understand that ***consensus*** can be used to manage agreement on any data point among a collection of nodes in a computer network. So, we can expect to use ***consensus*** for more than just the balance of ledgers.  For instance, we might use ***consenus*** to reach agreement about the state of any state machine.

In fact, Ethereum is built to do just that. 

Ethereum executes programs that are refered to as **Smart Contracts**.   The programs may be written any computer programming language that compiles to the byte code for the Ethereum Virtual Machine.  In fact, ***Solidity*** is one such language. It is a new language that has been designed to make it easy to express Smart Contracts. But, it is not the only language being used to date. **Go** has been coopted for smart contract development as well. And, there are other languages under development. 

Lets check out some concepts about Smart Contracts. The term is being thrown around, and it might be good to review where the idea of a *Smart* Contract came from and see how Ethereum becomes a child of that invention. Looking into Smart Contracts will help us understand what Ethereum is doing with regard to ***consensus***. 

Then, when we have have a better idea about how ***consensus*** works with Ethereum, we might be able to entertain the ideas about how the contracts knit together communties on an Ethereum blockchain. It would seem that we could use these Smart Contracts to manage how members of a community relate to each other.  And, since different versions of **Consensus** alter incentives and agreeements, we begin to wonder if Smart Contracts can change the flavor of ***consensus*** on top of Ethereum. Can we just use Ethereum, or do we need to look elsewhere or to build something new. Perhaps we are curious about the limits of Smart Contracts in making variations of blockchain offerings. 

Lets start with a small part of **Smart Contract** history.

### ***Introducing the idea of digital signature***

One paper talking about digital contracts and how they might be constructed is written by Ian Grigg in the year 2000.  [Grigg 2000](http://iang.org/papers/fc7.html). In the article he introduces the Ricardo Contract.  

From this discussion Grigg derived this definition of a Ricardian contract:
> Quote: “A Ricardian Contract can be defined as a single document that is a) a contract offered by an issuer to holders, b) for a valuable right held by holders, and managed by the issuer, c) easily readable by people (like a contract on paper), d) readable by programs (parsable like a database), e) digitally signed, f) carries the keys and server information, and g) allied with a unique and secure identifier.”

One section of the 2000 paper that stand out for me is is breakdown of governance, quoted here:
> - *Static Governance*: persistance and availability of contract.
> - *Structural Governance*: separation of concerns and ensuring that reliable parties are employed to carry out singular elements of the protocol.
> - *Dynamic Governance*: real time auditing of the balance sheet and other key values.

Blockchain certainly seems to be a good fit of storing contracts and keeping track of changes.

But, before the Ricardian contract was discuss, the term ***Smart Contract*** was already defind by Nick Szabo in 1996. [Smart contracts](http://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smartcontracts2.html)

The basic ideas were there.  But, while Szabo was not thinking about virtual machines his definition of the *Smart Property* did describe a processing unit of sorts: 
> "Smart property is software or physical devices with the desired characteristics of ownership embedded into them; for example devices that can be rendered of far less value to parties who lack possesion of a key, as demonstrated via a zero knowledge interactive proof."

Ethereum assigns an instance of contract to an address. And, the address is the hash of the public RSA key (Ethereum style - slightly different than Bitcoin). So, that would be the first place that ownership is embedded into an Ethereum contract.

The Ethereum contract is in fact a piece of software, embedded on the Ethereum blockchain, where instances of it reside permenantly. So, Ethereum possesses static governance. The Ethereum Virtual Machine ***EVM*** runs programs that change the state of data governed by the contract. But, there is stuctural governance because nodes must reach ***consensus*** about the state of a contract instance. As the state changes, the costs of execution are verified. And, the state consensus ensures that values altered by the contract can be agreed upon resulting in a dynamic governance. 

### ***Checking on the State of the World***

One way to avoid cheeting in the execution of a distibuted multi-player game is to require nodes to lockstep during state transtions. A certain amount asycnrony can be tollerated. But when a state transition happens, all nodes have to wait for each other and verify the taking of the step. This is proven out by Baughman and Levine here: [Baughman and Levine 2001](http://forensics.umass.edu/pubs/baughman.infocom01.pdf)

In a similar manner, as contracts are performed, the state of the word can be examined by a collection of nodes. Nodes can broadcast the state of the world to each other and wait until the state transition is verified. Not saying how the verification should take place, we can know that the contract state remains veridical if the nodes lockstep on these state transitions.

Of course, a great way to lockstep transitions is for nodes to come to consensus on the state by agreeing to store the record of the state on a blockchain.

This is the strategy used by Ethereum.

Some pictographic interpretations of an Ethereum block: [Ethreum Block](https://ethereum.stackexchange.com/questions/268/ethereum-block-architecture/6413#6413)

#### ***Many Peer Verification***

Bitcoin stores values on a ledger. These values reflect balances - if you will - of accounts. 

Ethereum, on the other had stores the current state of state machines implemented by programs, Smart Contracts, compiled to run on the Ethereum Virtual Machine. 

A node in the Ethereum blockchain works on coming to consensus on blocks. And, each block contains validated state transitions of Smart Contrats. 

Ethereum has employed the same kind of consensus as Bitcoin, PoW. And, as Ethereum switches to PoS, it will not change much in the in its form of consensus when looked at in terms of partial asynchronicity and the use of the A2M wormhole. It is still a blockchain in a peer to peer network.

- That is, Ethereum does consensus *asynchronously*. 
- But, it locksteps contract transitions. So, it executes contracts *syncrhonously*.

### ***EVM's: The Bitcoin Version (verification code)***

Ethereum is actually one of a growing number of blockchain offerings that can run Smart Contract.  In fact, *Bitcoin* has always had the ability to run very simple Smart Contracts. These are written in a very limited script language that is mostly used to instruct miners on how to verify transactions and distirbute balances. Some of this script language can be found in any Bitcoin transaction.

Here is a link to the specification of this script language: [Bitcoin Script](https://en.bitcoin.it/wiki/Script)  

### ***EVM's: The Ethereum Version***

There is a lot to the Ethereum Virtual Machine. Much detail about Etherem can be found in the [Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)

#### ***Limited Turing Computability (The prices of gas)***

There Ethereum Virtual machine is Turing Computable. That means you can write any program in it.

> Ethereum can be used to implement anything, except that it might run out of gas.

Every time a Smart Contract instance makes a state transition, it uses up some resources.  Ethereum has devised a way to charge for this resource consumption.  Some amount of **gas** is taken out of the contract execution fee. **Gas** costs **ether**. And. each contract is allotted some gas before it runs. When the contract makes enough state transitions that all the **gas** is used up, the contract stops. If the contract has not completed its task, its work is rolled back. Otherwise, the contract is finalized. 

> Limited Turing computability eliminates some problems.

The reason for using gas is to limit the Turing Computability. The contract cannot run in an infinite loop as a result. That is the biggest problem taken care of by the **gas** limit. Other problems related to resource consumption 

#### ***Where and When Contracts Run***

The code for the Smart Contract is stored as well.  Each node runs the **EVM**.  And so, the programming details between state transitions are run on all the nodes in Ethereum's blockchain network. When the Smart Contract code reaches a point that it sends a message, the program will emit a message to the network. And, then the contract will have to wait for the next round of verification until it runs again.

These are points to keep in mind:

> - Contracts run on all the peers.

> - Messages causing state transition are replicated at each verification copy.

> - Contracts run between state transtions (up to and including a state transition) and then continue after state transtion consensus.


#### ***Contract World v.s. Miner World***

Let's keep in mind that the Smart Contract does not run on a hardware machine but on a virtual machine. The miner's node, a real machine, likely sporting a fine multicore GPU. runs mining code. 

The mining code, the Ethereum client, might be written in C++ or Go. For instnace, *geth* is written in Go. The Ethereum client makes use of the OS resources. It opens files, uses memory, and does internet communication.

No part of the Smart Contrat runs a process in the OS of the miner node on its own. If Smart Contract sends a message, it is actually asking the **EVM** to have the Ethereum client include it in a messages that the Client sends to its peers.  The peers, also Ethereum clients, unpack the network messages and then locate the transaction indicating the state transtition that will move a particular contract instance forward.

## ***Can Contracts do Consensus Themselves?***

So, you can write any program you want in a language that compiles to the bytecode of the Ethereum virtual machine.

So, can you influence the Ethereum consensus process? Say you have a special use case in mind. Say you want to add voting to the Ethereum consensus process. What keeps you from doing that?

### ***One Contract Can't Do It***

So, it seems like the kind of thing you might want to do, to change Ethereum consensus with a short Smart Contract. But, your contract would have be able to call back into the client code. Or, there would have to be a call provided by the **EVM** that would tell the conensus module to use some data provided by the contract or to run some support routine that influences the outcome of the consensus problem solver.  

But, the **EVM** doesn't have such calls.

So, given that the *influence* option is out. You might want to write a contract that is itself a consensus program. 

### **Many Contract Instances**

The first question to ask is how many Smart Contract virtual nodes you will need to run a consensus algorithm. 

You know that you will need at least three. But, really there should be many. In fact, if the whole systems is to be open, you should allow people to come in and make new contract instances so that they can mine. So you can imagine that you will have to store tens of thousands of contract instances within the blockchain. Each Smart Contract that is its own node will be a rather substantial program. Take a look at any implementation of an Ethereum client in order to get an idea of what has to be written in Solidity.  So, you are asking to store large blobs. 

Keep in mind that there are many articles telling us that blockchains are not suitable for storing large blobs.

### ***Just How Impractical is This?***

- Gas - Well, you don't want your system to stop running. So, you will need an unlimited supply of gas.  And, that costs lots of money. 

- Time - Each Smart Contract will do need to do a state transition on the **EVM** everytime it wants to do a state transition of its own. Then, it will wait for a state transitions at the **EVM** level to be validated before it can move on to examine its own set of state transitions that is validating. So, imagine that the peer-to-peer converstation carried out for consenus will take some number of state transtions at the **EVM** level to validate any one state transtion on the Smart Contract level. 

- Nodes upon Nodes -  But, to top that off, the Smart Contrat will have to store its own ledger within the blockchain. Again, this is a blob,

So, you get the picture. 

Writing a consensus system in Smart Contract languages and running them on an **EVM** is a bad idea.

## ***Plug and Play Consensus***

A better idea would be to change the Ethereum Consensus algorithm and launch a new verison of it. Do a fork - as they say. 

So, then you could battle it out with one of the new quickly written pile of code that implements a client.  Not a bad idea if you have time and money to go that route. Of course, the obtainig the source code won't cost you money, because it is open source.

The code for *geth* can be found here: [geth](https://github.com/ethereum/go-ethereum).
And, the C++ client can be found here: [cpp-ethereum](https://github.com/ethereum/aleth)

### ***What Consensus Change Means to a Ledger***

Of course, if you go through all the work to change Ethereun to your needs, you really have to start a whole new block chain. 

If you used something like Ethereum, you have to start with your own *gensis block*. Then you have to build up the economically busy community that uses your blockchain. Be careful, however, because the S.E.C. is already starting to crackdown on things that look like their own currency. 

Ethereum is undergoing consensus revisions, because it is changing its consensus algorithm. As such, it will undergo a *hard fork*. Here is one of many discussions about the hard fork to come. [Ethereum Hard Fork](https://coinidol.com/ethereum-constantinople-hard-fork-date/)

So, a system with a firmly chosen consensus system cannot just play around with it. Each change in the algorithm means a giant change in its economy and the world of its users. 

So, it if you have imagined your own consenus, might do well to think long and hard about how to use your system that you create. It might also be good to investigate other blockchain implementations that may prove to be more helpful to you.

### ***Modular Consensus Systems***

If you look at [Paxos](https://en.wikipedia.org/wiki/Paxos_(computer_science)),  you can see that it is a family of algorithms. That's good for study. But, if I am experimenting, how might I try each one?

It seemed to be a good thing to bring up now that we have some idea of the difficulty of fooling around with the code for consensus algorithms. If there is one well established familty of algorithms floating around, how can I even begin to think of picking a single one for my own blockchain using my own consensus algorithm?

It would be nice if I could find a code base that allowed me to plug and play consensus algorithms. 

Well that is becoming a reality. And, in some sense it is already real.  The following breif sections serve to introduce a few systems with modular consensus . 

#### **Fabric**

The Hyperledger project is a project supported by the Linux Foundation.  **Fabric** is a blockchain implementation that has a modular architecture. [Fabri](https://www.hyperledger.org/projects/fabric).  

Here is a link to the discussion of its architecture: [Fabric Architecture](https://www.hyperledger.org/wp-content/uploads/2017/08/Hyperledger_Arch_WG_Paper_1_Consensus.pdf). 
Within its architecture, there is a *consensus layer*. You can get a descirption of *plugable consensus* here: [plugable consensus](https://hyperledger-fabric.readthedocs.io/en/release-1.3/whatis.html#pluggable-consensus)

#### **https://www.parity.io/parity-ethereum-2-0/**

Parity is has made an implentation of Ethereum. [Parity](https://www.parity.io/parity-ethereum-2-0/).  And, the hook into their plugin consensus can be found here: [Pluggable-Consensus](https://wiki.parity.io/Pluggable-Consensus)

#### **Proposed Modularity for Ethereum**

In the Ethereum White paper, on its wikl, the is a suggestion of making some parts of it modular. But, this is only brief. Time will tell if Ethereum will provide a code base that allows for moduelarith in consensus. [Future Ethereum](https://github.com/ethereum/wiki/wiki/White-Paper)


## ***Conclusions***

As you can see there is a long path to getting to a place where you can create a veridical consenus system. To start with you have to get your algorithm right. And, we have seen that it some decades to get to Bitcoin. But, since Bitcoin, there have been many approaches to consensus that have made use of the confluence of distributed systems and cryptocurrency. 

In some sense, security is a function of decentralization. And, consensus is a form of voting for a selected peer, one who is selected by the consensus algorithm. In order to rearchitect consensus for your own needs, the blockchain peer can be altered. But, systems with modular consensus algorithms will provide a facile approach to tailoring consensus.










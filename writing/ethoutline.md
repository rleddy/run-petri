
https://blockonomi.com/proof-of-burn/




Introduction — We can let the history of the blockchain guide us into understaning consensus, what motivates it and why it is peer to peer, and then we can get an understanding as to how smart contracts are distributed for the purpose of validation as opposed to execution. 

Goal(s) — We should attempt to understand consensus and why that is a distributed (peer to peer) process, and then we may understand how smart contracts execute so that the entire blockchain using a particular form of consensus may maintain a valid state of the world. 

Requirements — some programming knowledge. 
There may be a few exercises that can be done in JavaScript.  These will focus more on experimenting with simulations of blockchain properties than with actual programming of contracts. So, some probability may be used lightly.


# **Thinking About Consensus**



## **Evolving to Consensus**

### **Crypto Currencies Existed before Bitcoin**

> This is to point out some attempts at currency before Bitcoin. 
> The point is that they did not use consensus and were not as viable.
>  (Outline Ref: https://www.investopedia.com/tech/were-there-cryptocurrencies-bitcoin/)
> Blockchain existed before Bitcoin, but for centeralized organization. (not for the public)

### **Bitcoin Utilizes Consensus for Security**
> The Bitcoin white paper. Overview
> *Bitcoin: A Peer-to-Peer Electronic Cash System*, Satoshi Nakamoto, 2009
##### **Decenteralization**
> The decenteralized blockchain. 
> The difference is that it is peer to peer. 
> The multiplicity of validators allows "trustless" transaction validation
##### **Concordance - Byzantine Generals**
> Refs
LESLIE LAMPORT, ROBERT SHOSTAK, and MARSHALL PEASE  (SRI) 1982
(more modern also - consider Paxos)
Number of processors needed - synchrony - real world
#### The Cost of Bad Behavior: 51% Attack
> How this is avoided by costs, etc.
#### Convergence to Security
	(Exercise: convergence simulation - use JavaScript rather than C)
#### Some Types of Consensus
	(Proofs of convergence - when possibel)
	POet
	PoW
	PoS
	(etc)
## **Smart Contracts and EVM's**
Nick Szabo. Smart contracts: Building blocks for dig- ital markets. EXTROPY: The Journal of Transhumanist Thought, (16), 1996.
### Checking on the State of the World
> Explain consensus on state transition.

#### Many Peer Verification
> How this makes contract execution many replications of the same world state
- hence not parallel, just validated in peer to peer.

#### Where and When Contracts Run
> Contracts run on all the peers
> Messages causing state transtion are replicated at each verification copy

#### Are Contracts Automated Wallets?
> Contract duties often automate collections of actions that a single wallet (Bitcoin style) might do piecemeal
> Multi-sig contracts transtion contracts into 

### The Bitcoin Version (verification code)
> Bitcoin has a simple EVM and can carry out some operations that Smart Contracts might capture. 
> Limited otherwise

### The Ethereum Version
> https://github.com/ethereum/wiki/wiki/White-Paper

#### Limited Turing Computability (The prices of gas)
> Ethereum can be used to implement anything, except that it might run out of gas.
> Limited Turing computability eliminates some problems.

#### EVM Characterisitcs
> briefly go over some architectural points elucidating the Ethereum EV
##### State Transition
##### Stack Depth
##### Register Size
##### Subcontracts

## **Contract World v.s. Miner World**
> EVM: Breifly go over how a contract generates things to mine
> Node Host: Explain why mining is separate, running on the host machine and PoW is tied to this machine resource in a variety of conensus schemes. 
> Possible guided exercise - write an EVM in a simulation (node.js)
## **Plug and Play Consensus**

### What Consensus Change Means to a Ledger
	(Ethereum is undergoing consensus revisions)
	Changes result in resets and branches.
### Modular Consensus Systems
> Go over some of the approaches to modularize blockchain implentations
#### Fabric
#### Hyperledger (also)
#### https://www.parity.io/parity-ethereum-2-0/
#### Proposed Modularity for Ethereum
> https://github.com/ethereum/wiki/wiki/White-Paper

## **Can Contracts do Consensus Themselves?**
### The Ever Recursive Question
	(Turing computability with enough gas)
	Virtual nodes on top of real ones - possible.
### One Contract Can't Do It
	(All peers must verify that their copy is in the same state as everyone else.)
	Illustrate
###  Many Contract Instances
	(Each Contract Acts as a node.)
	> sketch out a solidity contract - what does it need to pull this off?
###  Just How Impractical is This? 
	Gas
	Time
	Nodes upon Nodes
## Conclusions
	Looking for Plug and Play Consensus as the means to the end.
	
	In some sense, security is a function of decenteralization. And, consensus is a form of voting for a selected peer, one who is selected by the consensus algorithm. In order to rearchitect consensus for your own needs, the blockchain peer can be altered. But, systems with modular consensus algorithms will provide a facile approach to tailoring consensus. 
	
	
	
	
	
	


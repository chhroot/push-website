---
slug: how-decentralized-notifications-can-revolutionize-on-chain
title: 'How Decentralized Notifications can Revolutionize On-Chain Governance (Part II)'
description: 'How Decentralized Notifications can Revolutionize On-Chain Governance (Part II)'
authors: [push]
image: './cover-image.webp'
text: "In the previous article, we explored the various problems faced by On-Chain Governance and the issues that arise due to a lack of standardized communication medium by Web3 protocols to communicate with their stakeholders with the help of YAM as an example"
tags: [ Blockchain
,Decentralization
,Push Notification
,Governance
,Blog
]
---
import { ImageText } from '@site/src/css/SharedStyling';

![Cover Image of How Decentralized Notifications can Revolutionize On-Chain Governance](./cover-image.webp)

<!--truncate-->

Game Theory & Focal Points in Governance

_This article is Part 2 of a 2-part series on how EPNS as a service can improve the efficiency of on-chain governance, and hence eventually add to the overall value of the network. You can check out Part 1_ [_here_](https://medium.com/ethereum-push-notification-service/how-decentralised-notifications-can-revolutionize-on-chain-governance-part-i-ff09e7465279)_._

In the [previous article](https://medium.com/ethereum-push-notification-service/how-decentralised-notifications-can-revolutionize-on-chain-governance-part-i-ff09e7465279), we explored the various problems faced by On-Chain Governance and the issues that arise due to a lack of standardized communication medium by Web3 protocols to communicate with their stakeholders with the help of YAM as an example. Low-voter turnout and voter apathy could be tracked to the poor user experience as well as lack of subject matter expertise when it comes to the majority of stakeholders which ultimately leads to the undistributed voter turnout in On-Chain Governance. We saw ultimately saw how [EPNS](https://epns.io) as a platform could help reduce voter apathy and eventually increase voter turnout.

What we will be discussing here today in Part 2 of this series will be a different aspect of on-chain governance to streamline efficient decision making and efficient protocol upgrades. One which could very likely make sure that everyone in the network is on the same page.

This is where **Game Theory & Governance** join hands and provide us with a way to analyze user sentiments and predict human reasoning in order to facilitate a decision better on-chain.

TL;DR Key Points:
-----------------

> 1) In Blockchain, upgrading the system or various protocols and policies is often a coordination game.
> 
> 2)A governance system in Blockchain can help facilitate the coordination of the community on an equilibrium that everyone can accept. It acts as a focal point (Signal). It doesn’t enforce a decision on the system, instead, it guides the stakeholders of the system to a coordinated choice.
> 
> 3) Right now, the overwhelming majority of the governance of decentralized systems such as measuring community sentiment and user intentions is mostly done on Web 2.0 platforms such as Reddit, Twitter, Github and forums — centralized platforms that are susceptible to various forms of opaque attack and bias.
> 
> 4)**EPNS** can act as a focal point for governance decisions as services are able to broadcast messages and signals to the public.

**Game Theory and Focal Points in Governance**
==============================================

Game theory is the study of rational behaviour in situations involving interdependence. The goal of game theory for cryptocurrency and Blockchain systems is to build networks that need no oversight by modelling and predicting human reasoning and yet have positive outcomes for the greater good. In Blockchain, upgrading the system or various protocols and policies is often a coordination game. Coordination games are strategic games with multiple [**_Nash equilibria_**](https://medium.com/@robin.rrt123/blockchain-governance-game-theory-2bd28e6513e3)**_._**

The 3 possibilities for a **blockchain policy upgrade** are:

> _1\. The entire chain stays with the current status quo_
> 
> _2\. The entire chain can upgrade to the new policy_
> 
> _3\. There can be a hard fork, wherein a considerable amount of stakeholders want to change to the new policy whereas the rest desire to continue with the status quo, and hence both the old and new chains co-exist simultaneously. (Coordination Failure)_

Blockchain communities can prevent coordination failures by introducing **focal points**.

A _focal point_ is a public signal that all participants in the blockchain system can understand. It indicates to everyone which Nash equilibrium they should choose. A focal point can be anything — a sign, a signal, anything that increases the chance that all players coordinate on the same equilibrium.

With the help of a common and unified communication medium for the entire user base where the chain or protocol developers are able to _directly communicate_ with users who have a right to vote in governance-related matters by virtue of holding the tokens to that network. The developers are able to provide timely updates for the dedicated user base as well as provide focal points to the community and guide them to make an informed decision.

A **governance system in Blockchain** can help facilitate the coordination of the community on an equilibrium that everyone can accept.

For example, a majority rule governance system could help the community coordinate to one chain. If a 55% vote is in favour of the change, it would indicate to everyone or a majority of the users will move to or will be using the upgraded chain, therefore the individuals could be better off using the upgraded chain and the vice versa is also true for rejecting the upgradation proposal and staying in the status quo (**_Network Effects_**).

In this, a governance system acts as a focal point. It doesn’t enforce a decision on the system, instead, it guides the stakeholders of the system to a coordinated choice. As per the above example, the chain developers could probably send a broadcast message to wallet addresses that hold the tokens to a protocol which gives a call to action to take a poll and then broadcast the results back to the users to allow them to have a general idea on how the final vote will turn out to be as well as show the pros and cons to a proposal.

This concept of focal points can be achieved with the help of “Signals”. Signals are indicators used by users or stakeholders of that blockchain network to indicate their preference regarding a particular governance-related decision, which is, in-turn, non-binding and also one which doesn’t cost the stakeholder as well.

An example of this type of signalling could be that of Carbon Votes on the Ethereum Platform. “Carbon Vote was initiated during the DAO hard fork and conducted vote in a secure web-page fashion with the feature that the voting conducted did not require coins to leave voters’ wallets. It had been a great source of reference when the community decided to go with the fork.”

Carbon Vote acted as a signalling device, where stakeholders of the Ethereum protocol could send a 0 ETH transaction to either a **YES** or **NO** address, during a specific voting period, after which the tally is calculated by looking at the stake of each voter who voted their preference.

With the help of Carbon Vote as a focal point, stakeholders of Ethereum were able to make decisions on whether to fork or not, after the DAO incident.

**EPNS: A Focal Point for the future?**
=======================================

EPNS aims to be a platform-agnostic decentralized notification system. It provides a uniform and standardized way for Web3 services to communicate seamlessly with their users. As Phil Lucsok from Polkadot says in his [article](https://medium.com/polkadot-network/why-on-chain-governance-82ecf28f314c), that right now, the overwhelming majority of the governance of decentralized systems such as measuring community sentiment and user intentions is mostly done on Web 2.0 platforms such as Reddit, Twitter, Github and forums — centralized platforms that are susceptible to various forms of opaque attack and bias. In simple words, **Web 3.0 shouldn’t be governed using Web 2.0 platforms.**

EPNS can act as a focal point for governance decisions as protocols are able to broadcast messages and signals to the public. Let’s imagine a chain such as Tezos using this protocol.

Tezos is popular for its completely on-chain governance model. Their motto is “a truly leaderless, smart contract platform”. Their governance model design allows all users to vote on everything including chain rewrites. The interesting thing about this project is that it has a cyclical voting system in place — one for each quarter of the year. With each cycle having its individual use case — the first cycle for proposal consideration, the second deals with actual voting and the third is for testing and live update. The third stage has a specified threshold or majority required in order for the proposed changes to be deployed on the Tezos mainnet.

Now, **_what could a chain like Tezos gain from a protocol like EPNS?_**

What we will focus here will be the second cycle — the voting. Tezos could activate themselves as a Channel on the EPNS protocol, and then during the voting period, the Tezos channel could broadcast a message to all the subscribers(wallet addresses) of the channel which guides them to a dedicated voting platform where users can indicate their preferences about the proposal before the actual voting takes place (signalling in a sense), during this phase, the channel can broadcast hourly voting trackers. In this way, the users will stay updated on how the vote is proceeding and also be able to change their decision if they would like to due to Network Effects.

The Channel, in this way, can act as a focal point and provide an idea to all stakeholders about the possible outcome of the actual voting when it occurs. This will allow the facilitation of educated decision making when it comes to the actual voting. As explained earlier, using **such a system doesn’t enforce a decision on the system, instead, it guides the stakeholders of the system to a coordinated choice.**

**Conclusion**
==============

In Blockchain, upgrading the system or various protocols and policies is often a coordination game. Often, achieving this coordination to make unanimous collective decisions is not as easy as it sounds. With the help of Game Theory and the concept of Focal points, one can try to facilitate decision making by using Signals to indicate stakeholder preferences.

On-Chain governance often suffers from voter apathy and low voter turnout, which usually leads to a more centralized decision-making process to an otherwise decentralized protocol. In order to increase decentralization when it comes to on-chain voting, the use of a platform such as EPNS as a possible tool for creating focal points can come in handy.

If you like what EPNS is attempting to do by shaking the very foundations of blockchain & decentralized communication, and you would like to follow our journey…

_Consider joining our buzzing Social Media Community!_

> _Telegram:_ [_https://t.me/epnsproject_](https://t.me/epnsproject)
> 
> _Twitter:_ [_https://twitter.com/epnsproject_](https://twitter.com/epnsproject)
> 
> _Github:_ [_https://github.com/ethereum-push-notification-service_](https://github.com/ethereum-push-notification-service)

_References:_ [_Blockchain Governance & Game Theory_](https://medium.com/@robin.rrt123/blockchain-governance-game-theory-2bd28e6513e3) _— Robin Roy |_ [_Why On-Chain Governance?_](https://medium.com/polkadot-network/why-on-chain-governance-82ecf28f314c) _— Phil Lucsok |_ [_Voting vs Signaling_](https://medium.com/strongblock-consulting/voting-vs-signaling-in-blockchain-governance-24ddacdaab9d) _— Thomas Cox_

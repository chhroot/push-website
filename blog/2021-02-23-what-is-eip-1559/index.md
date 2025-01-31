---
slug: what-is-eip-1559
title: 'What is EIP-1559? Why is it important for the future of Ethereum?'
description: 'What is EIP-1559? Why is it important for the future of Ethereum?'
authors: [push]
image: './cover-image.webp'
text: "An EIP (Ethereum Improvement Proposal) is a design document that provides information and technical specifications to the Ethereum community describing/proposing a new feature or changes to be made to Ethereum, or its processes, or environment."
tags: [ Ethereum
,Eip 1559
,Blockchain
,Governance
,Blog
]
---
import { ImageText } from '@site/src/css/SharedStyling';

![Cover Image of What is EIP-1559? Why is it important for the future of Ethereum?](./cover-image.webp)

<!--truncate-->

An EIP (Ethereum Improvement Proposal) is a design document that provides information and technical specifications to the Ethereum community describing/proposing a new feature or changes to be made to Ethereum, or its processes, or environment. It is used as the change management/governance mechanism within the Ethereum ecosystem, which allows the community to propose, discuss, and decide whether to finally accept the proposal or withdraw it.

If you have been following the recent conversations within the Ethereum community, you may have come across the term EIP-1559, and there seems to be quite a lot of discussion on this topic. In this article, we try to briefly explain what EIP-1559 is, what the discussion and debate is all about within the Ethereum ecosystem.

**What is EIP-1559?**
=====================

EIP-1559 is an EIP proposed by Vitalik Buterin and Eric Conner, in an attempt to greatly improve the user experience (UX) of transactions in the Ethereum ecosystem. The proposal aims to do this by changing the current “gas-fee auction” model (similar to Bitcoin). In the gas fee auction model, users bid for block space to include their transactions in the next block by increasing their gas limits and hence incentivizing miners to choose that transaction rather than one with lesser gas fees. The change that the EIP aims to push forward is to do away with the current model, and instead introduce a BASEFEE, which algorithmically adjusts itself based on the network congestion at that time. This means that if Ethereum is utilized by more than 50% then the BASEFEE increases and if the network is congested by less than 50% then the BASEFEE decreases. This would mean that gas prices would be set automatically by the network and users do not have to individually input their gas limit. With the introduction of BASEFEE, we would fundamentally get a “market price” for gas at the time. This also means that wallets no longer need to develop and estimate their own algorithms to show an estimate of the network congestion, but rather the BASEFEE itself shows the exact gas fee required to execute a transaction in the network.

From an end-user perspective, users no longer need to manually input gas price, but rather just click “Send Transaction” if they are willing to pay the gas at the current market price.

The proposal however has not done away with the fee auction model entirely as users who would like to get first in line can pay a TIP to the miner to incentivize them to add their transaction into the block first. As [Eric Conner](https://twitter.com/econoar), co-founder of [EthHub](https://ethhub.io/) puts it, “In times of high network usage, a user can ensure that their transaction is included sooner by including a larger tip along with the BASEFEE amount. Meanwhile, users who are not in a hurry can set a maximum fee that they’re willing to pay. The protocol will then wait for the BASEFEE to drop below this number before confirming their transaction.”.

One major attack vector with the model mentioned up to now is that miners could potentially collude and artificially clog the network with fake transactions in an attempt to drive the algorithmically set BASEFEE, and hence extract more from users. In order to prevent this situation, EIP-1559 also brings the additional measure of burning the BASEFEE, while any TIP goes to the miner.

Currently, miners are compensated for securing the network with the sum of block rewards and all the transaction fees of all transactions included in the block, but this would change with EIP-1559, as the miners would only receive block rewards, and TIPS if any.

Hence EIP-1559 does these 2 things:

*   Creates “**a market rate**” for block inclusion
*   **Burns ETH** in the transaction fee

W**hy is this EIP important?**
==============================

As mentioned earlier, this EIP aims to drastically improve the UX for end-users, by algorithmically setting the BASEFEE such that wallets no longer need to estimate gas fees by approximating the network congestion. Although, there seems to be a misconception that EIP-1559 would result in the reduction of gas fees, which is not the case. The EIP according to Eric Conner, aims to provide wallets and users a much-needed improvement to the user-experience of gas management. This means that rather than having spikes of high gas fees during high network congestion, the graph is smoothened out, but it still doesn’t reduce the gas fees, nor does it provide more scalability.

Another critical aspect of the proposal is the burning of the BASEFEE, which would be the majority of the transaction fees, as only some users of the network may provide TIPS to the miners to be favored for block inclusion. This eventually reduces the supply of ETH circulating in the network and hence makes ETH more valuable for all ETH holders. This makes ETH potentially deflationary if the amount of BASEFEE burnt is greater than the block rewards received by miners for mining a new block, hence adding to ETH’s scarcity.

But Eric Conners once again steps into the limelight to clear the misconception that the reason EIP-1559 needs to be implemented is that it burns ETH. He argues that the main point of the EIP is enhanced UX, but the burning of ETH is just a nice add-on that shouldn’t take center stage, and that once Ethereum scaling arrives, the fee burnt will be less eventually hence making ETH inflationary once again.

**#STOPEIP1559 vs #SUPPORTEIP1559**
===================================

You may have recently come across these #tag campaigns as you scroll through Twitter recently. What is the problem with EIP-1559 that has sparked such controversy among folks in the Ethereum ecosystem?

The uproar against EIP-1559 comes from a part of the miner community mainly led by a small mining pool called “Flexpool”. The reason for the uproar is mainly due to the fact that on implementation of EIP-1559, miners lose a portion of their revenue as the BASEFEE gets burnt, hence making miners dependent on block rewards as well as TIPS.

Recently, Flexpool set up a [website](https://stopeip1559.org/) to voice their discontent #STOPEIP1559 with the proposal and asked other mining pools to join their stand as well. As a counter to this campaign #SUPPORTEIP1559 has been asking the rest of the community to voice their support for EIP-1559 as it the EIP would help in creating a better UX for all parties involved in the Ethereum ecosystem.

On one hand, we have **_#SupportEIP1559_** which claims that, “Despite the fact that implementation of EIP-1559 would minimally reduce income — in most forecasts setting it back to levels that would have been common several months ago — a vocal minority of miners led by **Flexpool wants to arbitrarily increase the base fee** of EIP-1559 and continue to extract painfully high fees from users in order to line their own pockets.“, and has been publicly backed by many in the Ethereum space, including but not limited to AAVE, Loopring, DefiSaver, Dharma, etc.

Even well-known personalities in the Ethereum space, such as Anthony Sassano, have voiced their support for the EIP. “Miners are of course an important part of the Ethereum ecosystem as they are key to keeping the network running. In return for this service, they are paid for their work by the network and are the only ones who make money from the network in this way — no other ecosystem stakeholder gets paid directly by the network. Because of this, they are what I consider to be “service providers” which quite literally means they exist to _serve_ the network — the network does not exist to serve them. This is why many in the community are currently annoyed at certain miners for being against this proposal — they are already making a ton of money from the block reward + fees and want to reject a major upgrade based on a relatively small “pay cut”.”

And on the other hand, we have a group of miners who stand by **_#StopEIP1559_**, where they claim that “Ethereum developers initially needed miners for their coin but once successful they’ve thrown them under the bus. They cared about miners when Ethereum lacked mining support, and once they received it, they started to mistreat them. Large pools support the Ethereum Developers because they have large stores of ETH, making them investors themselves. They do not value their miners because they plan to dump them when 2.0 comes. pools. Miners are no longer vital to the Ethereum developers or big mining pools because they’ve made their money, and now miners are an embarrassment. The developers and big mining pools had forgotten where they came from and supported them when they started out. ”, backed by mining pools such as Flexpool, Nanopool, Ethermine, and more.

On February 26th a community call will take place to discuss the implementation of EIP-1559, and Flexpool has been invited on behalf of miners to voice their opinions and to push for a compromise on the issue. As we approach the date for the community call, tensions rise and all eyes are on what the discussion would be and the decisions made by the community during this call.

**In Summary**
==============

EIP-1559 is an Ethereum Improvement Proposal that aims to drastically improve the user-experience of gas management in Ethereum, by removing the current fee auction model for block inclusion but rather introducing a BASEFEE which is algorithmically set according to how much of the network is being utilized at that time and is burnt. The burning of the BASEFEE has sparked a divide within the Ethereum community, between miners and the rest, which resulted in two major campaigns #SUPPORTEIP1559 and #STOPEIP1559 that has been making rounds throughout crypto-twitter. On February 26, 2021, a community call will take place to discuss the implementation of EIP-1559 with participation from Flexpool on behalf of miners to push for a compromise.

As we move closer to February 26th it remains to be seen how this major proposal to change how the Ethereum consensus fundamentally works will play out in the end.

**EDIT: UPDATE ON EIP-1559 STATUS**
-----------------------------------

Ethereum Improvement Proposal [(EIP) 1559](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md) will be packaged with the London hard fork this coming July regardless of the mining industry’s discontent with the proposal, according to the All Core Developers [call](https://www.youtube.com/watch?v=xWfR-WxjmYg) Friday.

Miners generally seem to be accepting EIP-1559 a community call has revealed today where devs and miners discussed the matter.

Wang Chun of F2Pool re-iterated his support and in addition, he said supporting ETC in 2016 was a mistake. They now full-on Ethereum backers. Another miner, Chris (?) from Flexpool, said they held a poll which revealed 55.33% of miners accept EIP 1559 if another EIP, 969, is added.

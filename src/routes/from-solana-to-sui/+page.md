---
title: 'From Solana to Sui'
author: 'Kyle'
date: '2023-06-19'
---

## Solana, Ethereum, and Polygon

For the entirety of 2022 I was convinced Solana was the one and only blockchain capable of taking us to mass adoption.

The only other competitors seemed to be Ethereum and its many L2s, Polygon being the biggest. Ethereum had the largest market cap by far but it’s gas fees that ranged anywhere from $5 to $100+ per transaction were an absolute non-starter. Polygon was supposed to fix the gas fees and scaling issues of Ethereum but it doesn’t seem to be meeting that promise. While its gas fees are a lot lower, it’s transactions per second (TPS) still struggles to reach even 100. Compared to Solana’s consistent 3,000+ TPS, it just doesn’t seem viable.

Along with many other factors, like the level of decentralization (measured by the nakamoto coefficient), user experience, and security, Solana was the clear choice.

Unfortunately, Solana has a poor reputation. Whether it’s because it poses a legitimate threat to the Ethereum ecosystem, or the fact it went down several times, or misinformation, or its connections with FTX, Solana was not considered a serious contender.

It was all just FUD in my eyes, and I was ready to stick with Solana for as long as it took. But then I learned about Sui.

## Why Sui

It took me a while to come around, but after getting a taste of Sui it’s hard to go back. Solana may still have the most impressive technical infrastructure, along with a hardcore developer community, and bright future, but building on Sui is an experience no other blockchain can offer.

And the reason is because of Sui Move, a variation of Move, which is a programming language specifically designed for blockchains.

Yes, out of all the things that go into a making great blockchain, it’s the language that makes Sui so special. It’s also made some other interesting design choices with storage and single-owner objects, and a lot of other technical details that go right over my head, but the language is its special sauce.

It’s the language that developers interact with everyday, and it’s the language that enables developers to build more stuff faster.

Ethereum and Polygon use Solidity, Solana uses Rust, and while both are usable, only Sui Move has first-class support for digital assets with its object-centric model. In Sui, data is organized in objects, making it easy to define, read, write, compose, and transfer assets directly. It also makes it easy to check access control policies to make more secure contracts.

Whereas in other blockchains, data is organized in accounts and ownership is expressed in big mappings. There’s no concept of an actual asset, so you’ll be parsing mapping after mapping.

Maybe I’m missing something, but it just never really clicked for me. I struggled to understand how to build products with accounts and PDAs in Solana, but it’s just so intuitive in Sui.

I still have high hopes for Solana, and I know it’s also working on adding support for Move, but in the meantime I think Sui is the best choice for builders.

## More about Sui

\***\*Evan Cheng Talks Sui Blockchain @ Web Summit 2022\*\***

https://youtu.be/lWg66640bYU

\***\*Let’s get MOVING. Sam Blackshear Talks Move Programming Language | Sui Blockchain\*\***

https://youtu.be/b_2jZ4YEfWc

**************************\*\*\*\***************************Move AMA: Building with Move**************************\*\*\*\***************************

https://youtu.be/40Yf9UqD8fQ

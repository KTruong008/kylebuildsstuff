---
title: 'Ramen Profitability Retrospective'
author: 'Kyle'
date: '2023-06-17'
---

## Overview

I quit my job as a Software Developer in the fall of 2019 to pursue building Shopify apps full-time. My goal was to attain financial freedom, with the first major milestone being ramen profitability.

By spring of 2023 I had finally reached ramen profitability. I built 7 Shopify apps, a few AI-related products, and a couple crypto-related products. Only 3 of these products are still live and profitable today.

I’m older, fatter, and poorer. Was it worth it? I guess so. It wasn’t easy for me, but if given the option to choose again I would choose to do the same.

## Building cool stuff is not the same as building a business

My initial plan was to just copy existing apps, but make them better and cheaper. I browsed through the Shopify App Store for apps with low-to-mid ratings and I’d note the biggest complaints in their reviews, and then I’d build what I thought to be a better app.

The bulk of my attention went into learning and trying out new tech. I fully expected failure for my first few apps and that’s what I got. In return, I got to experiment with and incorporate new tools into my stack that interested in me, tools that I had long yearned for and deemed optimal for shipping in the long run, tools like Kubernetes, GraphQL, Svelte, and design systems.

Unfortunately this enthusiasm for new tech lasts only so long. I built 2 Shopify apps (related to product-page customizations) with this mindset, and after getting only 1 paying customer after a couple months of being live, I shut both apps down.

It made me question whether I actually wanted to build a business or if I just wanted to play with new tech. I wanted both.

The hardest part for me was how little guidance there was, I took for granted the structure employment provided. Every approved pull request, every meeting, every paycheck… these were all signs that I was doing the right thing.

But none of this is there when you go solo. The only validation in business is when someone pays you, and no one was paying me. I could write the cleanest code, use the latest tech, design the best UX, build the coolest features, but it meant nothing in terms of business.

## Product is often not the limiting factor (marketing matters)

I built my first profitable product in the spring of 2021. It was a pickup/delivery scheduling app (Pickup & Delivery Buddy) targeted towards local businesses affected by COVID lockdowns.

For the first couple months I had no paying users, despite a steadily increasing user base. I talked to customers, added features and fixed bugs, but it made no difference. The biggest shift, initially, came when I changed my pricing plans. It took a few tries but ultimately what worked for me was a freemium model, the key being to design the free tier not as an actual plan but more as an acquisition strategy.

Having found a working pricing plan I figured all I had to do then was to continue building stuff, because if you build it they will come, right?

So I continued building and I continued getting customers, but I found it odd that growth didn’t seem correlated to feature releases. Growth was linear and big feature releases didn’t change the trajectory at all. Even not releasing features didn’t change it. How much of my growth could be attributed to my product and how much to the app store’s algorithm?

The biggest increase in customers actually came when I updated my app listing to better fit certain keywords. A day of copywriting and keyword research did more for my growth than weeks of design and development. I reached $1k MRR with this app by 2022.

## Marketing really matters

After building a few more apps I found myself getting a lot more comfortable shipping fully built products from scratch, but the one thing that still bugged me was marketing.

“Marketing”, or distribution, in the Shopify App Store is largely dependent on playing nice with the algorithm. You build a good product, write a good app listing, get good reviews, and the algorithm will handle distribution for you. For the most part it works, you actually can just build it and they will come.

But I wanted to take off the training wheels and experience how marketing actually worked, outside the Shopify app store.

My first experiment involved building a pair of AI-assisted copywriting apps (Copybuddy), both would be near identical in features but one would launch on the Shopify app store and the other on the web. Long story short both apps failed. I did no marketing for both apps post-launch. And after a couple months the web version, to my surprise, actually acquired a couple users, though none were paying. And the Shopify version got about 20 users with a couple paying.

In the complete absence of marketing I got no customers, and it was only thanks to the app store’s algorithm that I got any at all.

My second experiment was a ChatGPT UI wrapper. I saw another solo founder on Twitter build one and make over $10k in a single week. I figured I could do the same.

So I built “AI Chat Bestie” in a week, tweeted about it on Twitter and launched on Product Hunt. It got quite a few users but only $100 in the couple weeks that followed. It didn’t help that these were lifetime deals either. There was no way I could compete with his 80k+ followers. Not only was he outputting content daily, but the brand and following he created over the years served as a powerful moat.

It was refreshing to learn later in his newsletter that this was not his first AI product, and that his first AI products flopped, despite having the same reach. Building a good product that solves a problem actually matters, but marketing is just as important, often times more important.

I applied these learnings to my AI text to speech product, beepbooply. I researched keywords, wrote blog posts, created video content, listed on AI aggregators, and got thousands of users, though only a handful are paying, for a total of $300 MRR as of today.

## But timing matters most

It’s really hard to pin the success or failure of a product on a single variable, it’s often more the case that it’s due to a combination of multiple factors. But still, I really think timing plays a vital role in whether a product will succeed. Launch a product too early or too late and it’ll fail unless you apply tremendous effort and skill, but launch at the right time and it’ll feel like everything just falls into place.

A large part in why Pickup & Delivery Buddy worked, I think, was because of the timing of COVID and lockdowns. Businesses had to adjust with less foot traffic, and pickup/delivery solutions were in demand.

I also spent a couple months building a post-purchase upsell app. It made use of a newer Shopify API so I figured there’d be less competition. But the market was smaller than expected and I launched late, only to find a competitor that was already well established. Despite having the same core features and being in the same categories in the app store, they grew and I didn’t.

I think the same story can be applied to my ChatGPT UI wrapper. When my competitor launched his product it went viral. By the time I launched a week later there were already 5 other imitators and we were fighting for scraps.

But what really made this clear to me was my latest Shopify app, a checkout customization app. Again, it made use of new Shopify APIs, but this time I was one of the first apps to launch in the category. The first few months were slow but then Shopify rolled out the features for all Shopify Plus merchants and my growth exploded. Within a month of the public roll out, my number of users quadrupled, and I reached ramen profitability. I positioned myself a tad bit early but it was still a great timing that aligned with this particular market.

## It’s ok to stop half way

One of the best things about working alone is that the choice is always yours. If you don’t like what you’re working on then just stop. If you wanted to make money working on something you don’t like then you should have just stayed employed. Life really is too short to invest in things you don’t care for.

But sometimes you don’t realize this until you go through it yourself. And that’s ok too. Nothing ventured nothing gained, as they say. It’s better to try and fail and learn that it’s not for you than to live on wondering what could have been.

My most challenging app was Subscription Buddy, a Shopify app for product subscriptions. It took me 4 months to build and it was the most complex app I built alone, by far. Not only was there the standard merchant-facing part along with the storefront-facing part, but it also involved building separate task queues for processing recurring payments, scheduling payments, retrying payments, handling failed payments, email notifications, updating orders, subscriptions, and all that good stuff.

It was a completed and working product, but due to many miscommunications and some minor bugs found during the app submission process, it was rejected enough times that my ability to submit was suspended for a month.

It was frustrating to say the least, having so many months of work just trashed. But after a week I realized this was quite the blessing. I had absolutely no desire to maintain such a beast of an app. Just spinning up the development environment required 7 terminal tabs, and fixing queue-related bugs would not have been fun.

I’ve started and stopped so many projects at this point, and each one has provided me valuable first-hand experiences and lessons.

I think it’s also worth mentioning that it’s extremely hard to compete and win when you’re building something half-heartedly. Putting in even 8 hours a day will be a struggle, but your competitors will gladly put in 16 hour days because it’s play for them.

## What solopreneurship is about

Solopreneurship, or whatever other name it goes by, to me, is about the delicate balance between striving for freedom and striving for survivability. Freedom from that which binds us, and survivability in terms of being able to pay the bills required for living in society.

Sometimes these things feel contradictory. How am I supposed to be free when I have to worry about the bills? I have to build something people find valuable enough to pay for but what if it’s not valuable to me? I’ll build what I find valuable, but what if no one else pays for it? It’s like every step I take for freedom is a step backwards for survivability, and every step for survivability is a step back for freedom.

I think it’s all just a mental trap. No thing or person ever held me back from doing what I wanted to do. I didn’t have to learn so many skills and I didn’t have to build Shopify apps, and I didn’t have to quit my job either. But I’m glad I did all those things, because it put space between me and my perceived obstacles, allowing me to see things more clearly.

It’s like every other day I find someone new on Twitter who succeeds in solopreneurship, making far more money in far less time, it’s still been a big struggle for me.

Why did I struggle so much for seemingly so little? Because I couldn’t stand not knowing if I could do it or not.

## Future plans

Lately my mindset has shifted from “can I do this?” to “should I do this?”. It seems to be the case that it’s usually more of a matter of time than it is a matter of capability when it comes to doing or attaining a particular thing. How much time will it take to accomplish a particular goal, or the cost of a task, is important when deciding whether to follow through or not.

Ramen profitability is still far away from ideal, and the fact that most my income is dependent upon a single platform is concerning as well. But it is what it is.

Maintaining my existing products takes relatively little effort at this point. I may spend a day or two every week in support and bug fixes, and I’ll probably spend a few weeks in development when enough feature requests have piled up, but my primary focus at the moment is learning how to build on the blockchain, Sui specifically.

It’s the most exciting technology I know of. The idea of a globally distributed, decentralized, and permissionless database that enables ownership of digital assets on a scale never seen before is something I would love to sink my teeth into.

Problem is that it’s super early right now, with lots of infrastructure that needs to be built. I think we may be still be a few years out before we start seeing some mainstream adoption. Still, nothing software-related excites me more than blockchain technology. AI is neat but looks fundamentally limited by large expensive models that only big tech has access to, so I think it’s a great time to start playing around with blockchain tech.

But nothing’s set in stone. Every day is full of possibilities, and I intend to keep that way as much as I can.

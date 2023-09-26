+++
title = "HD Wallet"

[extra]
category = "azimuth"

[glossaryEntry."hd wallet"]
name = "hd wallet"
symbol = ""
usage = "azimuth"
desc = "A system of related Ethereum addresses that store and manage an Urbit identity, each a proxy with different permissions over its management."

+++

The **Urbit HD Wallet** (_Hierarchical Deterministic_ Wallet) is a system of related Ethereum addresses that's used to store and manage an Urbit identity. Each of these Ethereum addresses have different powers over the same identity, from setting networking keys for communicating in the [Arvo](/reference/glossary/arvo) network to transferring ownership of identities.

The Ethereum address that has full powers over a given Urbit identity, including the ability to transfer ownership of the identity, is called the ownership address. Ethereum addresses with fewer powers – the ability to transfer ownership being notably absent – are known as [proxies](/reference/glossary/proxies). This scheme of compartmentalized powers allows wallet holders to only handle less valuable keys when they want to perform operations on an Urbit identity without risking their entire asset.

If a proxy or ownership address is compromised or has its keys lost, it can always be rederived using the master ticket, which is the piece of entropy that was initially used to derive the HD wallet.

### Further Reading

- [The Azimuth concepts page](/reference/azimuth/azimuth): A more in-depth explanation of Azimuth.
- [Urbit HD Wallet](/reference/azimuth/hd-wallet): An in-depth explanation of the HD wallet.

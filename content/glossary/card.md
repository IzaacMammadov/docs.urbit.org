+++
title = "Card"

[extra]
category = "hoon-nock"

[glossaryEntry.card]
name = "card"
symbol = ""
usage = "hoon-nock"
desc = "The type of effects produced by agents and threads."

+++

A **card** is the data type for effects produced by
[Gall](/reference/glossary/gall) [agents](/reference/glossary/agent) and
[threads](/reference/glossary/thread). It may contain things like requests to
[vanes](/reference/glossary/vane) (kernel modules),
[pokes](/reference/glossary/poke) to other agents,
[facts](/reference/glossary/fact) for subscribers, etc.

### Further Reading

- [Gall data types reference](/reference/arvo/gall/data-types#cardagent):
  Documentation of the `card` type.
- [App school: cards lesson](/guides/core/app-school/5-cards): A lesson on cards.

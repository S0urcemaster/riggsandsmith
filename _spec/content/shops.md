# Shops Content

This file contains in-game text for shopping and acquisition.

Shop content includes item labels, suspicious purchase warnings, illegal source text, and purchase consequence messages.

The Shopping App represents darknet acquisition.

All shop items carry police risk, but some expose known risk while others expose unknown risk.

## Suspicious Purchase Warning

Status: placeholder

Use:
Shown when a purchase may raise police heat.

Context:
Shopping App before purchase confirmation or after a suspicious purchase.

Text:
TBD

Intent:
The player should understand that aggressive acquisition can increase police heat before the next hack begins.

Tone:
practical, cautionary, underground

Variables:

- item name
- police heat change
- price

## Unknown Risk Purchase Warning

Status: placeholder

Use:
Shown when a shop item carries unknown darknet risk.

Context:
Shopping App before purchase confirmation.

Text:
TBD

Intent:
The player should understand that the item may create stronger short-term opportunity while delaying an unknown police heat consequence.

Tone:
practical, shady, cautionary

Variables:

- item name
- price
- current catch count

## Darknet Risk Resolved

Status: placeholder

Use:
Shown when a pending unknown darknet risk resolves.

Context:
Next Home entry after the following Hack resolves, before the player makes the next planning decision.

Text:
TBD

Intent:
The player should understand how hot the previous darknet purchase turned out to be and how police heat changed.

Tone:
consequence-focused, tense, readable

Variables:

- item name
- police heat change
- current police heat
- catch count

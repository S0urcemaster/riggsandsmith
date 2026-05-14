# Catch Content

This file contains in-game text for Catch.

Catch content covers moments when the player is caught by casino security or police, receives consequences, or reaches run end after the third catch.

## Casino Security Catch

Status: placeholder

Use:
Shown when casino heat reaches maximum.

Context:
The player is caught by casino security and enters Catch.

Text:
TBD

Intent:
The player should understand that casino heat caused the catch.

Tone:
immediate, controlled, threatening

Variables:

- casino heat
- catch count
- target name, if available

## Police Catch

Status: placeholder

Use:
Shown when police heat reaches maximum.

Context:
The player is caught by police and enters Catch.

Text:
TBD

Intent:
The player should understand that police heat caused the catch.

Tone:
cold, procedural, escalating

Variables:

- police heat
- catch count

## Third Catch Run End

Status: placeholder

Use:
Shown when catch count reaches three.

Context:
The run ends and its run score is written to the highscore list.

Text:
TBD

Intent:
The player should understand that the current run is over and that the result has been recorded.

Tone:
final, terse, consequence-heavy

Variables:

- run score
- total money extracted
- final catch source

## Third Casino Security Catch Run End

Status: accepted

Use:
Shown when the third catch is caused by casino security.

Context:
Casino heat reaches maximum, Catch is triggered, catch count reaches three, and the run ends.

Text:
Casino security taught you a hard lesson. You're done in this city!

Intent:
The player should understand that being caught by casino security for the third time ends the run.

Tone:
final, rough, punitive

Variables:
none

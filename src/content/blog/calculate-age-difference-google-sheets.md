---
title: "How to Calculate Age Difference in Google Sheets"
description: "Use simple Google Sheets formulas to compare two dates in years, months and days."
cluster: practical
relatedPosts: ["calculate-age-difference-excel", "date-format-mistakes-age-calculators", "age-difference-total-days-weeks-months"]
featured: false
---

Google Sheets can find the gap between two dates. First, make sure both cells contain real dates.

Put one date in `A2` and the other in `B2`.

## Find the total full months

Use:

`=DATEDIF(MIN(A2,B2),MAX(A2,B2),"M")`

If this answer is in `C2`, find the full years with:

`=QUOTIENT(C2,12)`

Find the months left with:

`=MOD(C2,12)`

## Find the days left

Use:

`=MAX(A2,B2)-EDATE(MIN(A2,B2),C2)`

For total days only, use:

`=MAX(A2,B2)-MIN(A2,B2)`

Google explains the `DATEDIF` function on its [official help page](https://support.google.com/docs/answer/6055612?hl=en-GB).

## Set the correct date style

In India, you may want dates to show as DD/MM/YYYY. Open the spreadsheet settings and check the country or date style.

Remember: changing the look of a cell does not fix text that is not stored as a real date.

## Test the formula

Try these cases:

- Same date in both cells
- Dates entered in reverse order
- A 29 February date
- Dates near the end of a month

For one quick comparison, check the result with the [Age Difference Calculator](/#calculator).

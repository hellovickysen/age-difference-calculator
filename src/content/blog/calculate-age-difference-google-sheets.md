---
title: "How to Calculate Age Difference in Google Sheets"
description: "Use simple Google Sheets formulas to compare two dates in years, months and days."
cluster: practical
relatedPosts: ["calculate-age-difference-excel", "date-format-mistakes-age-calculators", "age-difference-total-days-weeks-months"]
featured: false
---

Google Sheets can find the gap between two dates. First, make sure both cells contain real dates.

Put one date in `A2` and the other in `B2`.

## Prepare the date columns

Give both columns a clear heading, such as **First date** and **Second date**. Select the cells and choose a date format that you understand.

For Indian users, set the spreadsheet locale to India if you want DD/MM/YYYY. You can also enter dates with the month written in words, such as `7 August 1992`. This reduces day-and-month mistakes.

## Find the total full months

Use:

`=DATEDIF(MIN(A2,B2),MAX(A2,B2),"M")`

If this answer is in `C2`, find the full years with:

`=QUOTIENT(C2,12)`

Find the months left with:

`=MOD(C2,12)`

This method works in either date order because `MIN` chooses the earlier date and `MAX` chooses the later date.

## Find the days left

Use:

`=MAX(A2,B2)-EDATE(MIN(A2,B2),C2)`

For total days only, use:

`=MAX(A2,B2)-MIN(A2,B2)`

Suppose `A2` contains 7 August 1992 and `B2` contains 21 February 1997. The formulas return **4 years, 6 months and 14 days**.

## Show one readable answer

If you prefer one result cell, use:

`=IF(OR(A2="",B2=""),"",QUOTIENT(DATEDIF(MIN(A2,B2),MAX(A2,B2),"M"),12)&" years, "&MOD(DATEDIF(MIN(A2,B2),MAX(A2,B2),"M"),12)&" months and "&(MAX(A2,B2)-EDATE(MIN(A2,B2),DATEDIF(MIN(A2,B2),MAX(A2,B2),"M")))&" days")`

The opening `IF` keeps the result blank until both dates are present. This is helpful when you copy the formula down an empty list.

Google explains the `DATEDIF` function on its [official help page](https://support.google.com/docs/answer/6055612?hl=en-GB).

## Fix common Google Sheets problems

- **The formula returns an error:** check that both cells are dates, not text copied from another file.
- **The day and month are reversed:** check the spreadsheet locale under File and Settings.
- **The answer changes unexpectedly:** look for a hidden time value in an imported date.
- **The formula uses today:** replace `TODAY()` with the second date cell when comparing two people.
- **The result is a decimal:** use calendar months and days when you need an exact age gap, not `YEARFRAC`.

Remember: changing the look of a cell does not fix text that is not stored as a real date.

## Copy the formula down safely

Place the formula in row 2, then drag the small square at the bottom-right of the cell. Google Sheets will change `A2` and `B2` to the next row automatically.

Check the first few results before filling hundreds of rows. A wrong locale or text date can affect the whole list.

## Test the formula

Try these cases:

- Same date in both cells
- Dates entered in reverse order
- A 29 February date
- Dates near the end of a month

For one quick comparison, check the result with the [Age Difference Calculator](/#calculator).

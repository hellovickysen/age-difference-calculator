---
title: "How to Calculate Age Difference in Excel"
description: "Use simple Excel formulas to find full years, months and days between two dates."
cluster: practical
relatedPosts: ["calculate-age-difference-google-sheets", "date-format-mistakes-age-calculators", "age-difference-total-days-weeks-months"]
featured: false
---

Excel can compare two dates when both cells contain real date values.

Put the first date in cell `A2` and the second date in `B2`. The formulas below work even if the older date is entered second.

## Find the full months

Use this formula:

`=DATEDIF(MIN(A2,B2),MAX(A2,B2),"M")`

This gives the total number of full months. If the answer is in `C2`, find the full years with:

`=QUOTIENT(C2,12)`

Find the months left with:

`=MOD(C2,12)`

## Find the days left

Use:

`=MAX(A2,B2)-EDATE(MIN(A2,B2),C2)`

To find only the total days between the dates, use:

`=MAX(A2,B2)-MIN(A2,B2)`

## Why not use the MD option without checking?

Microsoft says the `MD` option in `DATEDIF` can give a wrong answer in some cases. The formula above first finds the full months and then counts the days left. See [Microsoft’s DATEDIF help page](https://support.microsoft.com/en-us/excel/datedif-function).

## Check your cells

Changing the cell style to DD/MM/YYYY does not turn plain text into a real date. If Excel shows an error, check how the dates are stored.

Test the sheet with dates near 29 February and the end of a month. You can also compare one pair with the [online calculator](/#calculator).

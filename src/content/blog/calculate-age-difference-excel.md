---
title: "How to Calculate Age Difference in Excel"
description: "Use simple Excel formulas to find full years, months and days between two dates."
cluster: practical
relatedPosts: ["calculate-age-difference-google-sheets", "date-format-mistakes-age-calculators", "age-difference-total-days-weeks-months"]
featured: false
---

Excel can compare two dates when both cells contain real date values.

Put the first date in cell `A2` and the second date in `B2`. The formulas below work even if the older date is entered second. They return completed calendar years, months and days rather than a decimal estimate.

## Set up the sheet

Use these headings:

- `A1`: First date
- `B1`: Second date
- `C1`: Full months
- `D1`: Years
- `E1`: Months left
- `F1`: Days left

Enter dates with four-digit years. For example, enter 15 March 1990 and 28 November 1995. In India, you may display them as 15/03/1990 and 28/11/1995.

## Find the full months

Use this formula:

`=DATEDIF(MIN(A2,B2),MAX(A2,B2),"M")`

This gives the total number of full months. If the answer is in `C2`, find the full years with:

`=QUOTIENT(C2,12)`

Find the months left with:

`=MOD(C2,12)`

For the example dates, `C2` is 68 full months. The next two formulas split this into 5 years and 8 months.

## Find the days left

Use:

`=MAX(A2,B2)-EDATE(MIN(A2,B2),C2)`

To find only the total days between the dates, use:

`=MAX(A2,B2)-MIN(A2,B2)`

For the example, the final result is **5 years, 8 months and 13 days**.

## Put the answer in one cell

Recent versions of Excel support `LET`, which makes a long formula easier to read:

`=LET(start,MIN(A2,B2),finish,MAX(A2,B2),months,DATEDIF(start,finish,"M"),QUOTIENT(months,12)&" years, "&MOD(months,12)&" months and "&(finish-EDATE(start,months))&" days")`

If your Excel version does not support `LET`, use the helper cells above. They are easier to check and copy down a large sheet.

## Why not use the MD option without checking?

Microsoft says the `MD` option in `DATEDIF` can give a wrong answer in some cases. The formula above first finds the full months and then counts the days left. See [Microsoft’s DATEDIF help page](https://support.microsoft.com/en-us/excel/datedif-function).

## Fix common Excel errors

- **The formula shows `#VALUE!`:** one or both cells may contain text instead of a real date.
- **The date changes after entry:** check the regional date settings and type the month in words.
- **The answer looks one year too high:** do not use `YEAR(B2)-YEAR(A2)` because it ignores whether the birthday has passed.
- **A number such as 45200 appears:** format the date cell as a date, but format result cells as General or Number.
- **Blank rows show errors:** wrap the formula in `IF(OR(A2="",B2=""),"",...)` when copying it down.

Changing the cell style to DD/MM/YYYY does not turn plain text into a real date. Select the cell and check whether Excel recognises it as a date value.

## Test before using many rows

Test the sheet with dates near 29 February and the end of a month. You can also compare one pair with the [online calculator](/#calculator).

Try a same-date pair, reversed dates and 31 January to a date in February. These tests help you catch a wrong cell reference before filling the formula down the whole column.

# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OLogin.spec.ts >> OrangeHRM login test @master @sanity @regression
- Location: tests\OLogin.spec.ts:24:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Logout' })

```

```
Error: browserContext.close: Target page, context or browser has been closed
```
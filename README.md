# Responder

## todo

- c
- onboarding

- add dashboard button to nav

- flow
  - connect google my business
    - add relevant fields to db
  - set up filter path logic  
    - default to just the two options - negative + positive
    - (premium) allow for custom filters
  - for each path
    - set up gpt prompting
    - option to send email instead of actually creating the reply for negative reviews
    - time range for responses

- stripe
  - billing page
  - idk the prices
- backend to actually set up gpt (set up parts that aren't approved yet still)
  - [ ] trigger on google review
  - [ ] filter logic
  - [ ] send prompt
  - [ ] create google my business reply

- auth
  - dashboard should redirect to users page when logged in
  - connect to google my business
  - need email address
  - (backlog) option to just connect own api key?

- notifications/history
- dashboard
- style last

## later

- muted color no like
- evaluate security of routing...
- style user profile dropdown

## look more into

- sentry
- posthog
  - add tracking to actual events (posthog.capture)
- parallel routes in next
- lol react taint? did not follow

- sst for prod?

## Notes

- weird color block only happens with empty space so just ignore.

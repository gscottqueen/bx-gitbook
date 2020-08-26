# Application Standards

## 12 Factor Application

Tldr; An application which can **EASILY** be run in a ephemeral (cattle, not pets) manner.

* Use declarative formats for setup automation, to minimize time and cost for new developers joining the project.
* Have a clean contract with the underlying operating system, offering maximum portability between execution environments.
* Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration.
* Minimize divergence between development and production, enabling continuous deployment for maximum agility.
* And can scale up without significant changes to tooling, architecture, or development practices.

The entirety of the document can and should be read at [https://12factor.net/](12factor.net)

## Coding Standards

* We follow established best practices so we can easily work with each others code, and contribute back.
* We don't hard code
* We stand behind the YAGNI (You ain't gonna need it) philosophy and avoid "gold plating."
  * When writing code, our code should solve ONLY and EXACTLY the use case that we are trying to support. In many instances we have a desired to make things MORE FLEXIBLE for the FUTURE but that is code we will have to support without knowing whether any of those use cases will ever come up.
  Another big reason for wanting to be FLEXIBLE is that refactoring is hard, and feels easier to have flexibility at front, but that is why we write automattests, so refactoring will not be as painful.

## Debugging

* When debugging, we double check for false positives. We alway cross check a positive result in case that positive result is the ONLY result, instead of one of many possible results.
* We validate assumptions, so that we work on the right thing.
  * Am I assuming this is a browser/presentation issue?
  * Am I assuming this is a network issue?
  * Am I assuming this is a Header Iss
  * Am I assuming this is an issue with a specific module?
* When we get 400 or 500 responses, we check the logs under Docker Compose logs.
* We use browser like Chrome dev console or Firebug tools to identify JS and server issues so that we don't miss issues between the browser and Drupal.

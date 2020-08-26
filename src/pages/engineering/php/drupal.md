# Drupal Development

## Drupal Standards

Most Drupal 8 and beyond projects at Bixal use some version of [Bixal drupal-project](https://github.com/Bixal/drupal-project). The readme file in your project should be the first thing you do when on-boarding on to a new project. It should contain answers to most questions about how to set up the project and where to get resources. If there are addtional questions contact the project team in Microsoft teams for help.

### Drupal-specific Coding Standards

* We follow [Drupal Coding Standards](https://www.drupal.org/docs/develop/standards) which includes:
  * [PHP](https://drupal.org/coding-standards)
  * [CSS](https://www.drupal.org/docs/develop/standards/css)
  * [JS](https://www.drupal.org/docs/develop/standards/javascript) coding standards.
  * [Writing Secure Code in Drupal 7](https://www.drupal.org/docs/7/security/writing-secure-code)
  * [Writing Secure Code in Drupal 8](https://www.drupal.org/docs/8/security/writing-secure-code-for-drupal-8)
* We ensure and test our coding standards using the built in automation in projects. Please check the readme.md of the project you are working on. Most projects will have a [Makefile](https://github.com/Bixal/drupal-project/blob/8.x/Makefile) or Python Script which makes this a near trivial effort. Certain projects or lead may enforce this effort using githook. All projects will test for this in Bitbucket pipelines, Gitlab, Github, CircleCi, etc.
  * All module functions (even little helper functions) should have the module prefix.
* We always try to use Drupal functions where they exist. This helps with upgrades (among other things).
  * Use `drupal_get_path();` to create a path to a file in your module directory.
  * Use `path_to_theme();` to create a path to a file in the current theme directory.
* We use the theme system! When theming, don't hack module code when it is possible to use a theme function instead.
  * The corollary: when coding modules keep all markup in theme functions!
* We use render arrays and theme functions, so we can separate logic and presentation.
* We try to keep modules that could be useful on another site completely generic from the start (a good technique is to develop in a fresh Drupal install rather then the actual site), and theme the site specific stuff in your site theme.



## Git Commits

* Include a descriptive message in the git commit.
* Begin the commit message with the ticket number, e.g. GN-123 (JIRA).

## Editor Configuration for Coding

These are some example editor configuration values - each editor has it's own set:

```
// The default for most editors and printers. This is the displayed width
// of tabs, but is irrelevant as there shouldn't be any actual tabs!
TAB_WIDTH = 8
TAB_KEY_INSERTS_INDENT_WIDTH_SPACES = true
// The default for Drupal (and many other languages) code. With this setting,
// pressing the TAB key inserts two actual spaces, instead of a tab.
INDENT_WIDTH = 2
```

To configure your editor/development environment for Drupal:

* [PHP Storm](https://www.drupal.org/docs/develop/development-tools/configuring-phpstorm)
  * Bixal has PHP Storm licenses available for the developers. To request one, please contact the [help desk](help-desk-agile.md).
* [VSCode](https://www.drupal.org/docs/develop/development-tools/configuring-visual-studio-code)

@todo this entire section below needs to be reviewed and updated
# Drupal Site Building

## Practices

### We prototype high risk items first

We need to scope out high-risk tickets to inform basic site architecture decisions. As we know more about a problem, we reduce the risk. Therefore focusing on high-risk first enables early identification of architectural obstacles and opportunities, leading to better matching of functional requirements and system architecture.

#### How we do this

* Scan the product backlog and identify tickets whose functional requirements don't seem to align with known, low-risk mechanisms for achieving them.
* Label the tickets as "high-risk" tickets, and attempt to outline what it will take to build the function.
* Identify dependencies that may impact the ability to accomplish the ticket. Clearly indicate those dependencies in the ticket.
* If necessary, produce a simple flowchart to analyze the problem and call attention to unknown factors in the workflow.
* Prototype the workflow using "stub" data and actions to clarify when/how handoffs need to occur.

#### When to do this

* When starting a project "from scratch" or from a concept.
* When a team has identified tasks that look like they are high-risk activities.
* When the project is time or budget constrained.

#### When to avoid

* When you don't have enough of a backlog to get a good sense of task priorities. It's easy to go down rabbit holes if you don't have a sense of how to limit action.
* When there are too many outstanding dependencies, or its clear that dependencies can't be resolved within the context of developing the function within a sprint or two.

#### Caveat

* Make sure you consider likely extensions to functionality after you "set" the architecture based on high risk tickets.

#### Examples

* Complex permissions
* Search

### We use Drupal contrib projects rather than custom code

We use established Drupal contrib projects rather than writing custom code. It's generally cheaper to maintain and the barrier to maintainability is lower (less programmer skills). There are often established best practices around projects that allow us to standardize. We can take advantage of other developers insights and skills.

#### How do we do this

* Download and configure the relevant module(s) / themes.

#### When to use

* A module's function closely aligns with a requirement.
* When anticipated function changes align with how the module can be configured.
* When other administrators/developers/end-users are expected to be able to make configuration changes.

#### When to avoid

* When the module seems abandoned.
* When the module had not yet had a 1.0 release and hasn't been updated in over 6 months.
* When the module shows serious impediments in its issue queue.
* When a lighter-weight approach might produce the same functionality.
* When an alternative approach using other Drupal tools (e.g. Views for customized data retrieval) might offer less lock-in and more configurability.
* When the price of setup and configuration and likelihood of unintentional breakage indicates that a custom module is a better fit.
* When a more direct approach (i.e. modifying data at the db level rather than through Drupal) might be faster/better/more economical.
* When the desired functionality is a small subset of a large overhead.

#### Resources

* <http://civicactions.com/blog/most_important_decision_developing_site_Contributed_vs_custom_development>
* <http://www.civicactions.com/blog/Drupal_Developer_Tips_Getting_Most_out_Open_Source>

### We create websites with flexible layouts

Components, Twig, Container Paragraphs, and Master-display content views vs Blocks, Context, Rules, Panels, Panelizer and Page-display field views.

#### Blocks
#### Context
#### Panels
#### How we do this
#### When to use
#### When to avoid
### We build sites such that we can accommodate changing needs and requirements

We are agile, and we expect our clients to require agility in their website.

#### Checklist

* We adhere to Drupal standards as much as possible.
* We use OTS solutions where practical.
* We choose the most reliable and robust solution to a functional problem and try not to lock ourselves into a specific approach.

### We treat the designs of UX specialists and the user stories of content editors and creators seriously

Drupal has a notoriously poor content workflow and editing experience OOTB. There are simple ways to improve this.

#### How we do this

* ckeditor.
* Create taxonomy vocabularies, related VBO views matched with rule sets to assist in managing editorial workflows.
* Create custom versions of the admin/content/node page (and other entity types) that shows fields that are useful for managing and bulk editing content.
* Install core and contributed modules to assist in managing workflow tasks.

### We configure sites that are optimized for SEO

#### Modules that are easy SEO wins

* 508 compliance
* globalredirect
* xml sitemap
* Google Analytics module
* metatag
* proper configuration of pathauto
* redirect
* Lots more ideas at <https://drupal.org/project/seo_checklist>

#### Other SEO practices

* Training clients in creating search optimized content.
* Researching/identifying keywords (Discovery).

### We include social media functions

#### How we do this

* AddThis / ShareThis / AddToAny are services that offer code snippets and analytics. They should be reviewed for current privacy concerns and the client's governance policy before use.

#### When to use

* When one of the goals of the site is for content to be shared via social media.

#### When to avoid

* When content is not accessible to the public.

#### Examples

* AddThis: [rpa.org/spotlight/why-citibike-blue-makes-some-see-red](http://www.rpa.org/spotlight/why-citibike-blue-makes-some-see-red)

#### Tips

* It's not always worth bothering with an AddThis/ShareThis/AddtoAny Drupal module; adding code to twig templates can sometimes be easier.

### We capture configuration settings in yaml files

* Drupal configuration settings reside in various places in the source database. We capture configuration settings in yaml files so that those settings can be versioned and reverted, and can be transferred to other installations without being manually entered.
* We use config_partial_export to easily allow exporting of individual configuration file changes to be committed.

### We consider Search configuration implications early in the development process

#### Checklist

* Drupal v Apache Solr?
* Faceted search?
* Substitute views search for Drupal or Solr search
* Do we need to index file attachments? (Has server php library implications)

### We configure permissions to be as simple as possible for the user stories

#### We consider when to use

* field level permissions (field_permissions)
* taxonomy level permissions (taxonomy_access)
* group permissions (organic_groups)
* content type permissions (content_access)
* role permissions
* individual user permissions (content_access)

### We use entity view modes rather than duplicated views field configurations

We use entity view modes (e.g. teaser) to configure reusable displays for entities, rather than duplicated views field configurations.
We do this so we can avoid fragile duplicated configuration and emphasize consistency of display and modular CSS. There are still occasions where field based views make sense, but these are generally singletons. Part of this needs to happen in the design phase, when we're thinking about doing these displays in a modular fashion.

#### When to use

* When you've got a fiddly, reused data object.
* When you know you're going to reuse a group of data object (e.g. a "teaser" with thumbnail, header, and "like" widget that always appear together, at the same size).

#### When to avoid

* If you're only displaying a group of related data objects one time, in one place on the site.

#### Example

* <http://eatfresh.org>: Search results, related recipes

### We improve the registration/login experience beyond default Drupal behavior

This is a very common, important user story in Drupal that often gets ignored.

#### Ways to improve

* LoginToboggan
* email_registration module (overlaps/conflicts with LoginToboggan)
* inline login blocks
* think about redirects
* update the default status messages
* theming the form fields
* colorbox popups (although be aware of mobile)
* <http://drupalwatchdog.com/2/1/dedrupalize-login-form>

### We are ALWAYS clear on which site is the config/content master

Never lose time working on the wrong site! \[Hint: in nearly all cases the config/content master should be "live" from day 1.]

#### How we do this

* Add a ticket to the project Trello board designing dev, qa and live servers
* Look into using Environment Indicator to differentiate sites (<https://www.drupal.org/project/environment_indicator>)

### We don't install modules we don't need, and we remove ones we no longer need

This means our sites are as simple, focused and performant as possible.

#### How we do this

* We prefer to use config.make as an inventory of contributed modules and patches.
* We use dev commit id's to identify our dev versions in contrib.make instead of the generic "7.x-dev".
* We routinely review enabled modules in the module list, and remove modules that aren't currently enabled ASAP, but no later than pushes to production servers.
* Remove = disable AND uninstall AND delete.

### We build sites that make it easy to upload and display images and video

#### How we do this

* Insert module for inline images ... ASPCA, Rethink, etc.
* Media module and WYSYWIG/CKEditor integration... Mukutu, EatFresh, GlobalNET
* Embed fields ... C4CM
* Video filter ... RPA

### We upgrade Drupal major versions with careful consideration

Why? So that we can mitigate risk and ensure a good value proposition for the client.

#### How we do this

* We don't (normally) upgrade, we reconstruct and port existing data.
* Either make no design changes and port exact existing functionality, OR consider the project to be a ground-up redesign.

#### When to do it

* When there's sufficient budget and time to accomplish it.
* When there are equivalent contrib modules.

### When to avoid

* Anytime there are Organic Groups

### Examples

* etr: <https://www.nationalserviceresources.gov/>

### We update to new minor versions of Drupal core

We do this so we can resolve bugs when necessary, or address security vulnerabilities.

#### How we do this

* We backup our db using pushdb –backup (or drush sql-dump).
* We use the drush up on our sandbox, then commit/tag/push.
* There's a trello board to monitor security updates for sites we host <https://trello.com/b/QdozgLL0/security-updates-for-client-sites>

### We configure secure text filters

#### Avoid

* Tables
* Tables
* php module

### We use Entityform instead of Webform whenever possible

Unlike Webform module, Entityform module uses Form API instead of reinventing the wheel. This makes it far more easy to integrate with other modules, particularly Rules and modules that alter entity forms. Also, it's exportable in Features.

Projects where this has proven useful: RTM, Teach.

#### When to do this

* When you have a smallish number of forms.
* When you need excellent views, token, rules etc integration.
* When you need better control over response output.

#### When not to do this

* When you have a lot of forms (dozens or hundreds) - management can get challenging unless you also build tools to help manage the forms.

### We use panels layouts, rather than page specific layout adjustments

We do this so that layouts are cleanly separated from other visual styles, and so that they are reusable.

### We configure streamlined and semantic markup by default

We do this so that our pages are smaller, faster and simpler to theme as well as more accessible. If wrappers turn out to be needed later in theming they are easy to add.

#### Examples

* Views (e.g. fields) - remove wrapper markup and specify semantic tags.
* Panels/blocks - use <https://www.drupal.org/project/clean_markup> to create semantic tags and remove wrappers.
* Fields - use <https://www.drupal.org/project/fences> to remove field wrappers by default, and also set field tags to be semantic.

### We set a "module budget" for a project

We do this to prioritize functionality and keep things maintainable and performant.

### We consider featurization strategies before starting a project

#### Strategies

##### All in One

* Good for: Smaller sites, prototypes.
* Pros: Easy, simple.
* Cons: Breaks when you hit complex/large features because of PHP and MySQL limits (PHP max_input_vars and MySQL max transaction size).

##### Functional separation

(e.g. content types & views, roles/permissions; strongarm settings, theming and defaults, etc)

* Good for: Medium sites, smaller, more stable teams.
* Pros: Relatively easy to parse out where things go. Simpler, structure.
* Cons: Need to commit to multiple features for single function; relatively easy to step on someone else's work and not notice it. Dependency issues/conflict management. Possibility of not putting things in the right place: more feature housekeeping. Requires good semantics / categorization.

##### Granular/atomic content type/function

(One feature per content type or function)

* Good for: Larger sites, fluid teams
* Pros: Easier for developer to focus on specific instances, see when they've stepped on things;
* Cons: Complexity; dependency management, conflict management. Possibility for multiple developers to work on the same functional issue but in different features at different times. More difficult to figure out where a particular function lives when it crosses over content types.

#### Tools / Resources to consider

* Features Extra module (adds blocks, user profiles to Features)
* Configuration module (captures a subset of what Features captures)
* Features Builder: <https://www.drupal.org/project/features_builder>
* Apps: <https://www.drupal.org/project/apps>

### We avoid namespace conflicts

We carefully consider our semantics, naming features/views/custom modules in ways that don't conflict with Drupal terms and client terms.

### We use drush to update node access

Make sure you set it to batch mode. You can use:

\`PHP_OPTIONS='-d disable_functions=set_time_limit -d max_execution_time=0 -d memory_limit=1024M' drush php-eval "node_access_rebuild();".

to rebuild the node access table. If you leave off TRUE, it will attempt to update all nodes, and may result in some php out of memory errors.

#### References

* <http://befused.com/drupal/rebuild-node-permissions-large-sites>
* <https://docs.acquia.com/articles/rebuilding-node-access-permissions>

### We don't like media_gallery module

What it does: Allows users to upload/maintain folders of resources using Media module integration.

Useful ONLY if you don't have to change anything about it.

#### Why not

* Hard coded behavior and UI.
* Odd structure and doesn't recognize a lot of standard Drupal functions.
* Difficult to troubleshoot.
* UI almost always needs fixing/updating but it's difficult to do.

### We don't like Drupal Commons

#### Why not

* Unnecessary complexity for little return.
* We can use OG instead.
* Difficult to re-theme.
* Really difficult to upgrade and keep modules up to date.

#### When to use it

* If you aren't going to change anything.

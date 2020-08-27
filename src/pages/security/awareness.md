# Security Awareness and Tools

## Password Management Tools

A password manager will enable you to have unique, strong passwords for every service that you log into. Good password managers will generate new passwords for you, auto-fill web forms, allow extra protection for high-security accounts (like banking), and more. Choose a password manager that encrypts locally (in your browser, so you don't have to trust the provider to keep their data safe) and that has iPhone and Android apps that will auto-sync with the manager. At Bixal Solutions, we currently recommend [BitWarden](https://bitwarden.com/) ([open source and privacy focused](https://restoreprivacy.com/bitwarden/)) LastPass or Keeper as it is the most full-featured, but we are keeping a close eye on the FOSS KeePass and Password Safe solutions.

### LastPass

* The [LastPass](https://lastpass.com/) password generator can easily create and maintain hundreds of different passwords. And LastPass has free iPhone and Android apps.
  * We recommend a minimum of 16 character passwords using all character types. (Some old systems will need you to lessen this level of security, but those are few.)
  * Once you have all your passwords in LastPass, take the "Security Challenge" - your score should be 80% or higher.
* LastPass is required for members of the Bixal Solutions System Admins and DevSecOps Team.
* We recommend LastPass premium but do not require it. A premium account will enable unlimited sync across your devices and more robust two-factor authentication (e.g. with a [YubiKey](#yubikey) token).
* Set up Two Factor Authentication on your LastPass Account (see below). LastPass will be storing all your passwords, so make it secure.
* It is fine (and perhaps preferable, because your browser can only use one LastPass account at a time) to use a personal email address to create your LastPass account.
* Bixal Solutions also requires that you have a [backup second factor authenticator](#two-factor-redundancy-and-tfa-backup-codes) for your LastPass account.

### Disable Browser Password Autofill

LastPass provides secure password management especially when unlocked via Two Factor Authentication. Storing new passwords created in LastPass in your browser completely defeats this security, enabling anyone with access to your browser access to all your sites. If asked by your browser "Do you want to save this password in your browser?" answer "**No**". Then disable this insecure action altogether:

* In Chrome, go to chrome://settings/ and uncheck "Offer to save your web passwords"
* In Firefox, go to about:preferences#security and uncheck "Remember logins for sites"
* In Safari, go to Preferences >> Passwords and uncheck "AutoFill user names and passwords"

## Use Two Factor (or 2-Step) Authentication (TFA, 2FA)

Two-Factor Authentication (TFA) includes something you know (e.g. your memorized password) and something you have (e.g. your smartphone or a YubiKey) and can greatly increase the security of your systems. Bixal Solutions recommends you use Two-Factor Authentication for services that support it.

For example, as your password manager grows to have more passwords in it - not only Bixal Solutions' systems and clients but also your personal bank accounts, credit cards, school records, etc. - it becomes increasingly important to have it protected by more than just a password.

Bixal Solutions requires that its employees and contractors that are given access to the Bixal Solutions Office 365 - that include Outlook, Teams and OneDrive access - use Two-Factor Authentication on their Bixal Solutions Office365 Account.

### Two-Factor Authenticators (TFA)

There are many hardware and software tools for creating secure "one time passwords" (OTP). Three that we frequently use internally are described below.

Do not rely on SMS text messages for general two-factor authentication as it is less secure than others listed here. At the time of this writing, however, setting up Two-Factor Authentication on your Google account initially requires SMS verification. This is OK, and also serves as a "TFA Backup" mechanism (be sure to see the essential section below on [Two-Factor Redundancy and TFA Backup Codes](#two-factor-redundancy-and-tfa-backup-codes)).

#### LastPass Authenticator

* This provides tight integration with some apps, see: <https://lastpass.com/auth/>
* For more info, see: <https://support.logmeininc.com/lastpass/help/lastpass-authenticator-lp030014>

#### Authy

* For installation instructions (iPhone or Android), see: <https://authy.com/download/>
* Guides for setting up Two-Factor Authentication: <https://authy.com/guides/>

#### YubiKey

Once set up, your YubiKey greatly simplifies the process of Two-Factor Authentication (TFA). While at home, keep the key plugged into an unused USB port and simply touch the button if asked to authenticate. This saves time while enabling the strongest security. While on the road, the nearly indestructible YubiKey attaches easily to your keychain *(and should only be inserted when authenticating)*.

* See "[Let’s get your YubiKey to work](https://yubico.com/start)" (from Yubico) on how to use TFA.

While YubiKey is the easiest to use on a daily basis, if you lose it you could get locked out of all your systems so be sure that you have set up [Two-Factor Redundancy and TFA Backup Codes](#two-factor-redundancy-and-tfa-backup-codes).

### Partial List of TFA-Enabled Services

* LastPass: [Multifactor Authentication Options](https://helpdesk.lastpass.com/multifactor-authentication-options/)
* Google: [2 Step Verification](https://support.google.com/accounts/topic/28786?hl=en&ref_topic=3382253)
* GitHub (especially for your [Bixal Solutions account](https://github.com/Bixal)): [Securing your account with two-factor authentication (2FA)](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/)
* Bitbucket: See [documentation](https://confluence.atlassian.com/bitbucket/two-step-verification-777023203.html)

### Two-Factor Redundancy and TFA Backup Codes

As a final, crucially important step, ***you must have a backup second factor for all your TFA accounts***. Imagine that you use a YubiKey to unlock LastPass and you lose it. Without a backup second factor, you would be effectively locked out of all of your accounts. So you need a backup.

SMS can often be an easy backup, but it is known to be insecure. Most services that provide TFA provide multiple second factor options, and we recommend that you set up at least one of several backup strategies for each TFA-enabled service you use:

* Have a second YubiKey in safe keeping (the author of this article has three).
* [Authy](#authy] and [LastPass Authenticator](#lastpass-authenticator) provide ever-changing 6-digit codes and can securely backup to the cloud, so if you lose your phone you can pull your information back out of the cloud when setting up your new phone. *Hint: store your cloud backup password in LastPass (but make sure you have another mechanism to unlock LastPass!)*
* Many services offer a downloadable set of single use "backup codes" that can be printed and kept in a safe place. *Hint: you can store backup codes from other services in LastPass in the Notes section.*

## Phishing and Social Engineering

Social engineering is the most common attack vector used to compromise computer systems. Social engineering relies heavily on human interaction and often involves tricking people into breaking normal security procedures. The following is a brief reminder of some of the methods used, but is in no way complete.

* Phishing
  * Please forward phishing emails or suspicious emails to security@bixal.com so that the IT department can quarantine the message and block the email address moving forward
  * Is the email from someone you know and contains expected information?
    * Emails from unknown people asking for some action on your part is the most common form of phishing.
  * Don't click on links or open attachments:
    * Unless you trust the sender and expect the link or attachment,
      * Even if you trust the source (a From: address can be spoofed) hover first and check the URL
    * If in doubt, ask an IT member (e.g. via Slack) or forward the email to an IT member
    * [More on Phishing avoidance (from EFF)](https://ssd.eff.org/en/module/how-avoid-phishing-attacks)
* Windows Technical Support
  * "Windows Technical Support has noticed that you have viruses or other malware on your computer..."
* Baiting
* Seemingly innocent (or interesting) abandoned USB, CD, DVD media with autorun
* Public WiFi (e.g., coffee shop, airport, library, ...)
  * Turn off sharing
  * Don't automatically connect to unknown WiFi hotspots
  * Confirm the network name - know the name of your hotspot!
    * Watch out for an "Evil Twin" - a hotspot that looks good but could be an access point set up by an attacker (e.g., "StarbucksGuest" or "DeltaFreeWifi")
  * Turn on your local firewall
    * Use a VPN if possible
    * As usual, never enter your name or password information:
      * when on an insecure (non-HTTPS or SSL encrypted) connection, or
      * to a site that you have not verified is correct (by examining at the URL)
  * [More on public WiFi network safety (from LifeHacker)](http://lifehacker.com/5576927/how-to-stay-safe-on-public-wi-fi-networks)

## Keep Your Systems Up-to-date

One of the best ways to protect yourself from being hacked (other than via a social engineering pathway) is to keep your software on your computers and phones up-to-date. Sometimes you may reasonably want to wait for a .1 or .2 release before updating after a new major release, but don't get far behind. Also, if you have a Windows machine, you *must* maintain an up-to-date anti-virus package on it.

#### macOS: FileVault

Bixal Solutions utlizes full disk encryption (FDE) with FileVault, and requires the use of it. Bixal retains a copy of your key for recovery purposes.

Much more technical detail on securing your Mac: [macOS-Security-and-Privacy-Guide](https://github.com/drduh/macOS-Security-and-Privacy-Guide/blob/master/README.md). While Bixal does not require use of all these techniques learning them will help protect both personal, Bixal, and Federal information.

#### GNU/Linux: use the hardware

Unlike Mac and Windows, you can only encrypt your drive during system installation. Might as well buy a new SSD with hardware encryption or - during install - enable [Linux Unified Key Setup (LUKS)](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup) which comes standard with most distributions.

### Backups

With more work captured in the cloud by OneDrive, GitHub, Adobe Cloud, etc. there is less that needs to be backed up. But you won't know what you'll miss until your system doesn't boot up because of an unrecoverable hard drive (or SSD) error. Bixal does configure macBooks to back up to a time machine in the office. If you loose information, file a [help desk ticket](https://help.bixal.com).

## Protecting Your Privacy

Bixal Solutions believes that your privacy is a right, and that private communications can be beneficial to business. Here's some tips on how FOSS can help:

*   [Protecting Your Privacy with Encryption](./encryption.md)

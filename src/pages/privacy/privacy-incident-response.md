# Bixal Solutions Privacy Incident Response Plan (IRP)

## Applicability

**Note:**  This Incident Response Plan applies to systems for which Bixal Solutions and third party
contractors. Individual components may have a tailored version of this Privacy Incident Response
Plan or in some cases a completely unique Privacy Incident Response Plan will be developed.
All Bixal Solutions employees are aware of the procedures outlined herein.

## Overview

This Privacy Incident Response Plan provides baseline guidance for the Bixal Solutions Team's
process for responding to privacy incidents of a Bixal Solutions IRCP
managed system, product or service ("component"). It outlines roles and
responsibilities during and after incidents, and it lays out the steps Bixal
take to resolve them.

## Definitions

**PII** as “any information that permits the identity of an individual to be directly or indirectly
inferred, including any other information which is linked or linkable to that individual,
regardless of whether the individual is a United States citizen, lawful permanent resident,
visitor to the U.S., or employee or contractor to the Department”.

**Sensitive PII** as “personally identifiable information, which if lost, compromised, or disclosed
without authorization, could result in substantial harm, embarrassment, inconvenience, or
unfairness to an individual.” Examples of Sensitive PII include, but are not limited to:

1. Social Security numbers (SSN)
1. drivers license or state identification numbers
1. passport numbers
1. Alien Registration numbers
1. financial account numbers
1. biometric identifiers
1. Other data, when combined, may also constitute Sensitive PII, such as:
   1. citizenship or immigration status
   1. medical information
   1. salary
   1. ethnic or religious affiliation
   1. personal email address, address, and phone
   1. account passwords
   1. date of birth
   1. criminal history
   1. mother’s maiden name

## Obligations

As an employee, appointee, detailee, intern, contractor, grantee,
or consultant (hereafter, Bixal personnel), you have an obligation to report suspected or confirmed
privacy incidents in a timely manner. By reporting a privacy incident in
a timely manner, Bixal personnel can initiate the privacy incident response process, which is
required by federal law and policy.

The PICR is an instructional “roadmap” for responding to privacy incidents,
addressing reporting to resolution of an incident, as well as developing lessons learned. This
guidance describes the roles and responsibilities of Bixal personnel,
including employees, supervisors, Component Privacy Officers/Privacy Points of Contact (PPOCs) as
well as the responsible Security Operations Center (Information Security Office).

All have a critical role at the outset in establishing facts that will be needed,
not only to contain the privacy incident, but also to identify appropriate mitigations and
lessons learned.

Privacy incidents, whether accidental or malicious, can pose specific risks to individuals, because
there is an increasing recognition that personal information such as
Social Security numbers, financial account information, health information, and biometric data,
is valuable and can be reverse engineered with a potential for great
public harm. Therefore, it is crucial that Bixal personnel be able to identify and
report a suspected or confirmed privacy incident. Taking immediate action to report a
suspected or confirmed privacy incident is the first step in containing, mitigating, and remediating a privacy
incident.

## Roles and Responsibilities

### Director of Technology

* Serves as the senior employee responsible for oversight of privacy incident
management.
* Responsible for determining whether Bixal's response can be conducted at
the direction of the Information Security Officer assigned to the component, or
if the Office of Information Security will lead the response. The Director may choose
not to convene the BISO if the response can be conducted at the Component level. At a
minimum, the BISO is convened when a privacy incident constitutes a “major incident,” as
defined in OMB M-18-0210 and subsequent OMB Guidance.
* Leads and manages the BISO if convened.
* Evaluates the sensitivity of the PII involved in the privacy incident and assesses the risk of
harm to individuals affected by the privacy incident.
* Directs BISO or Component Information Security Officer to gather, analyze, and preserve any
and all evidence necessary to support an investigation of a privacy incident.
* Consults with the Chief Information Officer (CIO) and Chief Information Security Officer
(CISO) to determine whether a privacy incident constitutes a major incident pursuant to
OMB M-18-02, and subsequent OMB Guidance, which may trigger Congressional
reporting requirements under the FISMA.

### Bixal Information Security Office

* Supports the Director of Technology to identify appropriate course of action with
respect to any major privacy incident investigation, remedy options, resource allocation,
notification to impacted individuals, risk mitigation, interagency engagement, and the
timeliness, content, means, sources, and general appropriateness of other external
notification. After consultation with the BISO, director provides
recommendations to the CISO or representitive member, including timeliness, contents, means, sources,
and general appropriateness of notifications.
* The BISO includes, at a minimum, the following officials or their representatives:
  * Vice President of Agile Delivery
  * Director of Technology
  * Chief Executive Officer
* As necessary, depending on the type of incident, the Director of Technology may
request dditional subject matter experts to join and assist the BISO. For example, if the
privacy incident involves financial information, the Bixal Director of Technology may request
the Chief Financial Officer to join the BISO.

### United States Computer Emergency Readiness Team (US-CERT)

* Serves as the designated central reporting organization and repository within the Federal
Government for federal incident data, communicates and coordinates with the
Information Security Officer to obtain updates regarding the privacy incident, and
is responsible for notifying appropriate authorities of the privacy incident, including the
Office of Management and Budget (OMB) within one hour of the privacy incident, all in
accordance with FISMA.

## Identifying and Processing a Privacy Incident

### Privacy Incident Identification

As soon as a privacy incident is discovered, Bixal personnel have an obligation to immediately report
the privacy incident to their supervisor, program manager, Information Security Officer,
or responsible IT Help Desk. If the privacy incident is reported to the program
manager, supervisor, or IT Help Desk, the privacy incident must be referred or reported to the
Information Security Officer or Director of Technology.

Once discovered, Bixal personnel should report privacy incidents that are either suspected and/or
confirmed. A privacy incident involving PII should be viewed as the loss of control, compromise,
unauthorized disclosure, unauthorized acquisition, or any similar occurrence when

1. An unauthorized user accesses PII
1. An authorized user accesses PII for an other than authorized purpose.13

In order to encourage effective and efficient responses to privacy incidents, it is imperative not only
that the Department train personnel on privacy reporting procedures, but also that it fosters an
environment in which individuals feel comfortable reporting a privacy incident. A quick response to
a newly discovered privacy incident can spare affected individuals adverse consequences as well
as save significant time and resources for Bixal and the Federal Government.
Applicable consequences for failing to comply with safeguarding and reporting requirements can
be serious, and may include reprimand, suspension, removal, or other actions in accordance with
applicable law and Bixal policy. At a minimum, Bixal will remove the authority to access information
or systems from any individual who demonstrates a disregard or a pattern of not safeguarding PII.
Finally, the BISO or Director of technology, will determine
specific details pertaining to an open or closed privacy incident as whether to disclose to any
person without an authorized need to know.

### Privacy Incident Reporting: Initial Intake and Starting a Security Event Investigation and Notification (SEIN)

When the privacy incident is identified, the component manager and information
security officer will need to collect specific information about the
nature of the privacy incident to create a suspected or confirmed security event
notification (SEN). The SEN, may potentially be distributed to:

* Bixal Personnel
* Bixal Information Security Office
* US-CERT
* Individuals affected in the privacy incident

While not all of the information may be available at the outset,
the Information Security Officer should gather as much information as possible for
population of the SEN. In major breaches updates should be communicated daily.
This information should include basic facts regarding when the incident occurred
and when the incident was discovered, as well as information about the nature of the incident
and whether the suspected incident involves PII, including Sensitive PII.
In addition, the Component should also record, in the SEN, any further factual
information that will facilitate the handling of the incident as well as actions taken to contain
the incident.

Once the SEN has been established, the responsible Information Security Officer, program manager,
and Director of Technology will continue to coordinate to gather information about the privacy incident.
The Information Security Officer evaluates this information in
context and determines whether or not the facts support the conclusion that a privacy incident may
have occurred. As part of the initial assessment, the Information Security Officer will
determine whether the incident involves PII, as well as whether the incident involves information from
other Components or organizations.

The Information Security Officer will contact law enforcement authorites with the BISO
when (a) criminal activity is suspected, and (b) the Sensitive PII privacy incident originated or
occurred within a classified secured environment (i.e., Closed Storage Processing Area; Open
Storage Area; or Sensitive Compartment Information Facility).

### Privacy Incident Assessment: PII Determination

The Information Security Officer will need to assess the privacy incident to determine
whether there are other considerations that require consultation and notice.
To facilitate this assessment, the Information Security Officer should
also consult with the BISO. The Information Security Officer will need to determine
whether Sensitive PII was involved. In addition to Sensitive PII, the information
security officer should consult the program manager to determine if certain financial
and/or certain health information was involved, if the incident was caused by a contractor,
if the incident involved information from multiple components, or if criminal activity is suspected.
Incident assessment factors include:

1. **Sensitive PII**:

    The Information Security Officer should determine whether the incident involves
    Sensitive PII. Sensitive PII is personally identifiable information, which if lost, compromised, or
    disclosed without authorization, could result in substantial harm, embarrassment,
    inconvenience, or unfairness to an individual.
    Sensitive PII requires stricter handling guidelines because of the increased risk to an individual
    if the data is compromised. Some categories of PII are sensitive as stand-alone data
    elements, including a Social Security number (SSN) or driver’s license or state identification
    number. Other data elements such as citizenship or immigration status, medical information,
    ethnic, religious, sexual orientation, or lifestyle information, in conjunction with the identity of
    an individual (directly or indirectly inferred), are also Sensitive PII.

    In many instances, the Information Security Officer must use a best judgment standard
    in assessing the sensitivity of PII in its context. For example, an office contact list contains PII (e.g., name, phone number). In this context, the information probably would not be
    considered sensitive. However, the same information in a roster of law enforcement
    personnel probably would be considered sensitive information. In assessing the levels of risk
    and harm, consider the data element(s) in light of their context and the broad range of
    potential harms flowing from their disclosure to unauthorized individuals.

1. **Contractor Obligations**:

    The PICR applies to all Bixal personnel, including contractors. Contractors are obligated to
    comply with all Bixal privacy policies and procedures. For the purposes of privacy incident
    handling, contractor responsibilities are nearly identical to those of a Bixal employee.
    Contractors should report incidents to an Information Security Officer or BISO.
    However, contractors must also report any privacy incident to their official Contracting
    Officer’s Representative (COR). Moreover, the Information Security Officer must
    continue to consult and work through the COR regarding any matters regarding the contractor.
    At this stage, the COR and the Information Security Officer should review the contract
    for inclusion of the contractor’s breach notification or incident response responsibilities.

1. **Financial Information:**

    The Information Security Officer should also determine, to the extent possible and at
    the earliest stage of the privacy incident, whether the privacy incident involves
    governmentissued credit cards or individuals’ financial information, such as bank
    account numbers used for direct deposit of credit card reimbursements, or any benefit
    information. If so, the Information Security Officer should immediately notify the the Bixal
    chief financial officer or federal COR representitive. The BISO will notify the affected bank(s)
    or Bixal human resources team. The Information Security Officer will update the Privacy Incident
    Report to reflect the CFO’s notification of the affected bank(s). Escalation to the
    CFO is warranted when the privacy incident involves CFO Designated Financial Systems.

1. **Health Information:**

    The Information Security Officer should also determine, to the extent possible and at
    the earliest stage of the privacy incident, whether the privacy incident involves individually
    identifiable health information, such as demographic data, that relates to:

    * the individual’s past, present, or future physical or mental health or condition,
    * the provision of health care to the individual,
    * the past, present, or future payment for the provision of health care to the individual, and
    that identifies the individual or for which there is a reasonable basis to believe can be
    used to identify the individual.
    * individually identifiable health information includes many common identifiers (e.g., name,
    address, birth date, Social Security number).

    Incidents involving HIPAA are to be reported to the U.S. Department of Health and Human
    Services Office for Civil Rights as necessary.

1. **Multiple Components:**

    The Information Security Officer should also determine whether the privacy incident
    involves PII from multiple Components. The Privacy Incident Report should accurately reflect
    the information and Components affected. The Information Security Officer may also work
    through the BISO to facilitate communication with the other
    Component Information Security Officers about the privacy incident to ensure they are aware of
    the incident and the mitigation and remediation in the Components is consistent.

### Privacy Incident Reporting: Distinguishing between Minor and Major Incidents

Once the assessment is complete, the Information Security Officer determines
whether the privacy incident is a major incident, which requires congressional
notifcation, or a minor incident.
A minor incident is defined as “an incident that due to proper functioning of a security control
is not likely to impact the Bixal mission or a critical Federal assets. Minor incidents do not
require immediate leadership notification. Further, a minor incident meets one or more of the
following criteria:

* The incident impacts the confidentiality, integrity, or availability of a non-critical system or
non-sensitive data.
* The incident relates to a minor policy violation.

A privacy incident constitutes a major privacy incident when it involves PII that, if exfiltrated,
modified, deleted, or otherwise compromised, is likely to result in demonstrable harm to the national
security interests, foreign relations, or economy of the United States, or to the public confidence,
civil liberties, or public health and safety of the American people. An unauthorized modification of,
unauthorized deletion of, unauthorized exfiltration of, or unauthorized access to 100,000 or more
individuals’ PII constitutes a major privacy incident.

The Director of Technology, in coordination with the BISO, will first determine whether the
privacy incident is considered a “major incident” that involves PII. There are several criteria to
evaluate in this definition and there may be instances in which a privacy
incident may meet the criteria above but not affect 100,000 or more individuals’ PII. Those instances
are no less significant any may indeed warrant the convening of the BISO.

It is for this reason that during the incident assessment phase, the Component information security
officer be cognizant of whether the incident meets the definition of a major privacy incident and not
look at applying the classification of the privacy incident only because the 100,000 affected individuals’ PII threshold is met.
To facilitate this determination, the Information Security Officer will identify the system of
records notice (SORN), privacy impact assessment (PIA), and/or other existing compliance
documents that may apply to the compromised PII or SPII. The Information Security Officer will
provide this information to the Director of Technology at the
Bixal Information Security Office.
Once the determination has been received, the Director of Technology, in coordination with the
CISO and COR, will validate whether the privacy incident is a major incident that involves PII.

## Congressional Notification

If the privacy incident is validated as a major incident that involves PII, the Bixal Director of
Technology or BISO must notify appropriate congressional committees no later than seven days after
the date on which Bixal has reasonably concluded that a major privacy incident occurred.
The Bixal Director of Technology must supplement that seven day notification to Congress
with updates withina reasonable period of time. In addition, Bixal Director of Technology
must also supplement the seven day notification with a report no later than 30 days
after a major privacy incident is discovered. The Bixal Director of Technology will coordinate
with OLA, as a member of the Breach Response Team, as described below, for such notification
to these committees.

## Assessing the Risk of Harm to Individuals Impacted by a Privacy Incident (Risk Assement)

All privacy incidents require a technical investigation, in addition to the facts gathered
at the initial incident intake, in order to collect the information required to conduct a
risk assessment and propose appropriate mitigations.
In any privacy incident involving PII, Bixal must assess the risk of harm to individuals
impacted by a privacy incident. This assessment is based on three factors:

* Nature and sensitivity of the PII
* Likelihood of access and use of PII
* Type of Privacy Incident

While the Director of Technology is ultimately accountable for ensuring the assessment of the risk
of harm to individuals, the following considerations and evaluations will be carried out for major or
minor privacy incidents either by the BISO or the Information Security Officer.
A thorough risk assessment will help identify appropriate mitigation measures.
The assessment also helps support the production of materials that may be needed to
facilitate notification. It is important to remember, however, that the results of
the assessment and any recommendations must be provided to the Director of Technology, who
provides recommendations regarding the issuance of notification to affected
individuals, including the timeliness, contents, means, sources, and general appropriateness of the
notification.
The range of potential harms associated with the loss or compromise of PII is broad. A number of
possible harms associated with the loss or compromise of PII must be considered. Such harms may
include:

* The effect of a breach of confidentiality or fiduciary responsibility
* The potential for blackmail
* The disclosure of private facts, mental anguish, and emotional distress
* The disclosure of address information for victims of abuse
* The potential for secondary uses of the information that could result in fear or uncertainty
* The unwarranted exposure leading to humiliation or loss of self-esteem

Finally, as with other tasks, it is also important for the Component Information Security Officer to update
the enterprise incident database as to the risk assessment findings.

### Assessing the Risk of Harm

1. **Nature and Sensitivity of PII:**
When assessing the nature and sensitivity of compromised PII with a privacy incident, Component Information Security Officer should consult the relevant BISO and Component
stakeholders to consider the following:

   * Data Elements:

        Certain data elements are particularly sensitive and may alone present an increased
        risk of harm to the individual (e.g., SSN, passport number, driver’s license number,
        bank account numbers, biometric identifiers). The Component Information
        Security Officer should consider the sensitivity of all of the data elements, taken
        together. While none of the information may be sensitive in isolation, it can pose a
        great risk of harm to individuals after being combined together. For example, date of
        birth, place of birth, address, and gender may not be particularly sensitive alone, but
        when combined would pose a greater risk of harm to the individual.
        Finally, the Component Information Security Officer should consider how many
        records are involved and whether individuals could be identified by the information
        involved. Privacy incidents of 25 records and 25 million records may have different
        impacts, not only in terms of the collective harm to individuals, but also in terms of
        harm to the Component’s reputation.

   * Context

        The Component Information Security Officer must also consider the purpose for
        which the PII was collected, maintained, and used. The same information in different
        contexts can reveal additional compromising information about impacted
        individuals. For instance, a list of personnel and their associated office phone numbers
        may not be particularly sensitive. However, the same list of personnel and their
        associated office phone numbers on a list of personnel who hold sensitive positions
        within a law enforcement agency is sensitive information. A similar list of names and
        phone numbers along with information about a medical condition is also sensitive.

   * Private Information

        The Component Information Security Officer must evaluate the extent to which the
        PII constitutes information that an individual would generally keep private or chooses
        to keep private. Such “private information” may not present a risk of identity theft or
        other criminal conduct, but may pose a risk of harm such as embarrassment,
        blackmail, or emotional distress. Examples include information that a person may
        choose not to share with others, yet the Department has collected such as:
        derogatory personal or criminal information, personal debt, medical conditions,
        treatment for mental health, pregnancy-related information, sexual history or sexual
        orientation, adoption or surrogacy information, and immigration status. Passwords are
        another example of private information that if involved in a privacy incident may
        present a risk of harm.

   * Vulnerable Populations

        The Component Information Security Officer must consider whether the affected
        individuals are from a particularly vulnerable population that may be at greater risk of
        harm than the general population and if the information involved somehow increases
        the risk of harm to that population. In fact, part of the vulnerability may simply be
        having any information about the persona known. Vulnerable populations include:
        children; active duty military; government officials in sensitive positions; senior citizens;
        individuals with disabilities; confidential informants; witnesses; certain populations of
        immigrants; non-English speakers; and victims of certain crimes such as identity theft,
        child abuse, trafficking, domestic violence, or stalking. This is not a comprehensive list
        and other populations may also be considered vulnerable.

   * Permanence

        Finally, Component Information Security Officer shall consider the permanence
        of the PII. This includes an assessment of the relevancy and utility of the information
        over time and whether the information will permanently identify an individual. Some
        information loses its relevancy or utility as it ages, while other information is likely to
        apply to an individual throughout his or her life. For example, an individual’s health
        insurance ID number can be replaced. However, information about an individual’s
        health, such as family health history or chronic illness, remains relevant for an
        individual’s entire life, as well as the lives of his or her family members.
        Special consideration is warranted when a privacy incident involves biometric
        information including fingerprints, facial images, hand geometry, retina or iris scans,
        and DNA or other genetic information. When considering the nature and sensitivity of
        biometric information, a Component should factor in the known current uses of the
        information and consider that, with future advancements in science and technology,
        biometric information could have many additional and sensitive uses not yet
        contemplated.

1. **Likelihood that PII is Accessible and Usable**:
When assessing the likelihood of access and use of PII compromised by a privacy incident,
the Component Information Security Officer should consider the following:

   * Security Safeguards

        The fact that the information has been lost or stolen does not necessarily mean it has
        been or can be accessed depending the physical, technological, and procedural
        safeguards employed by the Component. If the information is properly protected by
        a NIST-compliant encryption method, the actual risk of compromise is low to nonexistent.
        The Component Information Security Officer should consult Director of Technology to
        evaluate the implementation and effectiveness of implemented security safeguards, such as
        password protection or encryption, protecting the information.
        Security safeguards may significantly reduce the risk of harm to affected individuals,
        even when the PII is particularly sensitive. The Director of Technology shall
        consider each of the employed security safeguards on a case-by-case basis and
        takes into account whether the type, value, or sensitivity of the information might
        motivate a malicious actor to put time and resources towards overcoming those safeguards.
        Encryption can be an effective safeguard, and can be applied at the device-level,
        file-level, or to information that is at rest or in transmission. Encryption protections may
        be undermined if keys, credentials, or authenticators used to access encrypted
        information are compromised. When evaluating the likelihood of access and use of
        encrypted PII, the Component Information Security Officer should consult with the
        Director of Technology and other technical experts to ascertain whether information was properly encrypted, including:

        * Whether encryption was in effect
        * The degree of encryption
        * At which level the encryption was applied
        * Whether decryption keys were controlled, managed, and used.25

        There are other effective security safeguards, apart from encryption. Redaction, data
        -masking, and remote wiping of a connected device can partially or completely
        block access to PII. A review of security logs can help to confirm whether there was
        access to data, and in some cases, which Internet Protocol (IP) addresses were
        associated with that access. Physical security safeguards such as a locked case may
        also reduce the likelihood of access and use of PII.

   * Format and Media

        The Component Information Security Officer, in coordination with the BISO and
        technology subject matter experts, shall evaluate whether the
        format or media of the PII may make its use difficult and resource-intensive. The
        format of the PII or the media on which it is maintained may make the PII more
        susceptible to a crime of opportunity. For example, a spreadsheet on a portable USB
        flash drive does not require any special skill or knowledge to access and an
        unauthorized user could quickly search for specific data fields such as a nine-digit
        SSN. Conversely, a magnetic tape cartridge used for backing up servers that is one of
        a set of 30 and contains a large volume of unstructured PII would require special
        expertise or equipment to access and use the information.
        As part of this assessment, Component Information Security Officer will also need
        to consider the type, value, and sensitivity of the PII. If the PII is particularly
        valuable, it may increase the likelihood of access and use regardless of its
        format or media. This is because the value of the information may outweigh the
        difficulty and resources needed to access the information.

   * Duration of Exposure

        The Component Information Security Officer must determine the amount of time that
        the PII was exposed or make a reasonable estimate of this time. PII that was exposed
        for an extended period of time is more likely to have been accessed or used by
        unauthorized users. For example, a briefcase containing PII left in a hotel lobby or a
        car for an hour before being recovered is less likely to have been accessed by an
        unauthorized user than if it had been left for three days prior to being recovered.
        Similarly, PII inadvertently published to a public Internet page for an hour before
        being removed is less likely to have been accessed by an unauthorized user than
        if it had been available on the public Internet page for a week.

   * Evidence of Misuse

        The Component Information Security Officer must determine whether there is
        evidence of misuse. In some situations, the Component may be able to determine
        with a high degree of certainty that PII has been or is being misused. Evidence may
        indicate that identity theft has already occurred as a result of a specific or that the PII
        is appearing in unauthorized external contexts. For example, law enforcement may
        confirm that PII is appearing on a website dedicated to the sale of stolen PII and may
        determine that there is strong evidence of misuse. Conversely, agencies may
        determine with reasonable certainty that the PII will not be misused. For example, a
        forensic analysis of a recovered device may reveal that the PII was not accessed. Or,
        PII compromised by a privacy incident may also be rendered partially or completely
        inaccessible by security safeguards other than encryption through redaction or
        remote wiping of a connected device. Physical security safeguards, such as a
        locked cabinet or locked briefcase, will also be considered.

1. Type of Privacy Incident
The Component Information Security Officer will consider the whether the major or minor
privacy incident was intentional, who received the information, and whether the intent is
unknown.
   * Intent

        If a privacy incident was intentional, it is important to determine whether the
        information was the target, or whether the target was the device itself, like a mobile
        phone or laptop, and whether the compromise of the information was incidental.
        Examples of an intentional privacy incident include the theft of a device storing PII
        from a car or office, the unauthorized intrusion into a Government network that
        maintains PII, or an employee looking up a celebrity’s file in a Component database
        out of curiosity. While the risk of harm to individuals may often be lower when the
        information was not the target, the potential for a significant risk of harm to individuals
        may still exist.
        The risk of harm to individuals may be lower when a privacy incident is unintentional,
        either by user error or by failure to comply with Bixal policy. However, that is not always
        the case, and privacy incident response officials must conduct a case-by-case
        assessment to determine the risk of harm. Examples of an unintentional privacy
        incident include an employee accidentally emailing another individual’s PII to the
        wrong email address or a contractor storing personnel files in a shared folder that the
        contractor thought was access-controlled but was not.
        It may be impossible or impractical to determine whether a privacy incident was
        intentional or unintentional. In these instances, the Component Information Security
        Officer should operate on the assumption that the privacy incident was intentional. For
        example, if an employee realizes her mobile device is missing, it may be that it was
        stolen intentionally or that she dropped it accidentally. Similarly, a shipment
        containing A-Files that never arrives at its destination may have been unintentionally
        lost or may have been targeted by a malicious actor and intercepted.
   * Criminal Activity
        If the initial fact gathering suggests potential criminal activity, the Component
        Information Security Officer should immediately notify and coordinate with
        the responsible law authorities defined by the BISO. External notification to
        law enforcement when criminal activity is suspected or confirmed should be handled by the
        BISO.
        Notification and involvement of external law enforcement must be documented in
        the Privacy Incident Report.
        Furthermore, in circumstances when law enforcement has been notified of a privacy
        incident, Component Information Security Officer shall consider any relevant
        information provided by law enforcement that may help inform whether the privacy
        incident was intentional or unintentional.
   * Recipient
        In some cases, the Component may know who received the compromised PII. This
        information, when available, may help the Component Information Security Officer
        assess the likely risk of harm to individuals. For example, a privacy incident is often
        reported by a recipient who receives information he or she should not have received.
        This may be an indication of a low risk of harm to individuals, particularly when the
        recipient is another employee within the Component’s IT network. One common type
        of low-risk privacy incident is when an employee sends an individual’s PII via email to
        another employee at the same Component who does not need to know that PII in
        order to perform his or her duties. In many such cases it may be reasonable to
        conclude that there is a negligible risk of harm. Even when PII is inadvertently sent to
        an individual outside Bixal, the risk of harm may be minimal if it is confirmed that, for
        example, the individual is known to the Component, acknowledged receipt of the
        PII, did not forward or otherwise use the PII and the PII was properly, completely, and
        permanently deleted by the recipient. This is a type of privacy incident that must be
        reported by the Component and must appropriately respond, but the risk of harm is
        low enough that the response often may not necessitate that the Component notify
        or provide services to the affected individual whose PII was compromised.
        Conversely, if analysis reveals that the PII is under the control of a group or person
        who is either untrustworthy or known to exploit compromised information, the risk of
        harm to the individual is considerably higher. In many cases the Component will not
        have any information indicating that compromised or lost PII was ever received or
        acquired by anyone. In such circumstances, the Information Security Officer shall
        rely upon the other factors considered.

### Assessing Priority

Once the Component Information Security Officer and/or the responsible SOC opens the SEN, the
responsible SOC will then assign a priority to the incident in accordance with the policies
outlined in this document and the Information Security Officer will consider the
Standards for Categorization of Privacy Incidents detailed below is assigning
a risk of harm to the incident.

The likely risk of harm is LOW if the Privacy Incident:

* Could result in limited or no harm, embarrassment, inconvenience, or unfairness to
any individual on whom information is maintained; or
* Could have a limited or no adverse effect on organizational operations or
organizational assets.

The likely risk of harm is MODERATE if the Privacy Incident:

* Could result in significant harm, embarrassment, inconvenience, or unfairness to
any individual on whom information is maintained; or
* Could have a serious adverse effect on organizational operations or
organizational assets.
* Sensitive PII is always designated as moderate or high impact.

The likely risk of harm is HIGH if the Privacy Incident:

* Could result in severe or catastrophic harm, embarrassment, inconvenience, or
unfairness to any individual on whom information is maintained;
* Could have a severe or catastrophic adverse effect on organizational operations
or organizational assets; or,
* Sensitive PII is always designated as moderate or high impact.

## Mitigation

Mitigation is an essential aspect of Bixals effort to contain the cause of the major or minor privacy
incident, and identify and lessen the potential harm that the loss, compromise, or misuse of the PII
may have on affected individuals.

Once the risk of harm has been thoroughly assessed, the Information Security Officer
should identify and recommend appropriate mitigations to the Bixal Director of Technology, in the case
of a major privacy incident, or to his/her Component in the case of a minor privacy incident.
Mitigations may range from technical countermeasures, which must be coordinated through the
Bixal SOC or responsible SOC, to non-technical activities, such as notification and/or credit
monitoring to the affected individuals and employee counseling, as well as to engagement with
law enforcement entities. The Bixal SOC or responsible SOC will conduct technical countermeasures
to address IT security issues relevant to the privacy incident, if appropriate.
The Information Security Officer should also address the privacy ramifications of a
privacy incident, focusing on preventing or minimizing any subsequent harm to affected individuals.
As such, non-technical privacy mitigations will involve activity beyond the securing of the system
(electronic or paper) and isolating the vulnerability.

The Information Security Officer and BISO should include a broad range of mitigation strategies
based on the nature and sensitivity of the PII involved. An effective response may call for
disclosure of information regarding a privacy incident to those individuals affected by it,
as well as to persons and entities in a position to cooperate, either by assisting in
notification to affected individuals or playing a role in preventing or minimizing harms from the privacy incident. Mitigations may include:

* Notification to affected individuals, the public, media, and other Government entities
(e.g., Congress).
* Removing information from an Internet or Intranet page.
* Offering credit or identity monitoring services or providing information on such services to
mitigate the misuse of the PII and identify patterns of suspicious behavior.
* Training and awareness for staff on best practices to safeguard Sensitive PII.
* Disciplinary or corrective action, including counseling for Bixal employees. NOTE: any Bixal
personnel subject to corrective or disciplinary action arising out of a privacy incident must
not be identified or identifiable in the Privacy Incident Report. The privacy incident report
should simply contain a statement that corrective or disciplinary action was taken without
providing identifiable information about the employee(s) involved and without providing
any specifics. The respective Component People and Culture Office must maintain a record of
all disciplinary or corrective actions taken against Bixal personnel that arise out of a privacy
incident.
* Revisions to policies and procedures to minimize or eliminate the use of PII when possible.
* Contractors must comply with Department policies and follow all aspects of the FAR clauses
and/or privacy provisions that are included in the contract, such as allowing Department
inspection provisions and post-incident activities.

## Notification for a Privacy Incident

In the case of a major privacy incident, once the Component Information Security Officer has
conducted the risk assessment and has identified potential mitigations, recommendations should be
provided to the Bixal Director of Technology in the case of a major privacy incident and the privacy
incident report should be updated.
In the context of a major privacy incident, and as part of the effort to ensure substantive and
effective notification, the Director of Technology will solicit input from the BISO, and the Component Information Security Officer in assessing the following issues:

* Timeliness of the Notification
* Source of the Notification
* Contents of the Notification
* Means of Providing the Notification
* Who Receives Notification: Public Outreach in Response to a Privacy Incident

After receiving input from the Component Information Security Officer, the Bixal Director of
Technology provides recommendations to the BISO and Component Information Security Officer regarding
issuance of notification to affected individuals, including timeliness, contents, means, sources,
and general appropriateness of notification; and elevates matters to the BISO
if the component Information Security Officer, component stakeholders, or Federal Government requires
additional guidance or to resolve conflicts.
In the case of a minor privacy incident, once the Component Information Security Officer has conducted
the risk assessment and identified potential mitigations, the Privacy Incident Report should be
updated. The assessment regarding notification to the affected individual(s) will take into account
many, if not all, of the same issues considered in notification for major privacy incidents.

The Privacy Incident Report should also detail a recommendation regarding notification to
affected individuals.

1. Timeliness of Notification for a Privacy Incident

   Before notification may be issued, Bixal must first determine the scope of the privacy incident,
   and if applicable, restore the reasonable integrity of the system or information compromised.
   Affected individuals shall be notified without unreasonable delay following the discovery of a
   major privacy incident, consistent with the needs of law enforcement and national security,
   and any measures necessary for Bixal to assess the scope of the privacy incident and
   implement containment measures.

   In some circumstances, law enforcement or national security considerations may require a
   delay in notification if it impedes the investigation of the privacy incident, as permitted by
   OMB Memorandum M-17-12.28 Decisions to delay notification should be made by the Bixal
   BISO in **writing** (emphasis added).

1. Source of Notification for a Major Privacy Incident

   As a general rule, notification to affected individuals for all minor privacy incidents will be
   issued by the Component Head or the Component Information Security Officer, if appropriate; or if
   warranted by the circumstances, the Director of Technology or BISO may
   issue the notice to individuals affected by the privacy incident.

   In the case of a major privacy incident, the Bixal Director of Technology provides
   recommendations to the BISO issuance of notice, including timeliness,
   content, means, sources and general appropriateness, as described above.
   When the privacy incident involves a federal contractor or a public-private partnership
   maintaining PII on behalf of the Component, Bixal is ultimately responsible for ensuring that
   any notification and corrective action is taken by the contractor. The Bixal Director
   of Technology and BISO should be engaged in all contractor-related notification
   and corrective action.

1. Contents of the Notification for a Privacy Incident

   With a minor privacy incident, the Component Information Security Officer will leverage existing
   notification templates and address the following factors, if appropriate. In the case of a
   major privacy incident, the following elements, amended for the circumstances, should be
   included:

   * Brief description of what happened, including the date(s) of the privacy incident
   and of discovery.
   * To the extent possible, a description of the types of personal information involved
   in the privacy incident (e.g., full name, SSN, date of birth, home address, account
   number, Alien Registration Number/file).
   * Statement whether the information was encrypted or protected by other means,
   when determined that such information would be beneficial, and would not
   compromise the security of the system.
   * Steps/Guidance individuals can take to protect themselves from potential harm.
   * What the Component or BISO is doing to investigate the privacy incident, mitigate
   losses, and protect against a likely recurrence.
   * Who affected individuals should contact at the Component or Bixal for more
   information, including a telephone number, email address, or postal address.

   In addition to the specifics of the notification, it is also important to consider supplemental
   materials that may facilitate substantive and effective notice. In the event of a major
   privacy incident, the following factors may also need to be considered:

   * **Translation of Notice into Other Languages or Formats:**

     Effective privacy incident handling necessitates that individuals affected by the
     privacy incident understand the importance of the notification. Therefore, if the
     Component’s records show that the affected individuals are not English speaking,
     notice should also be provided in the appropriate language(s). If agencies have
     knowledge that the affected individuals are not English speaking, or require
     translation services, the Component should also provide notification in the
     appropriate languages to the extent feasible.
     Special consideration should be given to provide notification to individuals who are
     visually or hearing impaired consistent with Section 508 of the Rehabilitation Act of
     1973. Accommodations may include establishing a telecommunications device for
     the deaf (TDD) or posting a large type notice on the Bixal or affected Component’s
     Internet or Intranet website.

   * **Frequently Asked Questions**

     A Frequently Asked Questions (FAQ) format on the component intranet or
     public webpage may be beneficial because this information can be easily
     updated, contain links to more information, provide more tailored information than
     the formal notification, and can be easily translated into multiple languages. The
     Internet webpage also helps support requirements to provide information to visually
     impaired individuals as required by Section 508 of the Rehabilitation Act.

   * **Call Center**

     For a privacy incident that affects a large number of individuals, or as otherwise
     appropriate, agencies should establish toll-free call centers staffed by trained
     personnel to handle inquiries from the affected individuals.

1. Methods/Means of Providing the Notification

      An important aspect of substantive and effective notification for a privacy incident is the
      selection of the method for providing notification. The best method for providing notification
      will depend on the number of individuals affected, the available contact information for the
      affected individuals, and the urgency with which the individuals need to receive the
      notification. The following examples are types of notices that may be considered:

   * **First-Class Mail**

     First-class mail notification to the last known mailing address of the individual in Bixal
     records should be the primary means to provide notice. When the Component has
     reason to believe the address is no longer current, it should take reasonable steps to
     update the address by consulting with agencies such as the U.S. Postal Service.
     The notification should be sent separately from any other mailing so that it is
     conspicuous to the recipient. If the Component that experienced the privacy
     incident uses another Component to facilitate mailing, it should take care to ensure
     that the Component that suffered the loss is identified as the sender. The front of the
     envelope should be labeled to alert the recipient to the importance of its contents
     and should be marked with the name of either Bixal or with the Federal Components assistance,
     the federal agency itself to reduce the likelihood the recipient thinks
     it is advertising mail. Components should anticipate that some mail will be
     returned as undeliverable and should have procedures in place for how to provide
     a secondary notification.

   * **Telephone**

     Telephone notification may be appropriate in those cases when urgency may
     dictate immediate and personal notification, and/or when a limited number of
     individuals are affected. Telephone notification, however, should be followed by
     written notification by first-class mail.

   * **Email**

     While the Bixal Director of Technology does not recommend email as the primary form
     of notification, in limited circumstances it may appropriate. Email notification,
     especially to or from a non-Government email address, is not recommended due to
     the high risk of malicious email attacks that are often launched when attackers hear
     about a privacy incident (e.g., phishing). Emails often do not reach individuals
     because they are automatically routed to spam or junk mail folders. Individuals who
     receive notifications via email are often uncertain of the legitimacy of the email and
     will not open the notification.
     If the individuals affected by a privacy incident are internal to the Department, it may
     be appropriate for Bixal to use an official email address to notify a small number of
     employees, contractors, detailees, or interns via their official email addresses.

   * **Substitute Notice**

     In the event there is not sufficient contact information to provide notification, or in the
     case of supplemental notification for a privacy incident to keep affected individuals
     informed as to new facts, the Bixal Director of Technology may choose substitute notice.
     This type of notice may also be beneficial when Bixal or the Component needs to
     provide an immediate or preliminary notification in the wake of a high-profile privacy
     incident when notification is particularly time-sensitive. A substitute notification should
     consist of a conspicuous posting of the notification on the home page of Bixal’s or the
     Component’s Internet or Intranet website and/or notification to major print and
     broadcast media, including major media in areas where the affected individuals
     reside. Notification to media should include a toll-free phone number and/or an
     email address that an individual can use to learn whether or not his or her personal
     information is affected by the privacy incident.
     In instances when there is an ongoing investigation and the facts and circumstances
     of a privacy incident are evolving, Components should consider whether it is
     appropriate to establish an ongoing communication method for interested individuals to automatically receive updates. Depending on the individuals affected
     and the specific circumstances of a privacy incident, it may be necessary for
     Components to provide notifications in more than one language.

   * **Accommodations/Special Considerations**

     When a privacy incident affects a vulnerable population, Bixal or the Component
     may need to provide a different type of notification to that population, or provide a
     notification when it would not otherwise be necessary.
     There may be instances when a Component provides notification to individuals other
     than those whose PII was compromised. For example, when the individual whose
     information was compromised is a child, the Component may provide notification to
     the child’s legal guardian(s). Special care may be required to determine the
     appropriate recipient in these cases.

   * **Webpage**

     The webpage posting should provide:

     * Summary of incident with a clear introduction (who, what, when, why,
     where, how) that articulates what has happened and what Bixal is asking
     of the public (or Bixal employees);
     * A background section with more detailed info;
     * A resources section with tools and helpful information resources for people
     to reference;
     * FAQs; and
     * Call center number, if applicable

     Component Information Security Officers may want to also consider developing and
     publishing a page on their Component’s Intranet page with the
     same information.

1. Who Receives Notification

   The final consideration in the notification process for a major or minor privacy incident is to
   whom Bixal and its Components should provide notification beyond the affected individuals,
   such as the media, and/or other third parties affected by the privacy incident or the
   notification. Unless notification to individuals is delayed or barred due to law enforcement or
   national security reasons, all affected individuals should receive prompt notification.
   Bixal and its Components should consider the following guidelines when communicating with
   third parties regarding a privacy incident:

   * Media

     The decision to notify the media regarding a privacy incident requires careful
     planning and execution so as not to unnecessarily alarm the public. When
     appropriate, the media should be notified as soon as practicable after the discovery
     of an incident and informed that a handling plan, including the notification, has been
     developed. Notification should focus on providing information, including links to
     resources, to aid the public in its response to the privacy incident. In addition, the FTC
     should be offered as a resource for affected individuals to confirm the legitimacy of
     the notification. Law enforcement or national security agencies may request that Bixal
     or its Component(s) delay notification as described above. To the extent possible,
     prompt public media disclosure is generally preferable because delayed notification
     may erode public trust. Contact with the media should be coordinated through Bixal
     Office of Public Affairs or the Component’s Office of Public Affairs.
     Bixal can post information about the privacy incident and notification in a prominent
     location on the Bixal homepage or the Component’s Internet or Intranet website as
     soon as possible after the discovery of a privacy incident, and the decision to provide
     notification to the affected individuals. The posting should include a link to FAQs and
     other relevant materials regarding the incident.

   * **Third Parties Affected by the Privacy Incident**

     The Component Head and Component Information Security Officer for the affected
     Component must work in consultation with the Bixal Director of Technology to determine
     whether other public and private sector agencies should be notified on a need to
     know basis, particularly those who may be affected by the privacy incident, or may
     play a role in mitigating the potential harms. For example, a privacy incident involving
     financial information may warrant notification to financial institutions through the
     federal banking agencies and the Federal Trade Commission. In those instances, it is
     imperative that Bixal Components and personnel avoid further unnecessary disclosure
     of personal information, and limit the disclosure of Sensitive PII to those with a
     legitimate need to know.

   * **Other Federal Government Agencies and Congress**

     Bixal should be prepared to respond to inquiries from other governmental agencies
     such as the Government Accountability Office (GAO) and Congress. The Component
     Head, Bixal Director of Technology will work closely to determine
     when notification of the incident should be provided to congressional oversight
     committee chairs. With respect to a major privacy incident, the Bixal Office of
     Information Security with the Bixal Director of Technology,
     will coordinate so that notification to the appropriate committee chair(s) is issued
     either in advance of or along with the issuance of a press release or notification to
     affected individuals.

## Closure

Once mitigation for the privacy incident is completed, the Component Information Security
Officer or the responsible SOC should update the Privacy Incident Report
in the ECOP and recommend incident closure. This recommendation is subject to review
by the Bixal Information Security Office and Director of Technology. However, the ultimate
decision to close the incident rests with the BISO.
Until this determination is reached the Bixal Information Security Office or Director of
Technology has closed the incident, the incident will remain open for review or
further incident handling.

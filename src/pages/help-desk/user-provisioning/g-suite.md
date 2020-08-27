# G Suite

This page details the process for provisioning a user account in Bixal’s G Suite tenant. You will need administrator access in G Suite and the License administrator role in Office 365.

Single Sign On (SSO) is configured between Bixal’s G Suite and Bixal’s Office 365 tenant. Azure AD is the primary identity provider. Once a user is provisioned in both Azure AD and G Suite, the user can login into G Suite using their Azure AD login credentials.

## Provision user in G Suite:
1. Create user in Office 365 tenant
    * The user must have a mailbox, so it will need to have an active Exchange license
2. Assign the user a G Suite enterprise application license in [Azure AD](https://aad.portal.azure.com/)
    1. Go to [https://aad.portal.azure.com](https://aad.portal.azure.com)
    2. Click **Enterprise applications** in the left pane
    3. Search **G Suite** in the search bar
    4. Click the G Suite enterprise application
        * ![Click the G Suite enterprise application](../../images/user-provisioning-g-suite/click-the-g-suite-enterprise-application.png)
    5. Click **Users and groups** in the left pane
    6. Click **+ Add user**
        * ![Click + Add user](../../images/user-provisioning-g-suite/click-add-user.png)
    7. Search for the user
    8. Click **Select**
    9. Click **Assign** to assign the G Suite enterprise license to the user
        * ![Click Assign](../../images/user-provisioning-g-suite/click-assign.png)
3. Create the user in [G Suite](https://admin.google.com/)
    1. Go to [https://admin.google.com/](https://admin.google.com/)
    2. Click the **Users** tile
    3. Click **Add new user**
        * ![Click Add new user](../../images/user-provisioning-g-suite/click-add-new-user.png)
    4. A dialogue box will open, complete the required fields
        * The primary email address in G Suite must match the email address in Office 365
4. Assign the user a G Suite Business license in G Suite
    1. Select the checkbox for the user
    2. Click **More**
    3. Click **Assign licenses**
        * ![Click Assign licenses](../../images/user-provisioning-g-suite/click-assign-licenses.png)
    4. Select **G Suite Business** and click **Assign**
